import React from 'react'

function CheckedImg(properties) {
    if (properties.checked) {
        return(<img alt="check" src="./assets/checked.png"></img>)
    } else {
        return(<img alt="uncheck" src="./assets/unchecked.png"></img>)
    }
}

function List(properties) {

    return(
    <ul>
        {properties.items.map(item => <li className={item.checked ? "checked" : ""} key={item.id}>
            {item.text}
        <button onClick={() => {properties.onChecked(item)}}><CheckedImg checked={item.checked}></CheckedImg></button>
        <button onClick={() => {properties.onItemDeleted(item)}}><img alt="A bin icon" src="./assets/bin.png"></img></button>
        </li>)}
    </ul>
    )
}

export default List