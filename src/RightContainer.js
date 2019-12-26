import React from 'react'
// import './leftContainer.scss';
import './App.scss';
import { withRouter } from "react-router";
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import About from './About';
import Works from './Works';
import StudyOne from './Studies/StudyOne';
import StudyTwo from './Studies/StudyTwo';
import StudyThree from './Studies/StudyThree';

class RightContainer extends React.Component {
    render() {
    	let { match, location } = this.props;
    	var path = location.pathname;

    	// Seudo Check for mobile or web...
		if(window.innerWidth <= 800 && window.innerHeight <= 820) {
			console.log("SWITCH IT UP")
			var className = " preview";
		} else {
			console.log("NNOOPE")
	    	if (path.includes("Studies")) {
				var className = "expand";		
	    	}
	   	}

	   	if (path == "/") {
	   		var className = " fadeInRight";
	   	}

    	return (
		    <div className={ "rightContainer " + className }>
				<Switch>
					<Route exact path="/works" component={ Works }/>
					<Route exact path="/works/Studies/StudyOne" render={(props) => <StudyOne {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
					<Route exact path="/works/Studies/StudyTwo" render={(props) => <StudyTwo {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
					<Route exact path="/works/Studies/StudyThree" render={(props) => <StudyThree {...props} currentView={ this.props.currentView } startStudy={ this.props.startStudy } />}/>
					<Route exact path="/about" component={ About } />
					<Route exact path="/" component={ Home } />
				</Switch>
				<Navbar location={ path } closeStudy={ this.props.closeStudy } />
		    </div>	
    	)
    }
}

export default withRouter(RightContainer)

function Home() {
	return (
		<div className="section homeSection">
			<div className="">
				<p>Hi, I’m <span className="firstName">Mayer</span>.</p>
				<p className="quoteContainer"><span className="quote">"People can feel perfection."</span> - Walt Disney</p>
				<p>No, I am not perfect. This quote means a lot to me because I think the details are essential. People can feel the sweat and effort that goes into everything we produce…</p>
	
				<p>I spend my days as a designer and developer at <a className="regularLink" href="https://www.whooosreading.org/" target="_blank">WhooosReading</a>.</p>
				<p>I like creating things that are <a className="regularLink" href="https://github.com/mayerseidman" target="_blank">fun and help others</a>  .</p>
				<p>I enjoy writing about <a className="regularLink" href="https://medium.com/design-ideas-thoughts" target="_blank">UI/UX topics</a>. </p>
				<p>I help others grow and share skills as a moderator in a <a className="regularLink" href="https://www.facebook.com/groups/JSLive/" target="_blank">Javascript FB Group</a>.</p>
			</div>
		</div>
  	);
}