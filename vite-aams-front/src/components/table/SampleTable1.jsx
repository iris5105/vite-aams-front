import React , {useState, useEffect, useRef} from 'react';
import { Table, Layout } from 'antd';


const SampleTable1 = ({ size }) => {
  const data = Array.from({
    length: 100,
  }).map((_, i) => ({
    key: i+1,
    name: `김태현 ${i+1}`,
    age: 32+i,
    address: `영등포구 여의대방로65길. ${200-i}`,
  }));
  
  const columns = [
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
      width: 100,
      fixed: 'left',
      filters: data.map(item => ({
        text: item.name,
        value: item.name,
      })), // 데이터에서 고유한 이름들을 필터 옵션으로 설정
      onFilter: (value, record) => record.name.includes(value), // 필터링 로직
      filterSearch: true, // 검색 가능하도록 설정
  
    },
    {
      title: 'Age',
      width: 80,
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',
    },
    {
      title: 'Column 8',
      dataIndex: 'address',
      key: '8',
    },
    {
      title: 'Column 9',
      dataIndex: 'address',
      key: '9',
    },
    {
      title: 'Column 10',
      dataIndex: 'address',
      key: '10',
    },
    {
      title: 'Column 11',
      dataIndex: 'address',
      key: '11',
    },
    {
      title: 'Column 12',
      dataIndex: 'address',
      key: '12',
    },
    {
      title: 'Column 13',
      dataIndex: 'address',
      key: '13',
    },
    {
      title: 'Column 14',
      dataIndex: 'address',
      key: '14',
    },
    {
      title: 'Column 15',
      dataIndex: 'address',
      key: '15',
    },
    {
      title: 'Column 16',
      dataIndex: 'address',
      key: '16',
    },
    {
      title: 'Column 17',
      dataIndex: 'address',
      key: '17',
    },
    {
      title: 'Column 18',
      dataIndex: 'address',
      key: '18',
    },
    {
      title: 'Column 19',
      dataIndex: 'address',
      key: '19',
    },
    {
      title: 'Column 20',
      dataIndex: 'address',
      key: '20',
    },
    {
      title: 'Action',
      key: 'operation',
      width: 100,
      render: () => <a>action</a>,
    },
  ];
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
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