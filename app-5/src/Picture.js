import React from 'react';

const picture = function(props){
    console.log(props.parentImage)
    return (
        <div>
            <img src={props.parentImage} alt=''></img>
        </div>
    )
}

export default picture