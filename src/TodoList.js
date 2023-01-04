import React, { useEffect, useState } from 'react'
import List from './components/List'
import Item from './components/Item'
import TodoForm from './components/TodoForm'
import Modal from './components/Modal'
import './components/TodoList.css'

const SAVED_ITEMS = "savedItems"

function TodoList() {

    const [showModal, setShowModal] = useState(false)

    const [items, setItems] = useState([])

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS))
        if (savedItems) {
            setItems(savedItems)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items))
    }, [items])

    function onAddItem(text) {
        let itemVar = new Item(text)
        setItems([...items, itemVar])
        onHideModal()
    }

    function onItemDeleted(item) {
        let filteredItems = items.filter(it => it.id !== item.id )
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

    function onHideModal(event) {
        setShowModal(false)
    }

    return(
    <div className="container">
        <header className="header"><h1>To Do</h1><button onClick={() => {setShowModal(true)}} className="addButton">+</button></header>
       {/* <TodoForm onAddItem={onAddItem}></TodoForm> */}
       <List onChecked={onChecked} onItemDeleted={onItemDeleted} items={items}></List>
       <Modal show={showModal} onHideModal={onHideModal}><TodoForm onAddItem={onAddItem}></TodoForm></Modal>
    </div>
    )
}

export default TodoList
