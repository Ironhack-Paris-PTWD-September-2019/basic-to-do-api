import React from "react";

class TaskCart extends React.Component {
  state = {
    isDone:false,
    text:""
  };

  componentDidMount(){
    this.toggle()
  }

  onUpdate = (e) => {
    this.props.onUpdate(this.props.taskId, {doneyet:this.state.isDone})
    this.toggle()
  }

  toggle(){
    return this.props.taskState ? 
    this.setState({text:"UNDONE", isDone:false}): 
    this.setState({text:"DONE", isDone:true})
  }

  render() {
    console.log(this.props.taskId, this.props.taskState, this.props.taskTitle)
    console.log(this.state.isDone, this.state.text)
    return (
      <div className="task-cart">
        <p>{this.props.taskTitle}</p>
        <button className="update" onClick={() => this.onUpdate()}>{this.state.text}</button>
        <button className="delete" onClick={() => this.props.onDelete(this.props.taskId)}>X</button>
      </div>
    );
  }
}

export default TaskCart;
