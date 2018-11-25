import React from 'react'

const Todo = (props) => {
    let list = props.parentList
    console.log(list)
    return <div>
        {props.parentList.map((x) => <h3>{x}</h3>)}
    </div>
}

export default Todo