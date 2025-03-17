import React, {useRef, useState, useEffect} from 'react'
import {Table, Layout} from 'antd'
import dayjs from 'dayjs';


const SampleTable4 = ({ size}) => {
  const columns = [{
    title : 'No.',
    dataIndex : 'no',
    key : 'no',
    width: 100,
  },{
    title : '현금종류',
    dataIndex : 'cash_cd',
    key : 'cash_cd',
  },{
     title : '관리번호',
     dataIndex : 'fnd_cd',
     key : 'fnd_cd',
     width : 90,
  },{
    title : '계좌명',
    dataIndex : 'xx_fund_cd',
    key : 'xx_fund_cd',
  },{
    title : '발행일',
    dataIndex : 'balh_ymd',
    key : 'balh_ymd',
    width: 100,
  },{
    title : '종목명',
    dataIndex : 'hj_nm',
    key : 'hj_nm',
    width: 100,
  },{
    title : '매입일',
    dataIndex : 'maip_ymd',
    key : 'maip_ymd',
    width: 100,
  },{
    title : 'KSD종목',
    dataIndex : 'ksd_jm_cd',
    key : 'ksd_jm_cd',
    width: 100,
  },{
    title : '액면',
    dataIndex : 'aekm',
    key : 'aekm',
    width: 100,
  },{
    title : '이율',
    dataIndex : 'pyom_iyul_per',
    key : 'pyom_iyul_per',
    width: 100,
  },{
    title : '신용등급',
    dataIndex : 'pg_cd',
    key : 'pg_cd',
    width: 100,
  },{
    title : '상환일',
    dataIndex : 'sanghw_ymd',
    key : 'sanghw_ymd',
    width: 100,
  },{
    title : '매매액',
    dataIndex : 'tr_aek',
    key : 'tr_aek',
    width: 100,
  },{
    title : '상환액',
    dataIndex : 'sanghw_aek',
    key : 'sanghw_aek',
    width: 100,
  },{
    title : <>
            이자<br />년수
            </>,
    dataIndex : 'ija_yy_su',
    key : 'ija_yy_su',
    width: 100,
  },{
    title : <>
            년<br />이자횟수
            </>,
    dataIndex : 'ija_yy_hoicha',
    key : 'ija_yy_hoicha',
    width: 100,
  },{
    title : <>
            총<br />이자회사
            </>,
    dataIndex : 'tot_ija_gugan',
    key : 'tot_ija_gugan',
    width: 100,
  },{
    title : '종목코드',
    dataIndex : 'jm_cd',
    key : 'jm_cd',
    width: 100,
  }
];
const data = Array.from({
                          length: 100,
                          }).map((_, index) => ({
                                key: index+1,
                                no : index+1,
                                cash_cd: `현금성 자산 ${index+1}`,
                                fnd_cd: 1000+index+1,
                                xx_fund_cd: `테스트 계좌${index+1}`,
                                balh_ymd: dayjs("2024-01-01").add(index+1, "day").format("YYYY/MM/DD"),
                                hj_nm : `종목명${index+1}`,
                                maip_ymd : dayjs("2025-01-01").add(index+1, "day").format("YYYY/MM/DD"),
                                ksd_jm_cd : `KSD종목${index+1}`,
                                aekm : 1000000+index+1,
                                pyom_iyul_per : 0.5+index+1,
                                pg_cd : index+1%2 === 0 ? 'A' : 'B',
                                sanghw_ymd : dayjs("2026-01-01").add(index+1, "day").format("YYYY/MM/DD"),
                                tr_aek : 1000000+index+1,
                                sanghw_aek : 1000000+index+1,
                                ija_yy_su : index+1%3,
                                ija_yy_hoicha : 2,
                                tot_ija_gugan : index+1%3,
                                jm_cd : `종목코드${index+1}`
                          }));

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
              dataSource={data}
              size = "small"
              scroll={{
                x : 'max-content',
                y: size - theaderHeight
              }}
        />
    </div>
  )
}

export default SampleTable4