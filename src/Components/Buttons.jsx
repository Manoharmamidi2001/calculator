import { Col, Row, Button } from 'antd';
import { FaDivide, FaMinus, FaEquals } from "react-icons/fa";
import { MdBackspace } from 'react-icons/md'
import { FaPlus } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import React from 'react';

const buttonStyle = {
  width: '100%',
  height: '60px',  // Set a consistent height
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  borderRadius: '0px',
  fontWeight:'bold'
};

const Buttons = ({click}) => {
  return (
    <div>
      <Row>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('C')}}>C</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('%')}}>%</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('/')}}><FaDivide /></Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('⌫')}}><MdBackspace/></Button></Col>
      </Row>
      <Row>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('7')}}>7</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('8')}}>8</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('9')}}>9</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('*')}}><RxCross1 /></Button></Col>
      </Row>
      <Row>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('4')}}>4</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('5')}}>5</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('6')}}>6</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('-')}}><FaMinus /></Button></Col>
      </Row>
      <Row>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('1')}}>1</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('2')}}>2</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('3')}}>3</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('+')}}><FaPlus /></Button></Col>
      </Row>
      <Row>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('00')}}>00</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('0')}}>0</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('.')}}>.</Button></Col>
        <Col span={6}><Button color="default" variant="solid" style={buttonStyle} onClick={()=>{click('=')}}><FaEquals /></Button></Col>
      </Row>
    </div>
  );
};

export default Buttons;