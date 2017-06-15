import React from 'react';
import NotFound from './NotFound';
import PropTypes from 'prop-types';

export default class ViewResources extends React.Component {
	render() {
	  return (
	    <div className="ViewResources">
	    	<h2 className="page-header">{this.props.params.id}</h2>
	    	<embed src={ `/files/${this.props.params.id}.pdf` } type="application/pdf" ></embed>
	    </div>
	  );
	}
};

