import React, { Fragment } from 'react'
import styles from "./Grocery.module.css"

export const GroceryList = ({ item, handleToggle, handleDelete, updateItem }) => {
  const [value, setValue] = React.useState("")
  const [edit, setEdit] = React.useState(false)
  return (
    <div className={styles.item}>
      <Fragment>
        {
          (edit) ? <div><input type="text" className={styles.input} placeholder="Edit Grocery" value={value} onChange={(e) => setValue(e.currentTarget.value)} />
            <button className={styles.button} onClick={() => (
              //eslint-disable-next-line no-sequences
              updateItem(value, item.id),
              setValue(""),
              setEdit(!edit)
            )
            }>Update</button></div> :
            <div><h1>ITEM : {item.title}</h1>
              <h2>Status: {(!item.status) ? "Not Completed" : "Completed"}</h2></div>
        }
      </Fragment>

      <div>

        <button className={styles.button} onClick={() => handleToggle(item.id)}>TOGGLE</button>
        <button className={styles.button} onClick={() => handleDelete(item.id)}>DELETE</button>
        <button className={styles.button} onClick={() => setEdit(!edit)}>EDIT</button>
      </div>

    </div>
  )
}
