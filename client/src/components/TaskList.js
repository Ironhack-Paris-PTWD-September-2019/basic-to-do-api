import React from "react";
import TaskCart from "./TaskCart";
import AddTask from "./AddTask";

import { getTasks, deleteTask, updateTask } from "../services/task-service";

class TaskList extends React.Component {
  state = {
    tasks: [],
    // tasksDone: [],
    // tasksUndone: [],
  };

  componentDidMount = () => {
    this.setTasks();
  };

  onDelete = (taskId) => {
    deleteTask(taskId)
      .then((response) => {
        const tasks = this.state.tasks;
        let newTasks = tasks.filter((task) => task._id !== taskId);
        this.setTasks({ tasks: newTasks });
      })
      .catch((error) => console.log(error));
  };

  onUpdate = (taskId, status) => {
    console.log(taskId);
    let tasks = this.state.tasks;
    const idx = tasks.findIndex((e) => e._id === taskId);
    const taskToUpdate = tasks[idx];
    console.log("taskToUpdate", taskToUpdate);
    updateTask(taskId, status).then((newTask) => {
      tasks[idx] = newTask;
      this.setState({ tasks });
    });
  };

  setTasks = () => {
    getTasks().then((tasks) => {
      this.setState({ tasks });
    });
  };

  render() {
    return (
      <div className="container">
        <header>
          <h1>NOW IT'S TIME TO WORK 🏋 </h1>
          <AddTask />
        </header>
        <div className="tasklist">
          <div className="tasklist-undone">
          <h3>TODO</h3>
            <lu>
              {this.state.tasks
                .filter((task) => !task.doneyet)
                .map((task, id) => {
                  console.log("inside list", task.doneyet)
                  return (
                    <li key={id}>
                      <TaskCart
                        onDelete={this.onDelete}
                        onUpdate={this.onUpdate}
                        taskId={task._id}
                        taskTitle={task.title}
                        taskState={task.doneyet}
                      />
                    </li>
                  );
                })}
            </lu>
          </div>

          <div className="tasklist-done">
            <h3>DONE</h3>
            <lu>
              {this.state.tasks
                .filter((task) => task.doneyet)
                .map((task, id) => {
                  return (
                    <li key={id}>
                      <TaskCart
                        onDelete={this.onDelete}
                        onUpdate={this.onUpdate}
                        taskId={task._id}
                        taskTitle={task.title}
                        taskState={task.doneyet}
                      />
                    </li>
                  );
                })}
            </lu>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskList;
