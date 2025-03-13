import React from 'react'
import { Link } from 'react-router-dom';
import BscDatePicker from '../../components/datePicker/BasicDatePicker';
import RangeDatePicker from '../../components/datePicker/RangeDatePicker';
function Menu2() {
  return (
  <div>
    <h3>Menu2</h3>
    <BscDatePicker/>
    <div>
      <RangeDatePicker/>
    </div>
  </div>
  )
}

export default Menu2