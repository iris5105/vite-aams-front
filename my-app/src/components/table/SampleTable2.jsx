import React, { useRef, useState, useEffect } from 'react';
import { Table, Flex } from 'antd';
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

const SampleTable2 = ({size}) => {
  const [tableHeight, setTableHeight] = useState(0);
  const [theadHeight, setTheadHeight] = useState(0);
  const theadRef = useRef(null);
 console.log('건너온 size :',size);
 
  useEffect(() => {
    const updateTableHeight = () => {
      const windowHeight = window.innerHeight;
      const maxTableHeight = windowHeight - 63; // 헤더, 푸터 등을 고려한 여유 공간
      let newHeight = size - theadHeight;
      console.log('newHeight :', newHeight);

      setTableHeight(Math.min(newHeight, maxTableHeight)); // 화면을 벗어나지 않도록 제한
      console.log('newHeight :', newHeight);
      console.log('maxTableHeight :', maxTableHeight);
    };

    updateTableHeight(); // 초기 실행
    window.addEventListener('resize', updateTableHeight);

    return () => {
      window.removeEventListener('resize', updateTableHeight); // 클린업
    };
  }, [size]);

  useEffect(() => {
    if (theadRef.current) {
      const theadHeight = theadRef.current.offsetHeight;
      setTheadHeight(theadHeight);
      console.log('theadHeight:', theadHeight);
    }
  }, []);
console.log('theadHeight :', theadHeight);

console.log('setSized:', tableHeight);

  return (
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
         style={{ height:tableHeight,}}
        scroll={{
          x: 'max-content',
          y: tableHeight, // 여기서 부모 컴포넌트의 높이를 기반으로 y 값을 설정
        }}
      />
  );
};
export default SampleTable2;
