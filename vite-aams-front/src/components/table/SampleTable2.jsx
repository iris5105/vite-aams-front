import React, { useRef, useState, useEffect } from 'react';
import { Table, Flex, Layout } from 'antd';
import ResizeObserver from 'resize-observer-polyfill';



const SampleTable2 = ({size, prop}) => {
    const [theaderHeight, setTheaderHeight] = useState(null);       //테이블 헤더 영역
    const [columns,data] = prop;
    const tableRef = useRef(null); // 테이블을 참조할 ref 생성
    useEffect(() => {
      setTimeout(() => {
        if (tableRef.current) {
          const theader = tableRef.current.querySelector(".ant-table-thead tr"); // tbody의 첫 번째 tr 선택
          console.log(theader);
          if (theader) {
            setTheaderHeight(theader.clientHeight);
          }
        }
      }, 80);
    }, []);
  return (
    <div ref={tableRef}>
      <Table
        pagination={false}
        columns={columns}
        dataSource={data}
        size="small"
        scroll={{
          x: 'max-content',
          y: size - theaderHeight, 
        }}
      /> 
    </div>
  );
};
export default SampleTable2;
