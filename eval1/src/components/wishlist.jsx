import React from 'react'
import styles from "./wishlist.module.css"

export const Wishlist = () => {
    const [wishlist, setWishlist] = React.useState("")
    const [todo, setTodo] = React.useState([])
    const onHandleAdd = () => {
        if (todo.length === 3) {
            alert("You cant add more items")

        } else {
            setTodo([...todo, wishlist])
            setWishlist("")

        }

    }
    return (
        <div>
            <h1>Wishlist</h1>
            <div className={styles.wishlist}><input className={todo.length === 3 ? styles.none : styles.show} type="text" placeholder="Add The Item" value={wishlist} onChange={(e) => setWishlist(e.currentTarget.value)} />
            <button className={todo.length === 3 ? styles.none : styles.show} onClick={onHandleAdd}>Add</button></div>
            <h1 className={todo.length === 3 ? styles.showHeading : styles.showList}>You cannot add more than 3 items to wishlist</h1>
            <div> <ul> {todo.map((items) => { return <li>{items}</li> })}</ul></div>

        </div>
    )
}
