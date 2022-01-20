import React from 'react';

import Itask from './itask';

const Tasks = ({ tasks, handleTaskDeletion }) => {
    return ( 
        <>
            {tasks.map((itask) => (
              <Itask itask={itask} handleTaskDeletion={handleTaskDeletion}/>  
            ))}
        </>
     );
};
       
                
                

export default Tasks;
