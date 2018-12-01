import React from 'react';
import { Col, Button } from 'reactstrap';

const ElementsPanier = (props) => {
    return (
        <Col md='12' className='pt-2 pb-2'>
            {props.name} - {props.price}€ <Button name={props.index} onClick={props.function}>Add</Button>
        </Col>
    )
}

export default ElementsPanier;