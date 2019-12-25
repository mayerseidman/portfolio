import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import './App.scss';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = { wordValue: "Designer", currentCount: 10, currentView: "preview" };
	}
	componentDidMount() {
		
	}
	startStudy() {
		this.setState({ currentView: "startStudy" })
	}
	closeStudy() {
		this.setState({  currentView: "preview" })
	}

	render() {
    	// Seudo Check for mobile or web...
		if(window.innerWidth <= 800 && window.innerHeight <= 820) {
			var leftContainer = (
				<div>
					<a onClick={ this.closeStudy.bind(this) }><LeftContainer currentView={ this.state.currentView } /></a>
				</div>
			)
		} else {
			var leftContainer = (<LeftContainer currentView={ this.state.currentView } />)
	   }
		var rightContainer = (<RightContainer currentView={ this.state.currentView } 
			startStudy={ this.startStudy.bind(this) } closeStudy={ this.closeStudy.bind(this) } />
		)
		return (
			<div className="portfolioContainer">
				<Router>
					{ leftContainer }
				    { rightContainer }
			    </Router>	
			</div>
		)
	}
}

export default App;