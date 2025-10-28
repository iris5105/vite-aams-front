import React, {useState} from 'react';
import { Select , Layout, Typography} from 'antd'

const { Text } = Typography;
const options = [
  {
    value : '전환권행사',
    label : 'F51 | 전환권행사'
  },
  {
    value : '교환권행사',
    label : 'F55 | 교환권행사'
  },
  {
    value : '신주인수권행사',
    label : 'F60 | 신주인수권행사'
  },

]
export const Filter = () => {
  return (
    <Layout>
      <Select
        options={options}
        style={{ width: 200 }}
        optionLabelProp="value"
        defaultValue={options[0].value}
      />
    </Layout>
  );
};


export default Filter;