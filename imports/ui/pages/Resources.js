import React from 'react';
import { Link } from 'react-router';
import { Table } from 'react-bootstrap';
class Resources extends React.Component {
    render() {
        return (
            <div className="Resources">
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
						        <td colSpan="3"><Link to="/resources/123">Lorem ipsum dolor sit amet, consectetur adipiscing</Link></td>
						        <td>6/15/2017</td>
						      </tr>
						      <tr>
						        <td colSpan="3"><Link to="/home">Lorem ipsum dolor sit amet, consectetur adipiscing</Link></td>
						        <td>6/15/2017</td>
						      </tr>
						      <tr>
						        <td colSpan="3"><Link to="/home">Lorem ipsum dolor sit amet, consectetur adipiscing</Link></td>
						        <td>6/15/2017</td>
						      </tr>
						    </tbody>
						  </Table>
            </div>
        );
    }
}

export default Resources;
