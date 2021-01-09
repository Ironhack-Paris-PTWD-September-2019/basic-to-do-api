import React from "react";
import { createTask } from "../services/task-service";

class AddTask extends React.Component {
  state = {
    title: "",
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const title = this.state.title;
    if (this.state.title !== "") {
      createTask(title, false)
        .then((response) => {
          this.setState({ title: "" });
          this.props.addTask(response)
          
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  render() {
    return (
      <div className="add-task">
        <form onSubmit={this.handleFormSubmit}>
          <label>Add a new task</label>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <button className="add-button">
            ADD
          </button>
        </form>
      </div>
    );
  }
}

export default AddTask;
