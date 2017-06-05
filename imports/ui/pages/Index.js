import React from 'react';
import { Jumbotron } from 'react-bootstrap';

// const background = require("url-loader?limit=10000!./yo.png");

// const indexStyle = {
// 	width: "100%",
// 	height: "400px",
// 	backgroundImage: "url(" + { background } + ")"
// }

const Index = () => (
  <div className="Index">
  	<header>
		<div className="container">
	    	<div className="row header-info">
	      		<div className="col-sm-10 col-sm-offset-1 text-center">
	        	<h1 className="wow fadeIn">WELCOME TO SJTU-AA</h1>
	        	<br />
	        	<div className="wow fadeIn" data-wow-delay="0.5s">
	        		<p className="lead" >SJTU STUDENT & ALUMNI ASSOCIATION.</p>

	      		</div>
	      		</div>
	    	</div>
		</div>
   	</header>
    <Jumbotron className="text-center">
      <h2>Base</h2>
      <p>A starting point for Meteor applications.</p>
      <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
      <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.15.0</p>
    </Jumbotron>
  </div>
);

export default Index;
