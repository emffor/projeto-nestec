import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import Tasks from './tasks';
import AddButton from './addbutton';

import './main.css';

const Main = () => {
       const [tasks, setTasks] = useState([]);
       
       const handleTaskAddition = (taskTitle) => {
           const newTasks = [ ... tasks, {
               title: taskTitle,
               id: uuidv4(),
               completed: false,
           }]
           setTasks(newTasks);
       }
       const handleTaskDeletion = (taskId) => {
        const newTasks = tasks.filter(itask => itask.id !== taskId)
        setTasks(newTasks)
      }
    return (  
        <> 
            {/* Redenzinando a props no tasks */}
            <div className='container'>
                <h1 className='minha-task'>Minhas Tasks</h1>
                <AddButton handleTaskAddition={handleTaskAddition}/>
                <Tasks tasks={tasks} handleTaskDeletion={handleTaskDeletion}
                />
            </div>       
        </>      
    );
}
 
export default Main;