import React from 'react'
import { AddressComponent } from './AddressComponent'
import { MethodPayment } from './MethodPayment'
import styles from "./Payment.module.css"

export const Payment = () => {
    return (
        <div>
            <div className={styles.cartbody}>
                <div className={styles.cart_mainDiv}>
                    <div>
                        <AddressComponent />
                        <MethodPayment />
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
