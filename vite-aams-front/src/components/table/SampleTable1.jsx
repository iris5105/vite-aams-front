import React , {useState, useEffect, useRef} from 'react';
import { Table, Layout } from 'antd';

const columns = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
    sorter: true,
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
    fixed: 'right',
    width: 100,
    render: () => <a>action</a>,
  },
];
const dataSource = Array.from({
  length: 100,
}).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));
const SampleTable1 = ({ size ={}}) => {

    const [wdHeight, setWdHeight] = useState(window.innerHeight);
    const [tableHeight, setTableHeight] = useState(wdHeight-63);
  
  
  
  useEffect(() => {
    // 윈도우 크기가 변경될 때마다 실행되는 함수
    const handleResize = () => {
      setWdHeight(window.innerHeight);
    };
  
    // 리사이즈 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);
  
    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setTableHeight(wdHeight - 115); // wdHeight가 변경될 때마다 tableHeight 업데이트
    // console.log('SampleTable1 wdHeight 변경됨:', wdHeight - 115)
  }, [wdHeight]);

  useEffect(() => {
    if(size > 0) {
    setTableHeight(size);
  }
  }, [size]);

  return (
    <Layout>
        <Table
          pagination={false}
          columns={columns}
          dataSource={dataSource}
          scroll={{
            x: 'max-content',
            y : tableHeight
          }}
        />
    </Layout>
  );
};

export default SampleTable1;