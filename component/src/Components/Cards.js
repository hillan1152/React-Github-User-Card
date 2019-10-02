import React from 'react';

const Cards = ( {followers} ) => {
        
        return(
            <div className="userCard">
                {/* 
                <p>{props.login}</p>
                <p>{props.bio}</p> */}
            <div>
                {followers.map((follower) => { // Or key=index
                   return <div key={follower.id}> {/*insert key instead of follower.id*/}
                        <img src={follower.avatar_url} alt={follower.username}/>
                        <h3 key={follower.id}>Followers: {follower.login}</h3>
                        <p>{follower.login}</p>

                   </div> 
                })}
            </div>

            </div>
        )
    }


export default Cards;
