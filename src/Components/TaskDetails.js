import { useParams } from "react-router";
import { useHistory } from "react-router";
import useFetch from "./useFetch";
import { Link } from 'react-router-dom';

//Shows each individual task when clicked
const TaskDetails = () => {
  const { id } = useParams();
  const { data: task, error, isLoading } = useFetch('http://localhost:7000/tasks/' + id);
  const history = useHistory();

  //Deletes or completes each task
  const handleDelete = () => {
    fetch('http://localhost:7000/tasks/' + task.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    }) 
  }

//Format for the display of task info
  return (
    <div className="task-details">
      { isLoading && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { task && (
        <article>
          <h2>{ task.title }</h2>
          <p>Due by: { task.date }</p>
          <div><p>Subject/Catagory: { task.subject}</p></div>
          <div><p>Task Priority: { task.priority}</p></div>
          <div><button onClick={handleDelete}>Complete Task</button></div>
          <Link to={`/edit/${id}`}><button>Edit Task</button></Link>
        </article>
      )}
    </div>
  );
}
 
export default TaskDetails;