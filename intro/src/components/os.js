import React from 'react'
import styles from "./os.module.css"

export const Os = () => {
    return (
        <div className={styles.mobile}>
            <div>
                <div>
                    <h1>Mobile Operating System</h1>
                    <ul>
                        <li>Android</li>
                        <li>Blackberry</li>
                        <li>iPhone</li>
                        <li>Windows Phone</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1>Mobile Manufacturers</h1>
                <ul>
                    <li>Samsung</li>
                    <li>HTC</li>
                    <li>Micromax</li>
                    <li>Apple</li>
                </ul>
            </div>
        </div>
    )
}
