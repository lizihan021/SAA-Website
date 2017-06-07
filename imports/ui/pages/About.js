import React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, Thumbnail, Image} from 'react-bootstrap';

const About= () => (
  <div className="About">
  	<h2 className="page-header">Our mission:</h2>
	<p className="mission">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
		dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
		ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
		nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
  	<h2 className="page-header">What we have done:</h2>
  	<ul className="timeline">
		    <li className="wow fadeInDown" data-wow-delay="0.0s">
		        <div className="timeline-badge">
		          <a><i className="fa fa-circle" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>Timeline Event</h4>
		            </div>
		            <div className="timeline-body">
		                <p>Invitamus me testatur sed quod non dum animae tuae lacrimis ut libertatem deum rogus aegritudinis causet. Dicens hoc contra serpentibus isto.</p>
		            </div>
		            <div className="timeline-footer">
		                <p className="text-right">Feb-21-2014</p>
		            </div>
		        </div>
		    </li>
		    
		    <li className="timeline-inverted wow fadeInDown"  data-wow-delay="0.1s">
		        <div className="timeline-badge">
		            <a><i className="fa fa-circle invert" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>Timeline Event</h4>
		            </div>
		            <div className="timeline-body">
		                <p>Stranguillione in deinde cepit roseo commendavit patris super color est se sed. Virginis plus plorantes abscederem assignato ipsum ait regem Ardalio nos filiae Hellenicus mihi cum. Theophilo litore in lucem in modo invenit quasi nomen magni ergo est se est Apollonius, habet clementiae venit ad nomine sed dominum depressit filia navem.</p>
		            </div>
		            <div className="timeline-footer">
		                <p className="text-right">Feb-23-2014</p>
		            </div>
		        </div>
		    </li>
		    
		    <li className="wow fadeInDown" data-wow-delay="0.2s">
		        <div className="timeline-badge">
		            <a><i className="fa fa-circle" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>Timeline Event</h4>
		            </div>
		            <div className="timeline-body">
		                <p>Advenientibus aliorum eam ad per te sed. Facere debetur aut veneris accedens. Advenientibus aliorum eam ad per te sed. Facere debetur aut veneris accedens. Advenientibus aliorum eam ad per te sed. Facere debetur aut veneris accedens.</p>
		            </div>
		            <div className="timeline-footer">
		                <p className="text-right">Feb-23-2014</p>
		            </div>
		        </div>
		    </li>
		    
		    <li className="timeline-inverted wow fadeInDown" data-wow-delay="0.3s">
		        <div className="timeline-badge">
		            <a><i className="fa fa-circle invert" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>Timeline Event</h4>
		            </div>
		            <div className="timeline-body">
		                <p>Volvitur ingreditur id ait mea vero cum autem quod ait Cumque ego illum vero cum unde beata. Commendavi si non dum est in. Dionysiadem tuos ratio puella ut casus, tunc lacrimas effunditis magister cives Tharsis. Puellae addita verbaque capellam sanctissima quid, apollinem existimas filiam rex cum autem quod tamen adnuente rediens eam est se in. Peracta licet ad nomine Maria non ait in modo compungi mulierem volutpat.</p>
		            </div>
		            <div className="timeline-footer">
		                <p className="text-right">Feb-27-2014</p>
		            </div>
		        </div>
		    </li>
		    
		    <li className="wow fadeInDown" data-wow-delay="0.4s">
		        <div className="timeline-badge">
		            <a><i className="fa fa-circle" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>Timeline Event</h4>
		            </div>
		            <div className="timeline-body">
		                <p>Adfertur guttae sapientiae ducitur est Apollonius ut a a his domino Lycoridem in lucem. Theophile atque bona dei cenam veniebant est cum. Iusto opes mihi Tyrum in modo compungi mulierem ubi augue eiusdem ordo quos vero diam omni catervis famulorum. Bene dictis ut diem finito servis unde.</p>
		            </div>
		            <div className="timeline-footer">
		                <p className="text-right">Mar-01-2014</p>
		            </div>
		        </div>
		    </li>
		    
		    <li  className="timeline-inverted wow fadeInDown"  data-wow-delay="0.5s">
		        <div className="timeline-badge">
		            <a><i className="fa fa-circle invert" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>Timeline Event</h4>
		            </div>
		            <div className="timeline-body">
		                <p>Crede respiciens loco dedit beneficio ad suis alteri si puella eius in. Acceptis codicello lenonem in deinde plectrum anni ipsa quod eam est Apollonius.</p>
		            </div>
		            <div className="timeline-footer primary">
		                <p className="text-right">Mar-02-2014</p>
		            </div>
		        </div>
		    </li>
		    <li className="clearfix no-float"></li>
		</ul>
		<h2 className="page-header">Who we are:</h2>
		<Row>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.0s">
		      <Thumbnail src="/img/avatar-zihan.png" alt="242x200">
		        <h3>Thumbnail label</h3>
		        <p>Description</p>
		      </Thumbnail>
		    </Col>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.1s">
		      <Thumbnail src="/img/avatar-zihan.png" alt="242x200">
		        <h3>Thumbnail label</h3>
		        <p>Description</p>
		      </Thumbnail>
		    </Col>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.2s">
		      <Thumbnail src="/img/avatar-zihan.png" alt="242x200">
		        <h3>Thumbnail label</h3>
		        <p>Description</p>
		      </Thumbnail>
		    </Col>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.3s">
		      <Thumbnail src="/img/avatar-zihan.png" alt="242x200">
		        <h3>Thumbnail label</h3>
		        <p>Description</p>
		      </Thumbnail>
		    </Col>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.4s">
		      <Thumbnail src="/img/avatar-zihan.png" alt="242x200">
		        <h3>Thumbnail label</h3>
		        <p>Description</p>
		      </Thumbnail>
		    </Col>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.5s">
		      <Thumbnail src="/img/avatar-zihan.png" alt="242x200">
		        <h3>Thumbnail label</h3>
		        <p>Description</p>
		      </Thumbnail>
		    </Col>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.6s">
		      <Thumbnail src="/img/avatar-zihan.png" alt="242x200">
		        <h3>Thumbnail label</h3>
		        <p>Description</p>
		      </Thumbnail>
		    </Col>
		</Row>
		<h2 className="page-header">Sponsors:</h2>
		<Row>
			<Col xs={12} sm={6} className="wow fadeInDown" data-wow-delay="0.0s">
				<Image className="img-fluid" src="/img/facebook.png"  responsive />
			</Col>
			<Col xs={12} sm={6} className="wow fadeInDown" data-wow-delay="0.1s">
				<Image className="img-fluid" src="/img/google.jpg"  responsive />
			</Col>
			<Col xs={12} sm={6} className="wow fadeInDown" data-wow-delay="0.2s">
				<Image className="img-fluid" src="/img/amazon.jpg"  responsive />
			</Col>
			<Col xs={12} sm={6} className="wow fadeInDown" data-wow-delay="0.3s">
				<Image className="img-fluid" src="/img/inyourdream.jpg"  responsive />
			</Col>
		</Row>
		<Row className="text-center wow fadeInDown" data-wow-delay="0.4s">
			<Button bsStyle="success"> <p>Sponsor us  <i className="fa fa-usd bamf"></i></p></Button>
		</Row>
	</div>
);

export default About;
