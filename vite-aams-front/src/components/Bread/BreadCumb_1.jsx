import React from 'react'
import { Breadcrumb } from 'antd';

const BreadCumb_1 = ({menuStep}) => {
      const items = menuStep.map((step, index) => ({
        title: step,
        // 필요시 클릭 가능한 경로를 설정할 수도 있음:
        // href: index < menuStep.length - 1 ? `/path/${step}` : undefined
    }));
  return (
    <Breadcrumb
        separator=">"
        style={{ paddingRight : '20px'}}
         items={items}
      >
      </Breadcrumb>
  )
}

export default BreadCumb_1