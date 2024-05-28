import React from 'react';
import { Card, Col, Row } from 'antd';

const gridStyle: React.CSSProperties = {
    height: 30,
    width: 80,
    margin:"2px"
  };
const bodystyle: React.CSSProperties ={
    padding:"1px",
    // boxShadow: "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",

}
  const SkillCard: React.FC = () => (
    <div className='absolute'>
      <Row>
      <Col span={2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle}  hoverable={true} >
             Javascript
          </Card>
        </Col>
        <Col span={2} style={{ margin: '2px' }} >
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true} >
            Python
          </Card>
        </Col>
        <Col span={2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true}>
            React
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle}  hoverable={true} >
             Javascript
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }} >
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true} >
            Python
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true}>
            React
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle}  hoverable={true} >
             Javascript
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }} >
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true} >
            Python
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true}>
            React
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle}  hoverable={true} >
             Javascript
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }} >
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true} >
            Python
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true}>
            React
          </Card>
        </Col>
        <Col span={2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle}  hoverable={true} >
             Javascript
          </Card>
        </Col>
        <Col span={2} style={{ margin: '2px' }} >
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true} >
            Python
          </Card>
        </Col>
        <Col span={2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true}>
            React
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle}  hoverable={true} >
             Javascript
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }} >
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true} >
            Python
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true}>
            React
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle}  hoverable={true} >
             Javascript
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }} >
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true} >
            Python
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true}>
            React
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle}  hoverable={true} >
             Javascript
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }} >
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true} >
            Python
          </Card>
        </Col>
        <Col span={1.2} style={{ margin: '2px' }}>
          <Card style={gridStyle} bodyStyle={bodystyle} hoverable={true}>
            React
          </Card>
        </Col>
      </Row>
    </div>
  );
  

export default SkillCard;