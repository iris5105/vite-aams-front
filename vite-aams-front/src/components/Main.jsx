import React, {useState, useEffect, useRef} from 'react';
import { Layout, Typography, Splitter } from 'antd';
import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Sider from './Sider.jsx';
import { ContentHeightContext } from '../style/ContentHeightContext.jsx';

const {Text } = Typography
const Main = () => {
  const [contentHeight, setContentHeight] = useState(window.innerHeight);
  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight; // Header의 실제 높이
        setContentHeight(window.innerHeight - headerHeight);
      }
    };

    updateHeight(); // 초기 실행
    window.addEventListener('resize', updateHeight); // 화면 크기 변경 감지

    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <ContentHeightContext.Provider value={contentHeight}>
        <Layout>
              {/* Header의 높이 산전용을 위한 ref를 추가 */}
                <div ref={headerRef}>
                  <Header />
                </div>
                <Layout style={{ display: 'flex', flexDirection: 'row', height: contentHeight }}>
                  <Splitter style={{ height: '100%' }}>
                    <Splitter.Panel defaultSize="20%" min="10%" max="70%">
                      <Sider style={{ background: 'white'}} contentHeight = {contentHeight}/>
                    </Splitter.Panel>
                    <Splitter.Panel
                      style={{
                        // margin: '16px',
                        padding: 0,
                        background: 'white',
                        // borderRadius: 20,
                        width: '80%',
                      }}
                    >

                    <Outlet />
                    </Splitter.Panel>
                  </Splitter>
                </Layout>
        </Layout>
    </ContentHeightContext.Provider>
  );
};
export default Main;