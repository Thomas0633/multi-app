import React, { Component } from 'react';
import { Button } from 'reactstrap';

class BoutonPanier extends Component {
    render() {
        return(
            <Button size="sm" /*onClick={handleClick()}*/>
                Add
            </Button>
        )
    }
}

export default BoutonPanier;