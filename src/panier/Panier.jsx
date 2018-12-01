import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header';
import ElementsPanier from './ElementsPanier';

const products = [
    {
        id: 1,
        product: "Samsung Galaxy S9",
        price: 800
    },
    {
        id: 2,
        product: "Casque Beats",
        price: 200
    },
    {
        id: 3,
        product: "Enceinte JBL",
        price: 80
    }
]

class Panier extends Component {
    constructor(props) {
        super(props)
        this.state = {
            elements: [],
            panier: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            elements: products,
        });
    }

    handleClick(e) {
        const triElements = this.state.elements.filter(item => e.target.name !== item.id),
        ajoutPanier = this.state.elements.filter(item => e.target.name === item.id);
        console.log(triElements);
        console.log(ajoutPanier);
        this.setState({
            elements: triElements,
            panier: ajoutPanier,
        })
    }

    render() {
        return(
            <div>
                <Header img={<i class="fas fa-shopping-cart"></i>} txt="Panier" />
                <Container fluid>
                    <Row>
                        <Col md="6">
                            <h2>Produits</h2>
                            <Row>
                                {this.state.elements.map(item => {
                                    return <ElementsPanier name={item.product} price={item.price} index={item.id} function={this.handleClick} />
                                })}
                            </Row>
                        </Col>
                        <Col  md="6">
                            <h2>Panier</h2>
                            <Row>
                                {this.state.panier.map(item => {
                                    return <ElementsPanier name={item.product} price={item.price} index={item.id} function={this.handleClick} />
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Panier;