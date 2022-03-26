import React, { useState } from 'react'
import { Button } from './Button'

export const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>COUNTER</h1>
            <h2>{count}</h2>
            <Button onClick={() => setCount(count + 1)}>Increment</Button>
            <Button onClick={() => setCount(count - 1)}>Decrement</Button>
        </div>
    )
}
