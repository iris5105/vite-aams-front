import React from 'react'
import { Flex, Button } from 'antd';
const userAuthority = [
    {   key : 'refresh',
      value : 1
    },
    {   key : 'search',
      value : 0
    },
    {   key : 'add',
      value : 1
    },
    {   key : 'copy',
      value : 0
    },
    {   key : 'delete',
      value : 0
    },
    {   key : 'save',
      value : 0
    },
    {   key : 'print',
      value : 1
    },
    {   key : 'excel',
      value : 1
    }    
    // 1,0,1,0,0,0,1,1
]

const compAuthority = [
  {   key : 'refresh',
    value : 1
  },
  {   key : 'search',
    value : 1
  },
  {   key : 'add',
    value : 1
  },
  {   key : 'copy',
    value : 0
  },
  {   key : 'delete',
    value : 1
  },
  {   key : 'save',
    value : 1
  },
  {   key : 'print',
    value : 1
  },
  {   key : 'excel',
    value : 1
  }    
  // 1,1,1,0,1,1,1,1
]


const ButtonDisplay =[
      {   key : 'refresh',
        label : '새로고침',
        value : 1
      },
      {   key : 'search',
        label : '조회',
        value : 1
      },
      {   key : 'add',
        label : '입력',
        value : 1
      },
      {   key : 'copy',
        label : '복사',
        value : 1
      },
      {   key : 'delete',
        label : '삭제',
        value : 1
      },
      {   key : 'save',
        label : '저장',
        value : 1
      },
      {   key : 'print',
        label : '인쇄',
        value : 1
      },
      {   key : 'excel',
        label : '엑셀',
        value : 1
      }
    // 1,1,1,1,1,1,1,1
]
const CompAuth = [


]
const usrAuth = [

]
const DspBtn = [

]





function Basicbutton() {
    // compAuthority와 userAuthority에서 value가 모두 1인 버튼 필터링
    const buttonsToDisplay = ButtonDisplay.filter((button) => {
      // ButtonDisplay에서 value가 1인지 확인
      if (button.value !== 1) return false;

      // userAuthority에서 해당 key의 value 찾기
      const userAuthItem = userAuthority.find((auth) => auth.key === button.key);
      // compAuthority에서 해당 key의 value 찾기
      const compAuthItem = compAuthority.find((auth) => auth.key === button.key);

      // 두 개의 value가 모두 1인지 확인
      return userAuthItem?.value === 1 && compAuthItem?.value === 1;
  });

  const handleBtnClick = (value) => {
      // console.log(value);
  };
  
    return (
      <Flex horizontal="true" gap="small" style={{borderBottom : " 1px solid ", padding : '5px'}}>
        {buttonsToDisplay.map((button) => (
          <Button className='CommonBtn' style={{ width : 60}} key={button.key} onClick={()=>handleBtnClick(button.label)}>{button.label}</Button>
        ))}
      </Flex>
    );
  }
  

export default Basicbutton