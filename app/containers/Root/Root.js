import React, { Component } from 'react';
import css from './style.css';

import Example from 'components/Example';

export default class Root extends Component {
  render() {
  	
    return (
      <div className={css.root}>
      	Root container
        <Example/>
      </div>
    )
  }
}