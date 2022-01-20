import React, {useState} from 'react';

import Tasks from './tasks';
import './container.css';


const Container = () => {
       const [message, setMessage] = useState([
          {
              id: '1',
              title: 'tarefa 01',
              completed: false,
          }, 
          {
                id: '2',
                title: 'tarefa 02',
                completed: true,
          }, 
       ]);
    
    return (  
        <>
            <div className='container'>
                <Tasks tasks={tasks}/>
            </div>
            
        </>
        
    );
}
 
export default Container;