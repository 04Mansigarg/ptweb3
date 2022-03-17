import React from 'react'
import { GroceryInput } from './GroceryInput'
import { v4 } from 'uuid'
import { GroceryList } from './GroceryList'
import styles from "./Grocery.module.css"

export const Grocery = () => {
    const [grocery, setGrocery] = React.useState([])
    const handleAdd = (item) => {
        if (item) {
            let payload = {
                title: item,
                status: false,
                id: v4()
            }
            setGrocery([...grocery, payload])
            console.log(grocery)

        }
        else {
            alert("Add Task ")
        }

    }
    const handleToggle = (id) => {
        const updatedGrocery = grocery.map((item) => (item.id === id) ? { ...item, status: !item.status } : item)
        setGrocery(updatedGrocery)
    }
    const handleDelete = (id) => {
        const updatedGrocery = grocery.filter((item) => item.id !== id)
        setGrocery(updatedGrocery)
    }
    const updateItem = (Updatedone, id) => {
        if (Updatedone) {
            const updatedGrocery = grocery.map((item) => (item.id === id) ? { ...item, title: Updatedone } : item)
            setGrocery(updatedGrocery)
        }
        else {
            alert("update value")
            setGrocery(grocery)
        }
    }
    return (
        <div>
            <GroceryInput grocery={grocery} setGrocery={setGrocery} handleAdd={handleAdd} />
            <div className={styles.parentDiv}>
                {grocery.map((item) => { return <GroceryList key={item.id} item={item} handleToggle={handleToggle} handleDelete={handleDelete} updateItem={updateItem} /> })}
            </div>
        </div>
    )
}
