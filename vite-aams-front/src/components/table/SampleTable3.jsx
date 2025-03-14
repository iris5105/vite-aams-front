import React, {useRef, useState, useEffect} from 'react'
import {Table, Layout} from 'antd'
import dayjs from 'dayjs';
const SampleTable3 = ({column, data, size}) => {
    const [theaderHeight, setTheaderHeight] = useState(null);       //테이블 헤더 영역
    const tableRef = useRef(null); // 테이블을 참조할 ref 생성
    useEffect(() => {
      setTimeout(() => {
        if (tableRef.current) {
          const theader = tableRef.current.querySelector(".ant-table-thead tr"); // tbody의 첫 번째 tr 선택
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
              columns={column}
              dataSource={data}
              scroll={{
                x : 'max-content',
                y: size - theaderHeight
              }}
        />
    </div>
  )
}

export default SampleTable3


