import axios from 'axios';

function createTaskStore() {

    return {
        tasks: [],
        getTask(){
            axios.get("http://localhost:64728/api/Tasks/").then((result) => {
                this.tasks = result.data;
            });
        },
        addTask(description){
            let data = {
                "Description": description,
                "UserId" : 1,
                "isCompleted": false
            }
            axios.post("http://localhost:64728/api/Tasks", data).then((result) => {
              console.log("data posted");
              axios.get("http://localhost:64728/api/Tasks/").then((result) => {
                this.tasks = result.data;
            });
            });
        },
        removeTask(id){
             axios.delete(`http://localhost:64728/api/Tasks/${id}`).then((result) => {
                console.log("data deleted");
                axios.get("http://localhost:64728/api/Tasks/").then((result) => {
                    this.tasks = result.data;
                });
              });  
        },
        updateTask(id, data){
            axios.put(`http://localhost:64728/api/Tasks/${id}`, data).then((result) => {
                console.log("data updated");
                axios.get("http://localhost:64728/api/Tasks/").then((result) => {
                    this.tasks = result.data;
                });
              }); 
        }
    };

}

export default createTaskStore;