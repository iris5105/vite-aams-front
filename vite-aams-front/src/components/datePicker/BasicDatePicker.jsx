import React from 'react';
import dayjs from 'dayjs';
import {DatePicker} from 'antd';

// const presets =[
    
//     {   label : <span>오늘</span>,
//         value: dayjs(new Date()).subtract(7, 'day')
//     },
//     {
//         ladel : <span>7일 전</span>,
//         // value : dayjs().add(7, 'day').format('YYYY-MM-DD')
//         value: dayjs(new Date()).subtract(7, 'day')
//     }
// ]
const DatePresets = [
    {
      label: <span>오늘</span>,
      value: dayjs() // Keep this as a dayjs object, not formatted
    },
    {
        label: <span>1일 전</span>,
        value: dayjs().subtract(1, 'day') // Use dayjs() and subtract 7 days as a dayjs object
    },
    {
        label: <span>2일 전</span>,
        value: dayjs().subtract(2, 'day') // Use dayjs() and subtract 7 days as a dayjs object
    },
    {
      label: <span>7일 전</span>,
      value: dayjs().subtract(1, 'week') // Use dayjs() and subtract 7 days as a dayjs object
    },
  ];
// export function DatePicker(){
//     return(
//       <DatePicker placeholder="Outlined" preset = {presets} />
//     )
// }

export function BasicDatePicker() {
  return (
    <div>
        <DatePicker presets = {DatePresets} showNow = {false}/>
    </div>
    
  )
}

export default BasicDatePicker