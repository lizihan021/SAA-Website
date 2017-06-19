import React from 'react';
import { Row, Grid, Col, ClearFix, ListGroup, ListGroupItem } from 'react-bootstrap';

const Footer = () => (
    <div className="footer-content">
    	<Grid>
    		<Row>
                <Col sm={6} md={3}>
                    <h5>ADDRESS</h5>
                    500 S. State Street,<br/>
                    Ann Arbor, MI<br/>
                    48109, USA
                </Col>
                <Col sm={6} md={3}>
                    <h5>FOLLOW US</h5>
                    <div>
                        <a className="fa fa-facebook-square footer-icon" href="https://www.facebook.com/groups/1651730788401287" title="Facebook"></a>
                        <a className="fa fa-linkedin-square footer-icon" href="https://www.linkedin.com/company/15159223" title="Linkedin"></a>
                        <a className="fa fa-globe footer-icon" href="https://www.sjtuaaum.org/" title="Website"></a>
                        <a className="fa fa-group footer-icon" href="https://maizepages.umich.edu/organization/sjtu-saa-um/about" title="Maize Page"></a>
                    </div>
                    <br/>
                    <br/>
                </Col>
                <Col sm={6} md={3}>
                    <h5>CONTACT US</h5>
                    <i className="fa fa-phone"></i> Phone: +1 (734) 764-1817<br/>
                    <i className="fa fa-envelope"></i> Email: <a href="mailto:sjtusaa-board-2017@umich.edu">sjtusaa-board-2017@umich.edu</a>
                </Col>
                <Col sm={6} md={3}>
                    <h5>ANALISTICS</h5>
                    <div id="embed-api-auth-container"></div>
                    <div id="chart-1-container"></div>
                    <div id="chart-2-container"></div>
                    <div id="view-selector-1-container"></div>
                    <div id="view-selector-2-container"></div>
                </Col>
            </Row>
            <div className="copyright">
                &copy; Copyright 2017 SJTU-SAA-UM, All Rights Reserved
            </div>
        </Grid>
    </div>
);

export default Footer;