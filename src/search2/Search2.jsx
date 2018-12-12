import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import Header from '../Header';
import CardSearch from './CardSearch';
import FiltresAppliques from './FiltresAppliques';

const contenuCards = [
    {
        id: '01',
        pays: 'France',
        continent: 'Europe',
        population: "‎67186640",
        date1: '2018-10-01',
        date2: '2018-10-07',
        img: 'http://flags.fmcdn.net/data/flags/w580/fr.png',
        title: 'France'
    },
    {
        id: '02',
        pays: "Espagne",
        continent: 'Europe',
        population: "46600949",
        date1: '2018-10-08',
        date2: '2018-10-14',
        img: 'http://flags.fmcdn.net/data/flags/w580/es.png',
        title: 'Espagne'
    },
    {
        id: '03',
        pays: "Angleterre",
        continent: 'Europe',
        population: "66022273",
        date1: '2018-10-15',
        date2: '2018-10-21',
        img: 'http://flags.fmcdn.net/data/flags/w580/gb.png',
        title: 'Angleterre'
    },
    {
        id: '04',
        pays: "Etats-Unis",
        continent: 'Amerique',
        population: "‎325719178",
        date1: '2018-10-05',
        date2: '2018-10-11',
        img: 'http://flags.fmcdn.net/data/flags/w580/us.png',
        title: 'Etats-Unis'
    },
    {
        id: '05',
        pays: "Belgique",
        continent: 'Europe',
        population: "11491346",
        date1: '2018-10-12',
        date2: '2018-10-18',
        img: 'http://flags.fmcdn.net/data/flags/w580/be.png',
        title: 'Belgique'
    },
    {
        id: '06',
        pays: "Bresil",
        population: "207096196",
        date1: '2018-10-19',
        date2: '2018-10-25',
        img: 'http://flags.fmcdn.net/data/flags/w580/br.png',
        title: 'Brésil'
    },
    {
        id: '07',
        pays: "Canada",
        continent: 'Amerique',
        population: "36708083",
        date1: '2018-10-22',
        date2: '2018-10-28',
        img: 'http://flags.fmcdn.net/data/flags/w580/ca.png',
        title: 'Canada'
    },
    {
        id: '08',
        pays: "Chine",
        continent: 'Asie',
        population: "1389269024",
        date1: '2018-10-20',
        date2: '2018-10-23',
        img: 'http://flags.fmcdn.net/data/flags/w580/cn.png',
        title: 'Chine'
    }
]

class Search2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            criterePays: '',
            critereContinent: '',
            critereDateDepart: '',
            critereDateRetour: '',
            pays: [],
        }

        this.handleChangePays = this.handleChangePays.bind(this);
        this.handleChangeContinent = this.handleChangeContinent.bind(this);
        this.handleChangeDateDepart = this.handleChangeDateDepart.bind(this);
        this.handleChangeDateRetour = this.handleChangeDateRetour.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangePays(event) {
        this.setState({
            criterePays: event.target.value
        });
    }

    handleChangeContinent(event) {
        this.setState({
            critereContinent: event.target.value
        });
    }

    handleChangeDateDepart(event) {
        this.setState({
            critereDateDepart: event.target.value
        });
    }

    handleChangeDateRetour(event) {
        this.setState({
            critereDateRetour: event.target.value
        });
    }

    handleClick() {
        this.setState({
            pays: contenuCards.filter(c => {
                if(((c.pays === this.state.criterePays) && ('' === this.state.critereContinent)) || (('' === this.state.criterePays) && (c.continent === this.state.critereContinent)) || ((c.pays === this.state.criterePays) && (c.continent === this.state.critereContinent))) {
                    return true;
                }
                return false;
            })
        }, () => console.log(this.state.pays)); // Ajouter arrow function pour actualiser le setState
    }

    render() {
        return (
            <div>
                <Header img={<i class="fas fa-search"></i>} txt="Recherche" />
                <FiltresAppliques filtrePays={this.state.criterePays} filtreContinent={this.state.critereContinent} filtreDepart={this.state.critereDateDepart} filtreRetour={this.state.critereDateRetour} />

                <Container>
                    <Form>
                        <Row>
                            <Col md='5'>
                                <FormGroup>
                                    <Label for="pays">Pays</Label>
                                    <Input type="select" value={this.state.criterePays} name="pays" id="pays" onChange={this.handleChangePays}>
                                        <option value=""></option>
                                        <option value="France">France</option>
                                        <option value="Espagne">Espagne</option>
                                        <option value="Angleterre">Angleterre</option>
                                        <option value="Etats-Unis">Etats-Unis</option>
                                        <option value="Belgique">Belgique</option>
                                        <option value="Bresil">Bresil</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Chine">Chine</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md='2'>
                              <h3 className='display-4'>ET</h3>
                            </Col>
                            <Col md='5'>
                                <FormGroup>
                                    <Label for="continent">Continent</Label>
                                    <Input type="select" value={this.state.critereContinent} name="continent" id="continent" onChange={this.handleChangeContinent}>
                                        <option value=""></option>
                                        <option value="Europe">Europe</option>
                                        <option value="Amerique">Amérique</option>
                                        <option value="Asie">Asie</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button className="mb-5" onClick={this.handleClick}>Rechercher</Button>
                    </Form>

                    <CardSearch card={this.state.pays} />
                </Container>
            </div>
        )
    }
}

export default Search2;