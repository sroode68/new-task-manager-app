import { Link } from 'react-router-dom';

//Creates the navbar part of the homescreen including the create link and home link
const Navbar = () => {
    return (
      <nav className="navbar">
        <h1>To-Do List</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create" style={{ 
            color: 'white', 
            backgroundColor: '#1929b3',
            borderRadius: '8px' 
          }}>Create Task</Link>
         
        </div>
      </nav>
    );
  }
   
  export default Navbar;