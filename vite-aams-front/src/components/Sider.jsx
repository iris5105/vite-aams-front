import React, { useState, useEffect } from 'react';
import { Layout, Menu, Tooltip } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const items = [
  {
    key: '00',
    label: '테스트페이지',
    icon: <MailOutlined />,
    children: [
      {
        key: '0000',
        label: '공통컴포넌트',
        value: 'temp6'
      },
      {
        key: '0001',
        label: '화면 분할1',
        value: 'temp1'
      },
      {
        key: '0002',
        label: '화면 분할2',
        value: 'temp2'
      },
      {
        key: '0003',
        label: '좌,상하',
        value: 'temp3'
      },
      {
        key: '0004',
        label: '상하,우',
        value: 'temp4'
      },
      {
        key: '0005',
        label: '상,하',
        value: 'temp5'
      },

    ],
  },
  {
    key: '10',
    label: '자문일일',
    icon: <MailOutlined />,
    children: [
      {
        key: '1000',
        label: '시스템 수정 및 개발 의회',
        value: 'menu'
      },
      {
        type: 'divider'
      },
      {
        key: '1001',
        label: '회사 기본정보 관리',
        value: 'menu1'
      },
      {
        type: 'divider'
      },
      {
        key: '1010',
        label: '계좌 관리그룹 등록',
        value: 'menu2'
      },
      {
        key: '1011',
        label: '계좌 계약정보 관리',
        value: 'menu3'
      },
      {
        key: '1012',
        label: '입,출금등록',
      },
      {
        type: 'divider'
      },
      {
        key: '1021',
        label: '현금 매입(종목)등록',
      },
      {
        key: '1022',
        label: '체권 매입등록',
      },
    ],
  },
  {
    key: '20',
    label: '공모청약(권리)',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '2000',
        label: 'Option 5',
      },
      {
        key: '2001',
        label: 'Option 6',
      },
      {
        key: '2002',
        label: 'Option 7',
      },
      {
        key: '2005',
        label: 'Option 8',
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: '30',
    label: '자산운용용',
    icon: <SettingOutlined />,
    children: [
      {
        key: '3010',
        label: 'Option 9',
      },
      {
        key: '3011',
        label: 'Option 10',
      },
      {
        key: '3012',
        label: 'Option 11',
      },
      {
        key: '3013',
        label: 'Option 12',
      },
    ],
  },
  {
    key: '40',
    label: '외화자산운용',
    icon: <SettingOutlined />,
    children: [
      {
        key: '4000',
        label: 'Option 13',
      },
      {
        key: '4001',
        label: 'Option 14',
      },
    ],
  },
];

export default function Sider({contentHeight}) {

  const navigate = useNavigate();
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [openKeys, setOpenKeys] = useState([]);
  const currentLocation = useLocation();
  const currentPath = currentLocation.pathname;

  //메인페이지로 돌아갔을 경우 menu 초기화
  useEffect(() => {
    if (currentPath === '/main') {
      setSelectedKeys([]);
      setOpenKeys([]);
    }
  }, [currentPath]);

  //메뉴 이동
  const goMenu = (selectItem) => {
    const location = selectItem.item.props.value;
    navigate(location);
    setSelectedKeys([selectItem.key]);
  };

  // Tooltip을 Menu.Item에 적용하는 함수
  const wrapWithTooltip = (label, key) => {
    return (
      <Tooltip placement="right" title={label}>
        <span>{label}</span>
      </Tooltip>
    );
  };

  //menu의 리스트 생성
  const renderMenuItems = (items) => {
    return items.map(item => {
      if (item.children) {
        // 자식 메뉴가 있을 경우
        return {
          ...item,
          label: item.label,
          children: renderMenuItems(item.children),
        };
      }

      // 자식 메뉴가 없을 경우
      return {
        ...item,
        label: wrapWithTooltip(item.label, item.key),
      };
    });
  };

  return (
    <Layout
     if = "sider"
      style={{
        overflow: 'auto',
        height: contentHeight ? contentHeight : '93vh',
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: 'thin',
        scrollbarGutter: 'stable',
        backgroundColor: 'white',
      }}

    >
      <Menu
        mode="inline"
        style={{
          borderRight: 0,
        }}
        items={renderMenuItems(items)} // items 렌더링
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onSelect={(item) => goMenu(item)}
        onOpenChange={(keys) => setOpenKeys(keys)}

      />
    </Layout>
  );
}
