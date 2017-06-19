import React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button, Thumbnail, Image} from 'react-bootstrap';

const About= () => (
  <div className="About">
  	<h2 className="page-header">Our mission:</h2>
	<p className="mission">As the official student organization recognized by both universities, SJTU Student & Alumni Association at UM (SJTU-SAA-UM) is completely run by SJTU students and is aimed at serving the SJTU students and alumni at UM. We work with both universities as well as industry partners to provide professional development resources, culture immersion programs, and networking opportunities. Our goal is to help the students and alumni become successful in their future personal development.
In addition, SJTU-SAA-UM also serves as a community builder by connecting cross-culture and cross-industry talents. We work closely with the alumni associations from both universities. President and advisors of SJTU-SAA-UM also serve as the board of directors for the SJTU Alumni Association in Greater Michigan (SJTUAAMI).
	</p>
  	<h2 className="page-header">What we have done:</h2>
  	<ul className="timeline">
		    <li className="wow fadeInDown" data-wow-delay="0.0s">
		        <div className="timeline-badge">
		          <a><i className="fa fa-circle" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>JI 10th Anniversary Student & Alumni Development Conference</h4>
		            </div>
		            <div className="timeline-body">
		                <Image className="event-image" src="/img/anniversary.png"/>
		            </div>
		            <div className="timeline-footer">
		                <p className="text-right">Apr-2016</p>
		            </div>
		        </div>
		    </li>
		    
		    <li className="timeline-inverted wow fadeInDown"  data-wow-delay="0.1s">
		        <div className="timeline-badge">
		            <a><i className="fa fa-circle invert" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>JI Class of 2016 Commencement Ceremony</h4>
		            </div>
		            <div className="timeline-body">
		            	<Image className="event-image" src="/img/commencement.png"/>
		            </div>
		            <div className="timeline-footer">
		                <p className="text-right">May-2016</p>
		            </div>
		        </div>
		    </li>
		    
		    <li className="wow fadeInDown" data-wow-delay="0.2s">
		        <div className="timeline-badge">
		            <a><i className="fa fa-circle" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>New SJTU Students Welcome Week + Reception</h4>
		            </div>
		            <div className="timeline-body">
		                <Image className="event-image" src="/img/welcome.png"/>
		            </div>
		            <div className="timeline-footer">
		                <p className="text-right">Aug-2016</p>
		            </div>
		        </div>
		    </li>
		    
		    <li className="timeline-inverted wow fadeInDown" data-wow-delay="0.3s">
		        <div className="timeline-badge">
		            <a><i className="fa fa-circle invert" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>Career Workshops + Alumni Gatherings</h4>
		            </div>
		            <div className="timeline-body">
		                <Image className="event-image" src="/img/career1.png"/>
		                <Image className="event-image" src="/img/career2.png"/>
		            </div>
		            <div className="timeline-footer">
		                <p className="text-right">Sept-2016 - Oct-2016</p>
		            </div>
		        </div>
		    </li>
		    
		    <li className="wow fadeInDown" data-wow-delay="0.4s">
		        <div className="timeline-badge">
		            <a><i className="fa fa-circle" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>Thanksgiving Culture Immersion (Dumpling Feast)</h4>
		            </div>
		            <div className="timeline-body">
		                <Image className="event-image" src="/img/dumpling.png"/>
		            </div>
		            <div className="timeline-footer">
		                <p className="text-right">Nov-2016</p>
		            </div>
		        </div>
		    </li>
		    
		    <li  className="timeline-inverted wow fadeInDown"  data-wow-delay="0.4">
		        <div className="timeline-badge">
		            <a><i className="fa fa-circle invert" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>Coherix Company Visit</h4>
		            </div>
		            <div className="timeline-body">
		            	<Image className="event-image" src="/img/visit.png"/>
		            </div>
		            <div className="timeline-footer primary">
		                <p className="text-right">Dec-2016</p>
		            </div>
		        </div>
		    </li>

		    <li  className="wow fadeInDown"  data-wow-delay="0.5">
		        <div className="timeline-badge">
		            <a><i className="fa fa-circle invert" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>1st Michigan China Forum co-hosted w/ CSSA and CEN</h4>
		            </div>
		            <div className="timeline-body">
		            	<Image className="event-image" src="/img/forum1.png"/>
		            	<Image className="event-image" src="/img/forum2.png"/>
		            </div>
		            <div className="timeline-footer primary">
		                <p className="text-right">Mar-2017</p>
		            </div>
		        </div>
		    </li>

		    <li  className="timeline-inverted wow fadeInDown"  data-wow-delay="0.5">
		        <div className="timeline-badge">
		            <a><i className="fa fa-circle invert" id=""></i></a>
		        </div>
		        <div className="timeline-panel">
		            <div className="timeline-heading">
		                <h4>JI Class of 2017 Commencement Ceremony</h4>
		            </div>
		            <div className="timeline-body">
		            	<Image className="event-image" src="/img/inyourdream.jpg"/>
		            </div>
		            <div className="timeline-footer primary">
		                <p className="text-right">May-2017</p>
		            </div>
		        </div>
		    </li>
		    <li className="clearfix no-float"></li>
		</ul>
		<h2 className="page-header">Who we are:</h2>
		<Row>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.0s">
		      <Thumbnail src="/img/zeyu.png" alt="242x200">
		        <h3>Zeyu Zhang</h3>
		        <p>Co-president<br/></p>
		      </Thumbnail>
		    </Col>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.1s">
		      <Thumbnail src="/img/tianjun.png" alt="242x200">
		        <h3>Tianjun Zhang</h3>
		        <p>Co-president<br/></p>
		      </Thumbnail>
		    </Col>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.1s">
		      <Thumbnail src="/img/xiyu.png" alt="242x200">
		        <h3>Xiyu Zhao</h3>
		        <p>Secretary General<br/></p>
		      </Thumbnail>
		    </Col>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.2s">
		      <Thumbnail src="/img/jiaming.png" alt="242x200">
		        <h3>Jiaming Yang</h3>
		        <p>Vice President for Culture Immersion & Professional Development</p>
		      </Thumbnail>
		    </Col>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.0s">
		      <Thumbnail src="/img/wen.png" alt="242x200">
		        <h3>Wen He</h3>
		        <p>Vice President for Alumni Relations<br/></p>
		      </Thumbnail>
		    </Col>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.1s">
		      <Thumbnail src="/img/avatar-zihan.png" alt="242x200">
		        <h3>Zihan Li</h3>
		        <p>Vice President for Brand & Digital Media</p>
		      </Thumbnail>
		    </Col>
		    <Col xs={6} sm={4} md={3} className="wow fadeInDown" data-wow-delay="0.2s">
		      <Thumbnail src="/img/jiayan.png" alt="242x200">
		        <h3>Jiayan Chen</h3>
		        <p>Vice President for Development & Outreach</p>
		      </Thumbnail>
		    </Col>
		</Row>
		<h2 className="page-header">Sponsors:</h2>
		<Row>
			<Col xs={12} sm={6} className="wow fadeInDown" data-wow-delay="0.0s">
				<Image className="img-fluid" src="/img/google.jpg"  responsive />
			</Col>
			<Col xs={12} sm={6} className="wow fadeInDown" data-wow-delay="0.1s">
				<Image className="img-fluid" src="/img/yikyak-logo.jpg"  responsive />
			</Col>
			<Col xs={12} sm={6} className="wow fadeInDown" data-wow-delay="0.1s">
				<Image className="img-fluid" src="/img/coherix-logo.jpeg"  responsive />
			</Col>
			<Col xs={12} sm={6} className="wow fadeInDown" data-wow-delay="0.2s">
				<Image className="img-fluid" src="/img/inyourdream.jpg"  responsive />
			</Col>
		</Row>
		<Row className="text-center wow fadeInDown" data-wow-delay="0.4s">
			<Button bsStyle="success" onClick={() => alert('大兄弟你活在梦里=_=')}> <p>Sponsor us  <i className="fa fa-usd bamf"></i></p></Button>
		</Row>
	</div>
);

export default About;
