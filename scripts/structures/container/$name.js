import React, { Component } from 'react';
import css from './style.scss';

export default class Root extends Component {
  render() {
  	
    return (
      <div className={css.hello}>
      	{{name}} container
      </div>
    )
  }
}