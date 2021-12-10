import { Link } from "react-router-dom";
import { useState } from "react";

//Make sure to run: npx json-server --watch data/db.json --port 7000
//So you can access the database

//This component creates the list of tasks in the home screen
const TaskList = ({ tasks }) => {
    
  //Filter property
    const[filter, setFilter] = useState('All');

    return ( 
        <div className="task-list">
         <h2 style={{color: 'black'}}>Filter all your tasks:</h2>

          {/*Filter drop down options*/ }
                <label>Filter by: </label>
                <select
                    value = {filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="All">All Tasks</option>
                    <option value="PriorityLow">Priority - Low</option>
                    <option value="PriorityMed">Priority - Med</option>
                    <option value="PriorityHigh">Priority - High</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                    <option value="Social Studies">Social Studies</option>
                    <option value="English">English</option>
                    <option value="World Language">World Language</option>
                    <option value="Chores">Chores</option>
                    <option value="Hobbies">Hobbies</option>
                    <option value="Other">Other</option>
                </select>

          {/*The following code is a bunch of if-else statements that determines what the user selected in the dropdown. Depending
          on what the user selected, it will display only the tasks following the selection*/}
          
          {filter === 'All' ? (
              tasks.map((task) => (
                <div className="task-listing" key={task.id}>
                    <Link to={`/tasks/${task.id}`}>
                    <h2>{task.title}</h2>
                    <p>Due on: {task.date}</p>
                    <p>Subject: {task.subject}</p>
                    <p>Priority: {task.priority}</p>
                    </Link>
                </div>                   
            ))
          ) : (
            (filter) ===  'PriorityLow' ? (
              tasks.map((task) => (
                <div>
                  {task.priority === 'Low' ?( 
                    <div className="task-listing" key={task.id}>
                      <Link to={`/tasks/${task.id}`}>
                      <h2>{task.title}</h2>
                      <p>Due on: {task.date}</p>
                      <p>Subject: {task.subject}</p>
                      <p>Priority: {task.priority}</p>
                      </Link>
                    </div>
                  ) : (
                    console.log('None')
                  )}
                </div>                   
            ))               
            ) : (
              (filter) ===  'PriorityMed' ? (
                tasks.map((task) => (
                  <div>
                    {task.priority === 'Medium' ?( 
                      <div className="task-listing" key={task.id}>
                        <Link to={`/tasks/${task.id}`}>
                        <h2>{task.title}</h2>
                        <p>Due on: {task.date}</p>
                        <p>Subject: {task.subject}</p>
                        <p>Priority: {task.priority}</p>
                        </Link>
                      </div>
                    ) : (
                      console.log('None')
                    )}
                  </div>                   
              ))               
              ) : (
                (filter) ===  'PriorityHigh' ? (
                  tasks.map((task) => (
                    <div>
                      {task.priority === 'High' ?( 
                        <div className="task-listing" key={task.id}>
                          <Link to={`/tasks/${task.id}`}>
                          <h2>{task.title}</h2>
                          <p>Due on: {task.date}</p>
                          <p>Subject: {task.subject}</p>
                          <p>Priority: {task.priority}</p>
                          </Link>
                        </div>
                      ) : (
                        console.log('None')
                      )}
                    </div>                   
                ))               
                ) : (
                  (filter) ===  'Math' ? (
                    tasks.map((task) => (
                      <div>
                        {task.subject === 'Math' ?( 
                          <div className="task-listing" key={task.id}>
                            <Link to={`/tasks/${task.id}`}>
                            <h2>{task.title}</h2>
                            <p>Due on: {task.date}</p>
                            <p>Subject: {task.subject}</p>
                            <p>Priority: {task.priority}</p>
                            </Link>
                          </div>
                        ) : (
                          console.log('None')
                        )}
                      </div>                   
                  ))
                  ) : (
                    (filter) ===  'Science' ? (
                      tasks.map((task) => (
                        <div>
                          {task.subject === 'Science' ?( 
                            <div className="task-listing" key={task.id}>
                              <Link to={`/tasks/${task.id}`}>
                              <h2>{task.title}</h2>
                              <p>Due on: {task.date}</p>
                              <p>Subject: {task.subject}</p>
                              <p>Priority: {task.priority}</p>
                              </Link>
                            </div>
                          ) : (
                            console.log('None')
                          )}
                        </div>                   
                    ))
                    ) : (
                      (filter) ===  'Social Studies' ? (
                        tasks.map((task) => (
                          <div>
                            {task.subject === 'Social Studies' ?( 
                              <div className="task-listing" key={task.id}>
                                <Link to={`/tasks/${task.id}`}>
                                <h2>{task.title}</h2>
                                <p>Due on: {task.date}</p>
                                <p>Subject: {task.subject}</p>
                                <p>Priority: {task.priority}</p>
                                </Link>
                              </div>
                            ) : (
                              console.log('None')
                            )}
                          </div>                   
                      ))
                      ) : (
                        (filter) ===  'English' ? (
                          tasks.map((task) => (
                            <div>
                              {task.subject === 'English' ?( 
                                <div className="task-listing" key={task.id}>
                                  <Link to={`/tasks/${task.id}`}>
                                  <h2>{task.title}</h2>
                                  <p>Due on: {task.date}</p>
                                  <p>Subject: {task.subject}</p>
                                  <p>Priority: {task.priority}</p>
                                  </Link>
                                </div>
                              ) : (
                                console.log('None')
                              )}
                            </div>                   
                        ))
                        ) : (
                          (filter) ===  'World Language' ? (
                            tasks.map((task) => (
                              <div>
                                {task.subject === 'World Language' ?( 
                                  <div className="task-listing" key={task.id}>
                                    <Link to={`/tasks/${task.id}`}>
                                    <h2>{task.title}</h2>
                                    <p>Due on: {task.date}</p>
                                    <p>Subject: {task.subject}</p>
                                    <p>Priority: {task.priority}</p>
                                    </Link>
                                  </div>
                                ) : (
                                  console.log('None')
                                )}
                              </div>                   
                          ))
                          ) : (
                            (filter) ===  'Chores' ? (
                              tasks.map((task) => (
                                <div>
                                  {task.subject === 'Chores' ?( 
                                    <div className="task-listing" key={task.id}>
                                      <Link to={`/tasks/${task.id}`}>
                                      <h2>{task.title}</h2>
                                      <p>Due on: {task.date}</p>
                                      <p>Subject: {task.subject}</p>
                                      <p>Priority: {task.priority}</p>
                                      </Link>
                                    </div>
                                  ) : (
                                    console.log('None')
                                  )}
                                </div>                   
                            ))
                            ) : (
                              (filter) ===  'Hobbies' ? (
                                tasks.map((task) => (
                                  <div>
                                    {task.subject === 'Hobbies' ?( 
                                      <div className="task-listing" key={task.id}>
                                        <Link to={`/tasks/${task.id}`}>
                                        <h2>{task.title}</h2>
                                        <p>Due on: {task.date}</p>
                                        <p>Subject: {task.subject}</p>
                                        <p>Priority: {task.priority}</p>
                                        </Link>
                                      </div>
                                    ) : (
                                      console.log('None')
                                    )}
                                  </div>                   
                              ))
                              ) : (
                                (filter) ===  'Other' ? (
                                  tasks.map((task) => (
                                    <div>
                                      {task.subject === 'Other' ?( 
                                        <div className="task-listing" key={task.id}>
                                          <Link to={`/tasks/${task.id}`}>
                                          <h2>{task.title}</h2>
                                          <p>Due on: {task.date}</p>
                                          <p>Subject: {task.subject}</p>
                                          <p>Priority: {task.priority}</p>
                                          </Link>
                                        </div>
                                      ) : (
                                        console.log('None')
                                      )}
                                    </div>                   
                                ))
                                ) : (
                                  <h2>Error</h2>
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )

          )
          }
          
        </div>
     );
}
 
export default TaskList;