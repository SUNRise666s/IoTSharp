﻿using DotNetCore.CAP;
using Dynamitey.DynamicObjects;
using IoTSharp.Contracts;
using IoTSharp.Data;
using IoTSharp.Dtos;
using IoTSharp.Extensions;
using IoTSharp.Gateways;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using MQTTnet;
using MQTTnet.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IoTSharp.Services.MQTTControllers
{
    /// <summary>
    /// 兼容thingsboard协议
    /// </summary>
    [MqttController]
    [MqttRoute("v1/gateway")]
    public class V1GatewayController : GatewayController
    {
        public V1GatewayController(ILogger<GatewayController> logger, IServiceScopeFactory scopeFactor,
         IOptions<AppSettings> options, ICapPublisher queue, RawDataGateway rawDataGateway
         ) : base(logger, scopeFactor, options, queue, rawDataGateway)
        {
        }
    }

    [MqttController]
    [MqttRoute("[controller]")]
    public class GatewayController : MqttBaseController
    {
        private readonly ILogger _logger;
        private readonly IServiceScopeFactory _scopeFactor;
        private readonly ICapPublisher _queue;
        private readonly RawDataGateway _rawData;

        public GatewayController(ILogger<GatewayController> logger, IServiceScopeFactory scopeFactor,
            IOptions<AppSettings> options, ICapPublisher queue, RawDataGateway rawDataGateway
            )
        {
            _logger = logger;
            _scopeFactor = scopeFactor;
            _queue = queue;
            _rawData = rawDataGateway;
        }

        [MqttRoute("telemetry")]
        public Task telemetry()
        {
            var _dev = GetSessionItem<Device>();
            var lst = Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, List<GatewayPlayload>>>(Message.ConvertPayloadToString());
            _logger.LogInformation($"{ClientId}的数据{Message.Topic}是网关数据， 解析到{lst?.Count}个设备");
            lst?.Keys.ToList().ForEach(dev =>
            {
                var plst = lst[dev];
                var device = _dev.JudgeOrCreateNewDevice(dev, _scopeFactor, _logger);
                _queue.PublishSubDeviceOnline(_dev.Id, device);
                _logger.LogInformation($"{ClientId}的网关数据正在处理设备{dev}， 设备ID为{_dev?.Id}");
                plst.ForEach(p =>
                {
                    _queue.PublishTelemetryData(new PlayloadData() { DeviceId = device.Id, DeviceStatus = p.DeviceStatus, ts = new DateTime(p.Ticks), MsgBody = p.Values, DataSide = DataSide.ClientSide, DataCatalog = DataCatalog.TelemetryData });
                });
                _logger.LogInformation($"{ClientId}的网关数据处理完成，设备{dev}ID为{device?.Id}共计{plst.Count}条");
            });
            return Ok();
        }

        [MqttRoute("attributes")]
        public Task Attributes()
        {
            var _dev = GetSessionItem<Device>();
            var lst = Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, List<GatewayPlayload>>>(Message.ConvertPayloadToString());
            _logger.LogInformation($"{ClientId}的数据{Message.Topic}是网关数据， 解析到{lst?.Count}个设备");
            lst?.Keys.ToList().ForEach(dev =>
            {
                var plst = lst[dev];
                var device = _dev.JudgeOrCreateNewDevice(dev, _scopeFactor, _logger);
                _queue.PublishSubDeviceOnline(_dev.Id, device);
                _logger.LogInformation($"{ClientId}的网关数据正在处理设备{dev}， 设备ID为{device?.Id}");
                plst.ForEach(p =>
                {
                    _queue.PublishAttributeData(new PlayloadData() { DeviceId = device.Id, DeviceStatus = p.DeviceStatus, ts = new DateTime(p.Ticks), MsgBody = p.Values, DataSide = DataSide.ClientSide, DataCatalog = DataCatalog.TelemetryData });
                });
                _logger.LogInformation($"{ClientId}的网关数据处理完成，设备{dev}ID为{device?.Id}共计{plst.Count}条");
            });
            return Ok();
        }

        [MqttRoute("connect")]
        public Task on_connect()
        {
            var _dev = GetSessionItem<Device>();
            var ds = Newtonsoft.Json.JsonConvert.DeserializeObject<GatewayDeviceStatus>(Message.ConvertPayloadToString());
            if (ds != null)
            {
                var device = _dev.JudgeOrCreateNewDevice(ds.Device, _scopeFactor, _logger);
                if (device != null)
                {
                    _queue.PublishDeviceStatus(device.Id, DeviceStatus.Good);
                }
                else
                {
                    _logger.LogWarning("未能创建或者找到网关的设备。");
                }
            }
            else
            {
                _logger.LogWarning("无法获取网关的子设备。");
            }
            return Ok();
        }

        [MqttRoute("disconnect")]
        public Task Disconnect()
        {
            var _dev = GetSessionItem<Device>();
            var ds = Newtonsoft.Json.JsonConvert.DeserializeObject<GatewayDeviceStatus>(Message.ConvertPayloadToString());
            if (ds != null)
            {
                var device = _dev.JudgeOrCreateNewDevice(ds.Device, _scopeFactor, _logger);
                if (device != null)
                {
                    _queue.PublishDeviceStatus(device.Id, DeviceStatus.Bad);
                }
                else
                {
                    _logger.LogWarning("未能创建或者找到网关的设备。");
                }
            }
            else
            {
                _logger.LogWarning("无法获取网关的子设备。");
            }
            return Ok();
        }

        [MqttRoute("xml")]
        public async Task UploadXmlData()
        {
            try
            {
                var _dev = GetSessionItem<Device>();
                var result = await _rawData.ExecuteAsync(_dev, "xml", Message.ConvertPayloadToString());
                _logger.LogInformation($"调用XML网关处理语句返回:{result.Code}-{result.Msg}");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"调用XML网关失败:{ex.Message}");
            }
        }

        [MqttRoute("json")]
        public async Task UploadJsonData()
        {
            try
            {
                var _dev = GetSessionItem<Device>();
                var result = await _rawData.ExecuteAsync(_dev, "json", Message.ConvertPayloadToString());
                _logger.LogInformation($"调用Json网关处理语句返回:{result.Code}-{result.Msg}");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"调用Json网关失败:{ex.Message}");
            }
        }
    }
}