import React from 'react';
import { Link } from 'react-router';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
// const background = require("url-loader?limit=10000!./yo.png");

// const indexStyle = {
// 	width: "100%",
// 	height: "400px",
// 	backgroundImage: "url(" + { background } + ")"
// }

const Index = () => (
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
          <div className="col-sm-8 col-sm-offset-2 text-center margin-30 wow fadeIn" data-wow-delay="0.3s">
            <h2 className="aboutus" style={{color: '#FFFFFF'}}>ABOUT US</h2>
          </div>
        </div>
      	<div className="row">
	 				<div className="first">
				    <div className="col-sm-6 wow fadeInUp text-center" data-wow-delay="0.2s">
				    	<img class="news-img pull-left img-fluid" id="fourimage" src="img/first.png" alt="Responsive image"/>
					    <h3 style={{color: '#FFFFFF'}}>The first</h3>
					    <p style={{color: '#FFFFFF'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
				    </div>
					</div>
					<div className="second">
				    <div className="col-sm-6 wow fadeInUp text-center second" data-wow-delay="0.4s">
				    	<img class="news-img pull-left img-fluid" id="fourimage" src="img/second.png" alt="Responsive image"/>
					    <h3 style={{color: '#FFFFFF'}}>The second</h3>
					    <p style={{color: '#FFFFFF'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
				    </div>
					</div>
				</div>
				<div className="row">
					<div className="third">
				    <div className="col-sm-6  wow fadeInUp text-center third" data-wow-delay="0.6s">
				    	<img class="news-img pull-left img-fluid" id="fourimage" src="img/fourth.png" alt="Responsive image"/>
					    <h3 style={{color: '#FFFFFF'}}>The third</h3>
					    <p style={{color: '#FFFFFF'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
				    </div>
					</div>
					<div className="fourth">
				    <div className="col-sm-6 wow fadeInUp text-center fourth" data-wow-delay="0.6s">
				    	<img class="news-img pull-left img-fluid" id="fourimage" src="img/third.png" alt="Responsive image"/>
					    <h3 style={{color: '#FFFFFF'}}>The fourth</h3>
					    <p style={{color: '#FFFFFF'}}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
				   	</div>
					</div>
				</div>
			</div>
		</section>
		<section id="main-info" className="pad-mid">
			<Grid>
				<Row>
	        <Col sm={ 12 } md={ 6 }>
	          <h3 className="page-header">Send a message</h3>
	          <form
	            ref={ form => (this.loginForm = form) }
	            className="login"
	            onSubmit={ this.handleSubmit }
	          >
	            <FormGroup>
	              <ControlLabel>Name</ControlLabel>
	              <FormControl
	                type="text"
	                ref="name"
	                name="name"
	                placeholder="Name"
	              />
	            </FormGroup>
	            <FormGroup>
	              <ControlLabel>Email Address</ControlLabel>
	              <FormControl
	                type="email"
	                ref="emailAddress"
	                name="emailAddress"
	                placeholder="Email Address"
	              />
	            </FormGroup>
	            <FormGroup>
	              <ControlLabel>Message</ControlLabel>
	              <FormControl componentClass="textarea" placeholder="Message" rows="10"/>
	            </FormGroup>
	            <Button type="submit" bsStyle="success"> Contact Us &nbsp;
	            	<i className="fa fa-envelope bamf"></i>
	            </Button>
	          </form>
	        </Col>
	        <Col sm={ 12 } md={ 6 }>
	        	<h3 className="page-header">Contact us</h3>
	        		<div className="conversation">
	        								<div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Leo Damon</h4>
                                <p>
                                    Cras sit amet nibh libero, in gravida
                                    nulla. Nulla vel metus scelerisque ante
                                    sollicitudin commodo. Cras purus odio,
                                    vestibulum in vulputate at, tempus viverra
                                    turpis.
                                </p>
                            </div>
                        </div>
                        <div className="media text-right">
                            <div className="pull-right">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Mathew DiCaprio</h4>
                                <p>
                                    Cras sit amet nibh libero, in gravida
                                    nulla. Nulla vel metus scelerisque ante
                                    sollicitudin commodo. Cras purus odio,
                                    vestibulum in vulputate at, tempus viverra
                                    turpis.
                                </p>
                            </div>
                        </div>
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Nick Jackson</h4>
                                <p>
                                    Cras sit amet nibh libero, in gravida
                                    nulla. Nulla vel metus scelerisque ante
                                    sollicitudin commodo. Cras purus odio,
                                    vestibulum in vulputate at, tempus viverra
                                    turpis.
                                </p>
                            </div>
                        </div>
            </div>
	        </Col>
	      </Row>
			</Grid>
  	</section>
	</div>
);

export default Index;
