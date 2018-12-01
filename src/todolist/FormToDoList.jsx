import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Table } from 'reactstrap';
import LigneTable from './LigneTable';

class FormToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            indexContainer: 1,
            saisieMarque: '',
            saisieModele: '',
            saisieImmat: '',
            container: [],
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickDelete = this.handleClickDelete.bind(this);
    }

    handleChange(e){
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleClick() {
        let obj = {
          index: this.state.indexContainer,
          marque: this.state.saisieMarque,
          modele: this.state.saisieModele,
          immat: this.state.saisieImmat,
        };
        
        this.setState({
            indexContainer: this.state.indexContainer+1,
            saisieMarque: '',
            saisieModele: '',
            saisieImmat: '',
            container: [...this.state.container, obj]
        });
    }

    handleClickDelete(i) {
        const deleteLine = this.state.container;
        const index = i - 1;
        deleteLine.splice(index, 1);
        this.setState({
            indexContainer: this.state.indexContainer - 1,
            container: deleteLine,
        });
    }

    render() {
        return(
            <div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Marque</th>
                            <th>Modele</th>
                            <th>Immatriculation</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>
                                <Form>
                                    <FormGroup>
                                        <Input type="text" name="saisieMarque" id="marque" placeholder="Marque" value={this.state.saisieMarque} onChange={this.handleChange} />
                                    </FormGroup>
                                </Form>
                            </td>
                            <td>
                                <Form>
                                    <FormGroup>
                                        <Input type="text" name="saisieModele" id="modele" placeholder="Modele" value={this.state.saisieModele} onChange={this.handleChange} />
                                    </FormGroup>
                                </Form>
                            </td>
                            <td>
                                <Form>
                                    <FormGroup>
                                        <Input type="text" name="saisieImmat" id="immatriculation" placeholder="Immatriculation" value={this.state.saisieImmat} onChange={this.handleChange} />
                                    </FormGroup>
                                </Form>
                            </td>
                            <td><Button color="success" onClick={this.handleClick}><i class="fas fa-check"></i></Button></td>
                        </tr>
                    </tbody>
                    <LigneTable contenu={this.state.container} delete={this.handleClickDelete} />
                </Table>
            </div>
        )
    }
}

export default FormToDoList;