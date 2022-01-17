import React, {useState} from 'react';
import './style.css'

const Accordion=({heading,content}) =>{
    const [isActive, setIsActive]=useState(false);

    return(
        <div className='container'>
            <div className='item_container' onClick={()=>setIsActive(!isActive)}>
                <div>{heading}</div>
                <div>{isActive ? '-':'+'}</div>
            </div>
            {isActive && <div className='content_container'>{content}</div>}
        </div>
    );
};

export default Accordion;