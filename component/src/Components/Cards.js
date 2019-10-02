import React from 'react';

const Cards = props => {
        console.log(props)
        return(
            <div className="userCard">
                {/* <img src={props.userData.avatar_url} alt={props.userData.username}/> */}
                <p>{props.login}</p>
                <p>{props.bio}</p>
            <div>
                {props.userData.followers.map(follower => {
                    console.log(follower);
                    // <h3 key={follower.id}>Followers: {props.follower.login}</h3>
                })}
            </div>

            </div>
        )
    }


export default Cards;
