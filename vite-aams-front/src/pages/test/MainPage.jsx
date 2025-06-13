import React from 'react'
import { Col,  Row, Tabs, Layout} from 'antd';


export const MainPage = () => {
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];
  return (

    <Layout style = {{ height : '100%'}}>
        <Row justify="space-around">
          <Col span={8}>
            <Tabs
                type="card"
                size="large"
                style={{
                  marginBottom: 32,
                }}
                items={Array.from({
                  length: 1,
                }).map((_, i) => {
                  const id = String(i + 1);
                  return {
                    label: `Card Tab ${id}`,
                    key: id,
                    children: `Content of card tab ${id}`,
                  };
                })}
              />

          </Col>
          <Col span={8}>
            <Tabs
                type="card"
                size="large"
                style={{
                  marginBottom: 32,
                }}
                items={Array.from({
                  length: 2,
                }).map((_, i) => {
                  const id = String(i + 1);
                  return {
                    label: `Card Tab ${id}`,
                    key: id,
                    children: `Content of card tab ${id}`,
                  };
                })}
              />

              </Col>
          <Col span={8}></Col>
        </Row>
        <Row justify="space-around">
          <Col span={8}></Col>
          <Col span={8}></Col>
          <Col span={8}></Col>
        </Row>
    </Layout>
  )
}
export default MainPage
