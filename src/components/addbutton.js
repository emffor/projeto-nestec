import React, {useState} from 'react';

import Abutton from './abutton';

import {MdAdd} from 'react-icons/md'

import './addbutton.css';


const AddButton = ({handleTaskAddition}) => {

    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("");
    }

    return (  
        <div>
            <input onChange={handleInputChange} 
            value={inputData}
            className='input-add' 
            type="text"
            />
            <div className='text-add-input'>
                <Abutton onClick={handleAddTaskClick}><MdAdd/></Abutton>
            </div>  
        </div>
    );
};
 
export default AddButton;
