import React from 'react';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
const { RangePicker } = DatePicker;
const rangePresets = [
  {
    label: '1일 전',
    value: [dayjs().add(-1, 'd'), dayjs()],
  },
  {
    label: '2일 전',
    value: [dayjs().add(-2, 'd'), dayjs()],
  },

  {
    label: '1주 전',
    value: [dayjs().add(-1, 'w'), dayjs()],
  },
  {
    label: '1달 전',
    value: [dayjs().add(-1, 'M'), dayjs()],
  },
  {
    label: '3달 전',
    value: [dayjs().add(-3, 'M'), dayjs()],
  },
];

  const RangeDatePicker = () => {
  return (
    <RangePicker presets={rangePresets}/>
  )
}

export default RangeDatePicker