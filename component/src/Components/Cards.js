import React from 'react';

const Cards = props => {
        return(
            <div className="userCard">
                {props.username.map(item => (
                    <p>{item.username}</p>
                ))}
            </div>
        )
    }


export default Cards;
