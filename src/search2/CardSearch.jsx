import React from 'react';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import './CardSearch.css';

const CardSearch = (props) => {
    return(
        <div className='d-flex justify-content-center w-75'>
            {props.card.map(item => (
                <Card>
                    <CardImg top width="100%" src={item.img} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{item.title}</CardTitle>
                    </CardBody>
                </Card>
                )
            )}
        </div>
    )
}

export default CardSearch;