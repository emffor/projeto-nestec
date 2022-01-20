import React from 'react';
import { useHistory } from 'react-router-dom';

import './style.css';

import logoImg from '../../assets/logo-nestec-home.svg';
import logoImg2 from '../../assets/logo-nestec-home2.svg';

function HomeButton(){
    const history = useHistory();

    function handleClick(){
        history.push('/task')
    }

    return (
        <button className='button-enter' type='button' onClick={handleClick}>
            <p className='text-button'>Entrar</p>
        </button>
    );

}

const Home = () =>{
    return (
        <div className='background-home'>
            <img className='logoImg' src={logoImg} alt='Nestec'/>
            <p className='text-menssage'>Olá Dev, entre para fazer uso da nossa ToDoList.</p>
            <img className='logoImg2' src={logoImg2} alt='Nestec2'/>
            <HomeButton/>
        </div>

    )
}

export default Home;
