import React from 'react';
import { Col, Button } from 'reactstrap';
import './panier.css';

const ElementsProduits = (props) => {
    return (
        <Col md='12' className='pt-2 pb-2'>
          <img src={props.img} alt='Produit' className='img-fluid imagePanier' />
          {props.name} - {props.price}€ <Button color="success" id={props.id} onClick={props.handleClick}>Add</Button>
        </Col>
    )
}

export default ElementsProduits;