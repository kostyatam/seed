import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import css from './style.scss';

export default class Example extends PureComponent {
	render () {
		return (
			<div className={css.example}>
				<span className={css.example__name}>Example</span> component
			</div>
		)
	}
}