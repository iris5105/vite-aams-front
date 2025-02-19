import React,{useState, useEffect} from 'react'
import { Layout } from 'antd'
import SampleTable1 from '../../components/table/SampleTable1'
import SampleTable2 from '../../components/table/SampleTable2';
import Basicbutton from '../../components/button/Basicbutton';

import SeperatePage_TBR from '../../temp/SeperatePage_TBR';

const Temp4 = () => {
  const [wdHeight, setWdHeight] = useState(window.innerHeight);
  const [boardHeight, setBoardHeight] = useState(wdHeight);
  const [sizes, setSizes] = useState([(boardHeight * 0.5),(boardHeight * 0.5)]);

  const handleResize = () => {
    setWdHeight(window.innerHeight);
    console.log('wdHeight: ', window.innerHeight);
    // Splitter의 각 panel의 사이즈를 측정하여 sizes 업데이트
    const newSizes = [window.innerHeight * 0.5, window.innerHeight * 0.5];
    setSizes(newSizes);
  };

  useEffect(() => {
    setBoardHeight(wdHeight); // wdHeight가 변경될 때마다 tableHeight 업데이트
  }, [window.innerHeight]);

console.log('sizes',sizes);

  return (
    <Layout>
      <SeperatePage_TBR prop = {boardHeight} onSizeChange={setSizes} handleResize={handleResize}>
        <SampleTable1 size={(sizes[0]-55)}/>
        {/* <SampleTable1 style={{height : sizes[0]}}/> */}
        <SampleTable2 size={sizes[1]-60}/>
        {/* <SampleTable2 style={{height : sizes[1]}}/> */}
        <Basicbutton />
      </SeperatePage_TBR>
    </Layout>
  );
};

export default Temp4;
