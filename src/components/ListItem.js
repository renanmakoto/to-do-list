import React from 'react'
import Card from './Card'

function CheckedImg(properties) {
    if (properties.checked) {
        return(<img alt="check" src="./assets/checked.png"></img>)
    } else {
        return(<img alt="uncheck" src="./assets/unchecked.png"></img>)
    }
}

function ListItem(properties) {
    return(
        <li>
            <Card className={properties.item.checked ? "checked item" : "item"}>
            {properties.item.text}
        <div>
            <button onClick={() => {properties.onChecked(properties.item)}}><CheckedImg checked={properties.item.checked}></CheckedImg></button>
            <button onClick={() => {properties.onItemDeleted(properties.item)}}><img alt="A bin icon" src="./assets/bin.png"></img></button>
        </div>
        </Card>
        </li>
    )
}

export default ListItem