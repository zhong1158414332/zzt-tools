import React, { Component } from 'react';
import { Input } from 'antd';
import { Demo } from 'ccf-tools';
import 'ccf-tools/dist/index.css';

export default class index extends Component {
  changeState = (obj, callback = () => {}) => {
    this.setState(obj, callback);
  };

  render() {
    return (
      <div>
        <Input />
        <Demo />
      </div>
    );
  }
}