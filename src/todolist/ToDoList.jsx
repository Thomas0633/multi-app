import React, { Component } from 'react';
import Header from '../Header';
import FormToDoList from './FormToDoList';

class ToDoList extends Component {
    render() {
        return(
            <div>
                <Header img={<i class="fas fa-list-ul"></i>} txt="To do List" />
                <FormToDoList />
            </div>
        )
    }
}

export default ToDoList;