import { useState } from "react";
import { useHistory } from 'react-router-dom'

//This compondnet gives the ability to create a task
const Create = () => {

  //Initialization of task variables
  const[title, setTitle] = useState('');
  const[date, setDate] = useState('');
  const[subject, setSubject] = useState('Other');
  const[priority, setPriority] = useState('Low');
  const[isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  //Function that fires once the form is submitted; submits all data to the json server then goes back to the home screen
  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, date, subject, priority }

    setIsLoading(true);

    fetch('http://localhost:7000/tasks', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    }).then(() => {
      console.log("New Task Added");
      setIsLoading(false);
      history.push('/');
    })
  }

    return (

      //The following code is the user input from the form which is collected and pushed to the json server

      <div className="create">
        <h2>Add a New Task</h2>
        <form onSubmit={handleSubmit}>
           
           {/*Task Title input*/}

          <label>Task Title:</label>
          <input
            type = "text"
            required
            value = {title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/*Task date input*/}

          <label>Task Due Date (MM/DD/YYYY don't put 0's in front of months or days):</label>
          <input
            type = "text"
            required
            value = {date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/*Task subject input/dropdown*/}

          <label>Task Subject:</label>
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

            {/*Task Priority input/dropdown*/}

          <label>Task Priority</label>
          <select
            required
            value = {priority}
            onChange={(e) => setPriority(e.target.value)}
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          
          {!isLoading && <button>Add Task</button>}
          {isLoading && <button disabled>Adding Task...</button>}
        </form>
      </div>
    );
  }
   
  export default Create;