import React, {useRef, useState, useEffect} from 'react'
import {Table, Layout} from 'antd'
import dayjs from 'dayjs';
const SampleTable3 = ({column, data, size}) => {

  const headerHeight = 77;


  return (
    <Layout>
        <Table
              pagination={false}
              columns={column}
              dataSource={data}
              scroll={{
                x : 'max-content',
                y: size - headerHeight
              }}
        />
    </Layout>
  )
}

export default SampleTable3


