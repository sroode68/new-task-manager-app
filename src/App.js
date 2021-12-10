import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Components/Create';
import TaskDetails from './Components/TaskDetails';
import Edit from './Components/Edit';
import Calendar from './Components/Calendar';
//npx json-server --watch data/db.json --port 7000  <- Run this command to activate the database before you run the program

//App functions combines all of the components
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/tasks/:id">
              <TaskDetails />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
