import React from 'react';
import Option from './Option';

const Options = (props) =>  (
	<div>
		<div className="widget-header">
			<h3 className="widget-header__text">Your Wishes</h3>
			<button
				onClick={props.handleDeleteOptions}
				className="button button__link"
			>
				All Done
			</button>
		</div>
		{props.options.length === 0 && <p className="widget-message">Please add your wish to get started!</p>}
		{
			props.options.map((option, index) => (
				<Option
					key={option}
					optionText={option}
					count={index + 1}
					handleDeleteOption={props.handleDeleteOption}
				/>
				))
		}
	</div>
);

export default Options;
