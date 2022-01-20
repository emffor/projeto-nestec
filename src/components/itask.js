import React from 'react';
import {GoTrashcan} from 'react-icons/go'

import './itask.css';

const Itask = ({ itask, handleTaskDeletion }) => {
    return (  
    <>
                
                        
        <p className='texto'>
            <input className='checkbox' type="checkbox"/>
            {itask.title}
            <button className='remove-task-button' 
            onClick={() => handleTaskDeletion(itask.id)}>
            <GoTrashcan />
            </button>
        </p>
                         
                        
                
  
    </>        
    );
}
 
export default Itask;