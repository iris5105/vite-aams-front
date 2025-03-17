import React , {useState, useEffect, useRef} from 'react';
import { Table, Layout } from 'antd';


const SampleTable1 = ({ size, prop }) => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [columns,data] = prop;
  const [theaderHeight, setTheaderHeight] = useState(null);       //테이블 헤더 영역
  const tableRef = useRef(null); // 테이블을 참조할 ref 생성
  const handleChange = (filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

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
          onChange={handleChange}
          pagination={false}
          columns={columns}
          dataSource={data}
          size = "small"
          scroll={{
            x: 'max-content',
            y : size - theaderHeight
          }}
        />
    </div>
  );
};

export default SampleTable1;