import React from 'react';

import './abutton.css';

const Abutton = ({children,onClick}) => {
    return ( 
        <button onClick={onClick} className='button'>
            {children}
        </button>
     );
}
 
export default Abutton;


