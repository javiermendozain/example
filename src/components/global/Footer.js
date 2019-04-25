
// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//   Assets
import './css/Footer.css';

class Footer extends Component {

    static propTypes = {
        Copyrigth: PropTypes.string,
    };

    render() {
        const { Copyrigth='&copy; Javier Mendoza <3s ' } = this.props;
        return (
            <div className="Footer">


                <p dangerouslySetInnerHTML={{__html:Copyrigth}} />


            </div>
        );
    }
}

export default Footer;
