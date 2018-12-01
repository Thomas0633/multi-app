import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Compteur.css';

class BouttonCompt extends Component {
    render() {
        return(
            <Button color={this.props.color} className="rounded-0 boutonCompteur" onClick={this.props.fonction}>
                {this.props.contenu}
            </Button>
        )
    }
}

export default BouttonCompt;