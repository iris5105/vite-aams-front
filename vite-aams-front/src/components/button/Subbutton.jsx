import React from 'react'
import { Flex, Button } from 'antd';
// const userAuthority = [
//     {   key : 'refresh',
//       value : 1
//     },
//     {   key : 'search',
//       value : 0
//     },
//     {   key : 'add',
//       value : 1
//     },
//     {   key : 'copy',
//       value : 0
//     },
//     {   key : 'delete',
//       value : 0
//     },
//     {   key : 'save',
//       value : 0
//     },
//     {   key : 'print',
//       value : 1
//     },
//     {   key : 'excel',
//       value : 1
//     }    
//     // 1,0,1,0,0,0,1,1
// ]

const userAuthority = [1,1,1,0,0,0,1,1]
const compAuthority = [1,1,1,0,1,1,1,1]


// const compAuthority = [
//   {   key : 'refresh',
//     value : 1
//   },
//   {   key : 'search',
//     value : 1
//   },
//   {   key : 'add',
//     value : 1
//   },
//   {   key : 'copy',
//     value : 0
//   },
//   {   key : 'delete',
//     value : 1
//   },
//   {   key : 'save',
//     value : 1
//   },
//   {   key : 'print',
//     value : 1
//   },
//   {   key : 'excel',
//     value : 1
//   }    
//   // 1,1,1,0,1,1,1,1
// ]


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




function Subbutton() {
  // userAuthority와 compAuthority에서 모두 1인 버튼만 필터링
  const buttonsToDisplay = ButtonDisplay.filter((button, index) => {
    // userAuthority와 compAuthority의 동일한 인덱스를 비교
    return userAuthority[index] === 1 && compAuthority[index] === 1 && button.value === 1;
  });

  const handleBtnClick = (value) => {
    // 버튼 클릭 시 처리할 로직
    console.log(value);
  };

  return (
    <Flex horizontal="true" gap="small" style={{ borderBottom: '1px solid', padding: '5px' }}>
      {buttonsToDisplay.map((button) => (
        <Button className="CommonBtn" style={{ width: 60 }} key={button.key} onClick={() => handleBtnClick(button.label)}>
          {button.label}
        </Button>
      ))}
    </Flex>
  );
}

export default Subbutton;