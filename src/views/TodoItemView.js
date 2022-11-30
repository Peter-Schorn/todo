import React from "react";

export default class TodoItemView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHovering: false
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    // handleSubmit(event) {
    //     event.preventDefault();
    // }

    onMouseEnter() {
        this.setState({
            isHovering: true
        });
    }

    onMouseLeave() {
        this.setState({
            isHovering: false
        });
    }

    render() {
        const removeButton = <button
            className="remove-button"
            onClick={this.props.handleRemove}
        >
            X
        </button>
        return (
            <div
                // onSubmit={this.handleSubmit}
                className="todo-form"
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <div className="todo-item-main">
                    <input
                        type="checkbox"
                        checked={this.props.isChecked}
                        onChange={this.props.handleCheck}
                        className="checkbox">
                    </input>
                    <input
                        type="text"
                        value={this.props.text}
                        onChange={this.props.handleChange}
                        placeholder="TODO"
                        className="form-input"
                    />
                    {this.state.isHovering ? removeButton : null}
                </div>
            </div>
        );
    }

}
