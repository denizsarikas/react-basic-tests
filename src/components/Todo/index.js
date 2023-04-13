import React, { useState } from 'react'

const defaultItems = [
    {
        name: "Item A",
    },
    {
        name: "Item B",
    },
    {
        name: "Item C",
    },
];

export default function Todo() {
    const [text, setText] = useState("");
    const [items, setItems] = useState(defaultItems);

    const addItem = () => {
        setItems((prev) => [...prev, {name: text}]);
        setText("")
    }
    
  return (
    <div>
        <label>
            Text
        <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        </label>
        {/* <button onClick={() => setItems((prev => [...prev, text]))}>Add</button> */}
        {/* <button onClick={() => setItems((prev) => [...prev, { name: text} ]) }>Add</button> */}
        <button onClick={addItem}>Add</button>

        <br />

        {items.map((item, key) => (
            <div key={key}>{item.name}</div>
        ))}
    </div>
  )
}
