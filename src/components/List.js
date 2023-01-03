import React from 'react'
import ListItem from './ListItem'

function List(properties) {

    return(
    <ul>
        {properties.items.map(item => 
        <ListItem key={item.id} item={item} onChecked={properties.onChecked} onItemDeleted={properties.onItemDeleted}></ListItem>)}
    </ul>
    )
}

export default List