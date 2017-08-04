import React from 'react';
import { Link } from 'react-router';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';



const Resources = ({ children }) => (
    <div className="Resources">
    { (!children) ? (
    	<div>
	    	<h2 className="page-header">2014 DD Students:</h2>
	    	<Table striped hover>
			    <thead>
			      <tr>
			        <th colSpan="3">file name</th>
			        <th>publish date</th>
			      </tr>
			    </thead>
			    <tbody>
			      <tr>
			        <td colSpan="3"><Link to="/resources/HE_Wen_AA_challenge">Lorem ipsum dolor sit amet, consectetur adipiscing</Link></td>
			        <td>6/15/2017</td>
			      </tr>
			      <tr>
			        <td colSpan="3"><Link to="/resources/Zihan-Li-Report">Lorem ipsum dolor sit amet, consectetur adipiscing</Link></td>
			        <td>6/15/2017</td>
			      </tr>
			    </tbody>
			  </Table>
			</div>
			) : ( children )
		}
    </div>
);

Resources.propTypes = {
  children: PropTypes.node,
};

export default Resources;
