import React from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import ReactPDF from 'react-pdf';

const pdf = require('file-loader!./Zihan-Li-Reprot.pdf')

class Resources extends React.Component {
    render() {
        return (
            <div className="Resources">
                <ReactPDF
                    file={ pdf }
                />
            </div>
        );
    }
}

export default Resources;
