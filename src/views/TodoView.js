import React from "react";
import TodoItem from "../model/TodoItem";
import TodoItemView from "./TodoItemView";

export default class TodoView extends React.Component {

    constructor(props) {
        super(props);
        const todos = JSON.parse(window.localStorage.getItem("todos"))
                ?? [new TodoItem(false, "")];
        this.state = {
            todos: todos
        };
        this.addTodo = this.addTodo.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.removeChecked = this.removeChecked.bind(this);
        this.removeAll = this.removeAll.bind(this);
    }

    handleCheck(id, event) {
        // console.log(`handleCheck: id: ${id}; event: ${event}`);
        const isChecked = event.currentTarget.checked
        let modifiedTodos = this.state.todos.slice();

        let index = modifiedTodos.findIndex((todo) => {
            return todo.id === id;
        })

        modifiedTodos[index].isChecked = isChecked

        this.setState({
            todos: modifiedTodos
        });
        window.localStorage.setItem("todos", JSON.stringify(modifiedTodos));
    }

    handleChange(id, event) {
        // console.log(`handleChange: id: ${id}; event: ${event}`);
        const text = event.target.value;
        let modifiedTodos = this.state.todos.slice();

        let index = modifiedTodos.findIndex((todo) => {
            return todo.id === id;
        })

        modifiedTodos[index].text = text

        this.setState({
            todos: modifiedTodos
        });
        window.localStorage.setItem("todos", JSON.stringify(modifiedTodos));
    }

    handleRemove(id, event) {
        let remainingTodos = this.state.todos.filter((todo) => {
            return todo.id !== id;
        });
        this.setState({
            todos: remainingTodos
        });
        window.localStorage.setItem("todos", JSON.stringify(remainingTodos));
    }

    addTodo() {
        const newTodo = new TodoItem(false, "");
        const todos = this.state.todos.concat([newTodo]);
        this.setState({
            todos: todos
        });
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }

    removeChecked() {
        let uncheckedTodos = this.state.todos.filter((todo) => {
            return !todo.isChecked;
        });

        this.setState({
            todos: uncheckedTodos
        });
    }

    removeAll() {
        this.setState({
            todos: []
        });
    }

    render() {
        return (
            <div id="todo-view">
                <div id="todos">
                    {this.state.todos.map((todo) => {
                        return <TodoItemView
                            key={todo.id}
                            id={todo.id}
                            isChecked={todo.isChecked}
                            text={todo.text}
                            handleCheck={(event) => this.handleCheck(todo.id, event)}
                            handleChange={(event) => this.handleChange(todo.id, event)}X
                            handleRemove={(event) => this.handleRemove(todo.id, event)}
                        />
                    })}
                </div>
                <div className="buttons">
                    <button className="add-item" onClick={this.addTodo}>
                        Add Item
                    </button>
                    <button className="remove-checked" onClick={this.removeChecked}>
                        Remove Checked
                    </button>
                    <button className="remove-all" onClick={this.removeAll}>
                        Remove All
                    </button>
                </div>
            </div>
        );
    }

}



