import React from 'react';
import { Link } from 'react-router';
import  Sendmessage  from './Sendmessage.js'
import NotFound from './NotFound.js';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import Gallery from './Photo.js';


const IMAGES = [
	{id: 'img/theGroup',caption:"our group", orientation: 'square', useForDemo: true },
	{id: 'img/be-the-first-bg',caption:"our group", orientation: 'landscape', useForDemo: true }, 
	{id: 'img/ME',caption:"our group", orientation: 'landscape', useForDemo: true }, 
	{id: 'img/newarrival',caption:"our group", orientation: 'landscape', useForDemo: true }, 
	{id: 'img/culture',caption:"our group", orientation: 'landscape', useForDemo: true },
];


const oriimage = function(str){
	return str + '.jpg'
}

const thum = function(str){
	return str + 'thum.jpg'
}


class Index extends React.Component {
	render(){
		return(
			
			<div className="Index">

			  	<div className="sectionOne">
					<Grid>
				    	<div className="row sectionOne-info wow fadeIn">
			      		<div className="col-sm-10 col-sm-offset-1 text-center">
				        	<h1 className="wow fadeIn title-one">WELCOME TO SJTU-AA</h1>
				        	<br />
				        	<div className="wow fadeIn" data-wow-delay="0.5s">
				        		<p className="lead" >SJTU STUDENT & ALUMNI ASSOCIATION AT UM</p>
				      		</div>
			      		</div>
				    	</div>
					</Grid>
			   	</div>
			   	<section id="be-the-first" className="pad-lg" >
			      <div className="container fourimage">
			        <div className="row">
			          <div className="col-sm-8 col-sm-offset-2 text-center margin-30 wow fadeIn">
			            <h2 className="aboutus" style={{color: '#FFFFFF'}}>ABOUT US</h2>
			          </div>
			        </div>
			      	<div className="row">
				 				<div className="first">
							    <div className="col-sm-6 wow fadeInUp text-center" data-wow-delay="0.1s">
							    	<img class="news-img pull-left img-fluid" id="fourimage" src="img/first.png" alt="Responsive image"/>
								    <h3 style={{color: '#FFFFFF'}}>The first</h3>
								    <p style={{color: '#FFFFFF'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
							    </div>
								</div>
								<div className="second">
							    <div className="col-sm-6 wow fadeInUp text-center second" data-wow-delay="0.2s">
							    	<img class="news-img pull-left img-fluid" id="fourimage" src="img/second.png" alt="Responsive image"/>
								    <h3 style={{color: '#FFFFFF'}}>The second</h3>
								    <p style={{color: '#FFFFFF'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
							    </div>
								</div>
							</div>
							<div className="row">
								<div className="third">
							    <div className="col-sm-6  wow fadeInUp text-center third" data-wow-delay="0.3s">
							    	<img class="news-img pull-left img-fluid" id="fourimage" src="img/fourth.png" alt="Responsive image"/>
								    <h3 style={{color: '#FFFFFF'}}>The third</h3>
								    <p style={{color: '#FFFFFF'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
							    </div>
								</div>
								<div className="fourth">
							    <div className="col-sm-6 wow fadeInUp text-center fourth" data-wow-delay="0.3s">
							    	<img class="news-img pull-left img-fluid" id="fourimage" src="img/third.png" alt="Responsive image"/>
								    <h3 style={{color: '#FFFFFF'}}>The fourth</h3>
								    <p style={{color: '#FFFFFF'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
							   	</div>
								</div>
							</div>
						</div>
					</section>
					<div className="container">
						<div className="row text-center intro">
							<h1>We are the organization blablabla</h1>
						</div>
						<div className="row">
						<div className="col-md-12 text-center">
							<Gallery images={IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
								src: oriimage(id),
								thumbnail: thum(id),
								caption,
								orientation,
								useForDemo,
							}))} />
						</div>
						</div>
					</div>
				</div>
			);
	}
}


export default Index;
