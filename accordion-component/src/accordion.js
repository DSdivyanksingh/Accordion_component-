
import './style.css';

const Accordion=({heading,content}) =>{
    return(
        <div className='container'>
            <div className='accordion_item'>
                <div><h2>{heading}</h2></div>
                <div className='sign'>{'-'}</div>
            </div>
            <div className='accordion_content'>{content}</div>
        </div>
    );
};
export default Accordion;