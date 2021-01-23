import React from 'react'


const character = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        textalign: 'center',
        margin: '16px',
        border: '1px solid black',
    }
        
    return (
        <p style={style} onClick={props.click}>{props.char}</p>
    )
}

export default character;