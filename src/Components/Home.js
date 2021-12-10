
import TaskList from "./TaskList";
import useFetch from "./useFetch";
import 'react-calendar/dist/Calendar.css';
import { Link } from 'react-router-dom';
import Calendar from "react-calendar";
import { useState } from "react";
//npx json-server --watch data/db.json --port 7000  <- Run this command to activate the database before you run the program
const Home = () => {

  const {data: tasks, isLoading, error} = useFetch('http://localhost:7000/tasks');

  const [date, setDate] = useState(new Date());
  const onChange = date => {
    setDate(date);
    
  };
 var taskChecker = false;

  const dateString = date.toLocaleDateString("en-US")
  console.log(dateString);
    //imports the list of tasks component for the home screen.
    return (
      <div className="home">
        {error && <div>{ error }</div>}
        {isLoading && <div>Loading...</div>}
        {/*Imports the calander view*/}
        {<h2>Calendar View</h2>}
        <Calendar
          onChange={onChange}
          value={date}
        />
        {<h2>Select a day and see what tasks need to be done!</h2>}
        {/*Cycles through each task to see if any are the same date as the date chosen*/}
              {
                tasks && 
                tasks.map((task) => (
                 
                  <div>
                    {task.date === dateString ?( 
                      <div className="task-listing" key={task.id}>
                        <Link to={`/tasks/${task.id}`}>
                        <h2>{task.title}</h2>
                        <p>Due on: {task.date}</p>
                        <p>Subject: {task.subject}</p>
                        <p>Priority: {task.priority}</p>
                        </Link>
                        {taskChecker = true}
                      </div>
                    ) : (
                      console.log(task + 'not equal')
                    )}

                   
                  </div>                   
                ))                
            }
            {/*If no task has the same date as the date chosen it will print that statement*/}
            {taskChecker === false && <h4>No Tasks on that day!</h4>}
    
        {tasks && <TaskList tasks={tasks}/>}
        
      </div>
    );
  }
   
  export default Home;