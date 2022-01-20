import React from 'react';
import { useHistory } from 'react-router-dom';

import Main from '../../components/main';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import './style.css';



function BackButton(){   
    const history = useHistory();
    function handleClick(){
        history.push('/')
    }
    return (
        <button className='button-back' type='button' onClick={handleClick}>
            <p>
                <AiOutlineArrowLeft/>
            </p>
        </button>
    );

}

const Task = () => {
    return (  
        <div className='background-atividades'>
            
            <h2 className='backgroud-top'></h2>
            <h1 className='to-do'>To.Do</h1>
            <Main/>
            <BackButton/>
        </div>
    );
}
 
export default Task;
    