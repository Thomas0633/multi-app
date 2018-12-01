import React, { Component } from 'react';
import { Button } from 'reactstrap';

class LigneTable extends Component {
    afficheLigne(props) {
        return props.contenu.map((ligne, i) => (
            <tr key={i}>
                <th scope="row">{ligne.index}</th>
                <td>{ligne.marque}</td>
                <td>{ligne.modele}</td>
                <td>{ligne.immat}</td>
                <td><Button color="danger" onClick={() => props.delete(ligne.index)}><i class="fas fa-trash-alt"></i></Button></td>
            </tr>
        ));
    }

    render() {
        return(
            <tbody>
                {this.afficheLigne(this.props)}
            </tbody>
        );
    }
}

export default LigneTable;