import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header';
import Bouton from './BoutonCalc';
import './CalculCalc.css';

class Calcul extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            resultat: 0,
            equal: false,
            operation: [],
            histo: [],
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
      const height = window.innerHeight - 100;
      this.setState({
        height,
      });
    }

    handleClick(e) {
      if (e.target.value !== '=' && e.target.value !== 'clear') {
        this.setState({
          equal: false,
          operation: [...this.state.operation, e.target.value],
        });
      } else if (e.target.value === '=') {
        let operation = this.state.operation;
        if (operation[0] === '0') {
          operation.splice(0, 1);
        }
        let resultat = eval(operation.join(''));
        let histo = `${operation.join('')} = ${resultat}`;
        this.setState({
          resultat,
          equal: true,
          operation: [],
          histo: [...this.state.histo, histo],
        });
      } else if (e.target.value === 'clear') {
        this.setState({
          equal: false,
          resultat: 0,
          operation: [],
        });
      }
    }

    render() {
        return(
            <div>
                <Header img={<i className="fas fa-calculator"></i>} txt="Calculatrice" />
                <Container fluid>
                    <Row>
                        <Col md='8'>
                            <Row>
                                <Col md={{ size: '4', offset: '4' }} className="p-0 text-right pr-3 pt-1 pb-1 colorResult">
                                    {(this.state.equal) ? this.state.resultat : this.state.operation}
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ size: '3', offset: '4' }} className="p-0">
                                    <Bouton color='success' value='clear' fonctionClick={this.handleClick} contenu='Clear' />
                                </Col>
                                <Col md="1" className="p-0">
                                    <Bouton color='danger' value='/' fonctionClick={this.handleClick} contenu='/' />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ size: '1', offset: '4' }} className="p-0">
                                    <Bouton color='info' value='1' fonctionClick={this.handleClick} contenu='1' />
                                </Col>
                                <Col md="1" className="p-0">
                                    <Bouton color='info' value='2' fonctionClick={this.handleClick} contenu='2' />
                                </Col>
                                <Col md="1" className="p-0">
                                    <Bouton color='info' value='3' fonctionClick={this.handleClick} contenu='3' />
                                </Col>
                                <Col md="1" className="p-0">
                                    <Bouton color='danger' value='*' fonctionClick={this.handleClick} contenu='x' />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ size: '1', offset: '4' }} className="p-0">
                                    <Bouton color='info' value='4' fonctionClick={this.handleClick} contenu='4' />
                                </Col>
                                <Col md="1" className="p-0">
                                    <Bouton color='info' value='5' fonctionClick={this.handleClick} contenu='5' />
                                </Col>
                                <Col md="1" className="p-0">
                                    <Bouton color='info' value='6' fonctionClick={this.handleClick} contenu='6' />
                                </Col>
                                <Col md="1" className="p-0">
                                    <Bouton color='danger' value='+' fonctionClick={this.handleClick} contenu='+' />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ size: '1', offset: '4' }} className="p-0">
                                    <Bouton color='info' value='7' fonctionClick={this.handleClick} contenu='7' />
                                </Col>
                                <Col md="1" className="p-0">
                                    <Bouton color='info' value='8' fonctionClick={this.handleClick} contenu='8' />
                                </Col>
                                <Col md="1" className="p-0">
                                    <Bouton color='info' value='9' fonctionClick={this.handleClick} contenu='9' />
                                </Col>
                                <Col md="1" className="p-0">
                                    <Bouton color='danger' value='-' fonctionClick={this.handleClick} contenu='-' />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={{ size: '3', offset: '4' }} className="p-0">
                                    <Bouton color='info' value='0' fonctionClick={this.handleClick} contenu='0' />
                                </Col>
                                <Col md="1" className="p-0">
                                    <Bouton color='danger' value='=' fonctionClick={this.handleClick} contenu='=' />
                                </Col>
                            </Row>
                        </Col>

                        <Col md='4'>
                            <h2>Historique</h2>
                            <ul className='historique'>
                                {this.state.histo.map(item => <li>{item}</li>)}
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Calcul;