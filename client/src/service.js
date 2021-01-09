import axios from 'axios'


const errorHandler = err => {
  throw err;
};
let srv=axios.create({
  baseURL: `http://localhost:5000/api`, 
  withCredentials:true
})

export default{
  srv,

  listTasks() {
    return this.srv.get('/tasks')
      .then(response => response.data)
      // .catch(errorHandler);
  },
  newTask(title) {
    return this.srv.post('/tasks',{title})
      .then(response => response.data)
      // .catch(errorHandler);
  },

}