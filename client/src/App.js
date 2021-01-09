import React, { Component } from "react";
import "./App.css";
import Entete from "./component/Entete";
import srv from "./service";
import { Button, Modal, InputGroup, FormControl, Form, Container } from "react-bootstrap";

export default class App extends Component {
  state = {
    taskList: [],
    title: "",
    doneyet: false,
    show: false,
    showEdit: false,
  };
  componentDidMount() {
    this.getAllTasks();
  }

  getAllTasks = () => {
    srv.listTasks().then((response) => {
      console.log("tasks list", response);
      this.setState({
        taskList: response,
      });
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShowEdit = () => {
    this.setState({ showEdit: true });
  };

  handleCloseEdit = () => {
    this.setState({ showEdit: false });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    srv.newTask(this.state.title).then(() => {
      this.setState({ title: "", show: false });
      this.getAllTasks();
    });
    // .catch((error)=> this.setState({errorMessage:error.response.data.message}))
  };

  deleateTask=(id)=> {
    srv.srv.delete(`/tasks/${id}`)
    .then(
      this.getAllTasks()
    )
    // .catch((error)=> this.setState({errorMessage:error.response.data.message}))
  }

  handleFormEdit = (event) => {
    event.preventDefault();
    const title= this.state.title;
    const id= this.state.dataId;
    srv.srv.put(`/tasks/${id}`, {title})
    .then(() => {
      this.setState({ title: "", showEdit: false });
      this.getAllTasks();
    });
    // .catch((error)=> this.setState({errorMessage:error.response.data.message}))
  };

  render() {
    return (
      <div>
        <Entete />
        <Button
          variant="light"
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            borderRadius: "50px",
            width: "70px",
            position: "fixed",
            right: "30px",
            top: "70px",
          }}
          onClick={this.handleShow}
        >
          +
        </Button>
        <Container style={{border:"solid 1px", boxShadow: "5px 10px #888888", borderRadius: "60px 20px", background:"#3f51b50d"}}>
          {this.state.taskList.length > 0 ? (
            this.state.taskList.map((el, index) => {
              return(<div>
                <h2 key={el._id}>{el.title}</h2>
                <Button variant="outline-warning" onClick={(event)=>{this.deleateTask( el._id)}}>
                  Done!
                </Button>
                <Button variant="outline-info" onClick={()=> this.setState({showEdit:true, dataId:el._id, title:el.title })}>
                  Edit
                </Button>
              </div>)
                  
            })
          ) : (
            <p>No tasks</p>
          )}
        </Container>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleFormSubmit}>
              <InputGroup className="mb-3">
                <FormControl
                  type="text"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  name="title"
                  placeholder="Add new"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" type="submit">
                    Add
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.showEdit} onHide={this.handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleFormEdit}>
              <InputGroup className="mb-3">
                <FormControl
                  type="text"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  name="title"
                  placeholder="EDIT"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary" type="submit">
                    EDIT
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
