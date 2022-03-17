import React from 'react'
import styles from "./Grocery.module.css"


export const GroceryInput = ({ handleAdd }) => {
    const [item, setItem] = React.useState("")



    return (
        <div>
            <input className={styles.input} type="text" placeholder='Add Grocery' value={item} onChange={(e) => setItem(e.currentTarget.value)} />
            <button className={styles.button} onClick={() => (
                // eslint-disable-next-line no-sequences
                handleAdd(item),
                setItem("")
            )
            }>
                ADD</button>
        </div >
    )
}
