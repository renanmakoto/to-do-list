import React, { useState } from "react"

function TodoForm(properties) {
    const [text, setText] = useState("")

    function changeHandler(event) {
        let txt = event.target.value
        setText(txt)
    }

    function addItem(event) {
        event.preventDefault()
        if (text){
            properties.onAddItem(text)
            setText("")
        }
    }

    return(
    <form>
        <input onChange={changeHandler} type="text" value={text}></input>
        <button onClick={addItem}>Add</button>
    </form>
    )
}

export default TodoForm