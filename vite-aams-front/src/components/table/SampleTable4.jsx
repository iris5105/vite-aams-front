import React, {useRef, useState, useEffect} from 'react'
import {Table, Layout} from 'antd'
import dayjs from 'dayjs';


const SampleTable4 = ({column, data, size}) => {
  const headerHeight = 77

  return (
    <Layout style={{height:size}}>
        <Table
              pagination={false}
              columns={column}
              dataSource={data}
              scroll={{
                x : 'max-content',
                y: 'max-content'
              }}
        />
    </Layout>
  )
}

export default SampleTable4