import React from 'react'
import styles from "./Data.module.css"

export const Deparment = ({ showAll, showHR, showMarketing, showIT, showFinance, ascending, descending }) => {
    return (
        <div>
            <button className={styles.button} onClick={() => showAll()}>Show all Department</button>
            <button className={styles.button} onClick={() => showHR()}>Show HR</button>
            <button className={styles.button} onClick={() => showMarketing()}>Show Marketing</button>
            <button className={styles.button} onClick={() => showIT()}>Show IT</button>
            <button className={styles.button} onClick={() => showFinance()}>Show Finance</button>
            <div>
                <button className={styles.button} onClick={() => ascending()}>Sort By Ascending</button>
                <button className={styles.button} onClick={() => descending()}>Sort By Descending</button>
            </div>
        </div>
    )
}
