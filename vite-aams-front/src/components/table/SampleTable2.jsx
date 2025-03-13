import React, { useRef, useState, useEffect } from 'react';
import { Table, Flex, Layout } from 'antd';
import ResizeObserver from 'resize-observer-polyfill';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Other',
    children: [
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: 150,
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 150,
          },
          {
            title: 'Block',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 100,
              },
              {
                title: 'Door No.',
                dataIndex: 'number',
                key: 'number',
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    width: 80,
    fixed: 'right',
  },
];

const dataSource = Array.from({
  length: 100,
}).map((_, i) => ({
  key: i,
  name: 'John Brown',
  age: i + 1,
  street: 'Lake Park',
  building: 'C',
  number: 2035,
  companyAddress: 'Lake Street 42',
  companyName: 'SoftLake Co',
  gender: 'M',
}));

const SampleTable2 = ({size ={}}) => {
  const theadRef = useRef(null);
  console.log('건너온 size :',size);
    const [wdHeight, setWdHeight] = useState(window.innerHeight);
    const [tableHeight, setTableHeight] = useState(wdHeight-210);
  
  
  
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
      setTableHeight(Math.min(wdHeight,size+1) - 210); // wdHeight가 변경될 때마다 tableHeight 업데이트
    }, [wdHeight,size]);

  useEffect(() => {
    if(size > 0) {
    setTableHeight(size-210);
  }
  }, [size]);


  console.log('setSized:', tableHeight);
  return (
    <Layout>
      <Table
        pagination={false}
        columns={columns}
        dataSource={dataSource}
        components={{
          header: {
            wrapper: (props) => <thead ref={theadRef} {...props} />,
          },
        }}
        size="small"
        //  style={{ height:tableHeight,}}
        scroll={{
          x: 'max-content',
          y: tableHeight, // 여기서 부모 컴포넌트의 높이를 기반으로 y 값을 설정
        }}
      />
    </Layout>
  );
};
export default SampleTable2;
