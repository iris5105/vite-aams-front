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
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 150,
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Street',
    dataIndex: 'street',
    key: 'street',
    width: 150,
  },
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
    const [theaderHeight, setTheaderHeight] = useState(null);       //테이블 헤더 영역
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
        dataSource={dataSource}
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
