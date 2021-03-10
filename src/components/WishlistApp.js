import React from 'react';
import Header from './Header';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import OptionModal from './Modal';

class WishlistApp extends React.Component {
	state = {
		options: [],
		selectedWish: undefined
	}
	handleDeleteOptions = () => {
		this.setState(() => ({options: []}));
	};
	handleDeleteOption = (optionToRemove) => {
		this.setState ((prevState) => ({
			options: prevState.options.filter((option) => {
				return optionToRemove !== option;
			})
		}))
	}
	handlePick = (prevState) => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
		const option = this.state.options[randomNum];
		this.setState(() => ({selectedWish: option}));
	};
	handleAddOption = (option) => {
		if (!option) {
			return 'Enter valid value to add item';
		} else if (this.state.options.indexOf(option) > -1){
			return 'This option already exists';
		}
		this.setState((prevState) => ({options: prevState.options.concat(option)}));
	}
	handleClearModal = () => {
		this.setState(() => ({selectedWish: undefined}));
	}
	componentDidMount(){
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
			if (options){
				this.setState(() => ({options: options}))
			}
		} catch(e) {}
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.options.length !== this.state.options.length) {
			const json = JSON.stringify(this.state.options);
			localStorage.setItem('options', json);
			console.log('saving data!');
		}

	}
	componentWillUnmount() {
		console.log('componentWillUnmount');
	}

	render() {
		const subtitle = 'Puts your wishes in the hands of a computer';
		return (
			<div>
				<Header subtitle={subtitle} />
				<div className="container">
					<Action
						hasOptions={this.state.options.length > 0}
						handlePick={this.handlePick}
					/>
					<div className="widget">
						<Options
							options={this.state.options}
							handleDeleteOptions={this.handleDeleteOptions}
							handleDeleteOption={this.handleDeleteOption}
						/>
						<AddOption
							handleAddOption={this.handleAddOption}
						/>
						<OptionModal
							selectedWish={this.state.selectedWish}
							handleClearModal={this.handleClearModal}
						/>
					</div>

				</div>

			</div>
		)
	}
}

export default WishlistApp;
