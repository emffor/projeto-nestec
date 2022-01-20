import React from 'react';
import { useHistory } from 'react-router-dom';

import Container from '../../components/countainer';

import './style.css';



function BackButton(){   
    const history = useHistory();
    function handleClick(){
        history.push('/')
    }
    return (
        <button className='button-back' type='button' onClick={handleClick}>
            <p className='text-button'>Voltar</p>
        </button>
    );

}

const Task = () => {
    return (  
        <div className='background-home'>
            <h2 className='backgroud-top'></h2>
            <h1 className='to-do'>To.Do</h1>
            <Container/>
            <BackButton/>
        </div>
    );
}
 
export default Task;
    