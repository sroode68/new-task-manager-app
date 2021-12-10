import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";
import { useParams } from "react-router";

//Edit function
const Edit = () => {

  //Defines parameters of a task
    const{id} = useParams();
    const[title, setTitle] = useState("");
    const[date, setDate] = useState("");
    const[subject, setSubject] = useState("");
    const[priority, setPriority] = useState("");
    const history = useHistory();
    
    //Fetches current task data
    const getTaskInfo = () =>{
        const url = "http://localhost:7000/tasks/"+id;
        axios.get(url).then(response=>{
            setTitle(response.data.title);
            setDate(response.data.date);
            setPriority(response.data.priority);
            setSubject(response.data.subject);
        })
    }

    //Constantly fetches current task data
    useEffect(()=>{
        getTaskInfo();
    }, [true])

    //Updates task info with new task info
    const updateTask = () =>{
      var taskInfo = {
        "title":title,
        "date":date,
        "subject":subject,
        "priority":priority,
      };
      const url = "http://localhost:7000/tasks/"+id;
      axios.put(url, taskInfo).then(response =>{
        console.log(title + "Update successful")
      })
      setTitle("");
      setDate("");
      setSubject("");
      setPriority("");
      history.push("/")
    }
    //Form to update task info
    return (
        <div className="create">
        <h2>Edit This Task</h2>
        <form onSubmit={updateTask}>
          <label>Edit Task Title:</label>
          <input
            type = "text"
            required
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Edit Task Due Date (MM/DD/YYYY don't put 0's in front of months or days):</label>
          <input
            type = "text"
            required
            value = {date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Edit Task Subject:</label>
          <select
            required
            value = {subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="Math">Math</option>
            <option value="Science">Science</option>
            <option value="Social Studies">Social Studies</option>
            <option value="English">English</option>
            <option value="World Language">World Language</option>
            <option value="Chores">Chores</option>
            <option value="Hobbies">Hobbies</option>
            <option value="Other">Other</option>
          </select>
          <label>Edit Task Priority</label>
          <select
            required
            value = {priority}
            onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          
          {<button>Edit Task</button>}
        </form>
      </div>
    );

    }
export default Edit;