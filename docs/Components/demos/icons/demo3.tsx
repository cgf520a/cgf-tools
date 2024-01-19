import React from 'react';
import { Space, Tooltip, message } from 'antd';
import {
  FollowIcon,
  IgnoreIcon,
  ServerIcon,
  AuditIcon,
  TerminalIcon,
  PropertyIcon,
  AuditedIcon,
  NetworkDeviceIcon,
  AllPropertyIcon,
  AttackerIcon,
  VictimIcon,
  ModerateRiskIcon,
  HighRiskIcon,
  LowRiskIcon,
  PendingEventsIcon,
  MiningIcon,
  TotalEventsIcon,
  LostHostsIcon,
  APTEventIcon,
  AbnormalTrafficIcon,
  ZombieHostIcon,
  ThreatIntelligenceIcon,
  MalwareIcon,
  PrivateAddressIcon,
  WEBMaintenanceIcon,
  TrackingIcon,
  WeaponConstructionIcon,
  LoadDeliveryIcon,
  VulnerabilityExploitationIcon,
  InstallationImplantationIcon,
  CommandControlIcon,
  GoalAchievementIcon,
  ClearIcon,
} from '@cgf-tools/icons/SystemColorIconGroup';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const css = {
  fontSize: '36px',
};

const cMap = {
  FollowIcon: {
    icon: FollowIcon,
    text: '关注',
  },
  IgnoreIcon: {
    icon: IgnoreIcon,
    text: '忽略',
  },
  ServerIcon: {
    icon: ServerIcon,
    text: '服务器',
  },
  AuditIcon: {
    icon: AuditIcon,
    text: '待审核',
  },
  TerminalIcon: {
    icon: TerminalIcon,
    text: '终端',
  },
  PropertyIcon: {
    icon: PropertyIcon,
    text: '核心资产',
  },
  AuditedIcon: {
    icon: AuditedIcon,
    text: '已审核',
  },
  NetworkDeviceIcon: {
    icon: NetworkDeviceIcon,
    text: '网络设备',
  },
  AllPropertyIcon: {
    icon: AllPropertyIcon,
    text: '全部资产',
  },
  AttackerIcon: {
    icon: AttackerIcon,
    text: '攻击者',
  },
  VictimIcon: {
    icon: VictimIcon,
    text: '受害者',
  },
  ModerateRiskIcon: {
    icon: ModerateRiskIcon,
    text: '中危',
  },
  HighRiskIcon: {
    icon: HighRiskIcon,
    text: '高危',
  },
  LowRiskIcon: {
    icon: LowRiskIcon,
    text: '低危',
  },
  PendingEventsIcon: {
    icon: PendingEventsIcon,
    text: '待处理事件总数',
  },
  MiningIcon: {
    icon: MiningIcon,
    text: '挖矿',
  },
  TotalEventsIcon: {
    icon: TotalEventsIcon,
    text: '事件总数',
  },
  LostHostsIcon: {
    icon: LostHostsIcon,
    text: '失陷主机个数',
  },
  APTEventIcon: {
    icon: APTEventIcon,
    text: 'APT事件',
  },
  AbnormalTrafficIcon: {
    icon: AbnormalTrafficIcon,
    text: '异常流量',
  },
  ZombieHostIcon: {
    icon: ZombieHostIcon,
    text: '僵尸主机',
  },
  ThreatIntelligenceIcon: {
    icon: ThreatIntelligenceIcon,
    text: '威胁情报',
  },
  MalwareIcon: {
    icon: MalwareIcon,
    text: '恶意程序',
  },
  PrivateAddressIcon: {
    icon: PrivateAddressIcon,
    text: '私有地址',
  },
  WEBMaintenanceIcon: {
    icon: WEBMaintenanceIcon,
    text: 'WEB维护',
  },
  TrackingIcon: {
    icon: TrackingIcon,
    text: '侦察跟踪',
  },
  WeaponConstructionIcon: {
    icon: WeaponConstructionIcon,
    text: '武器构建',
  },
  LoadDeliveryIcon: {
    icon: LoadDeliveryIcon,
    text: '载荷投递',
  },
  VulnerabilityExploitationIcon: {
    icon: VulnerabilityExploitationIcon,
    text: '漏洞利用',
  },
  InstallationImplantationIcon: {
    icon: InstallationImplantationIcon,
    text: '安装植入',
  },
  CommandControlIcon: {
    icon: CommandControlIcon,
    text: '命令控制',
  },
  GoalAchievementIcon: {
    icon: GoalAchievementIcon,
    text: '目标达成',
  },
  ClearIcon: {
    icon: ClearIcon,
    text: '痕迹清理',
  },
};

const keys = Object.keys(cMap);

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return (
    <Space size="large" css={{ flexWrap: 'wrap' }}>
      {keys.map(key => {
        return (
          <CopyToClipboard
            key={key}
            text={`<${key} />`}
            onCopy={() => {
              message.success('复制成功');
            }}
          >
            <Tooltip title="点击复制">
              <Space direction="vertical" align="center" size="small" css={{ rowGap: 0 }}>
                {React.createElement(cMap[key as keyof typeof cMap].icon, { style: css })}
                <span css={{ fontSize: 12 }}>{cMap[key as keyof typeof cMap].text}</span>
              </Space>
            </Tooltip>
          </CopyToClipboard>
        );
      })}
    </Space>
  );
};

export default React.memo(Demo);
