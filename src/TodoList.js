import React, { useState } from 'react'
import List from './List'
import Item from './Item'
import TodoForm from './TodoForm'
import './TodoList.css'

function TodoList() {

    const [items, setItems] = useState([])

    function onAddItem(text) {
        let itemVar = new Item(text)
        setItems([...items, itemVar])
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id != item.id )

        setItems(filteredItems)
    }

    function onChecked(item) {
        let updatedItems = items.map(it => {
            if (it.id === item.id) {
                it.checked = !it.checked
            }
            return it
        })
        setItems(updatedItems)
    }

    return(
    <div className="container">
        <h1>To Do List</h1>
       <TodoForm onAddItem={onAddItem}></TodoForm>
       <List onChecked={onChecked} onItemDeleted={onItemDeleted} items={items}></List>
    </div>
    )
}

export default TodoList