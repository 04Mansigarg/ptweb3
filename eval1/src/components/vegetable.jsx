import React from 'react'

export const Vegetable = () => {
    const [tomatoes, setTomatoes] = React.useState(10)
    const [potatoes, setPotatoes] = React.useState(8)
    const [carrot, setCarrot] = React.useState(5)
    const [onion, setOnion] = React.useState(7)
    return (
        <div>
            <div>
                <h1>Tomates : {tomatoes} kg</h1>
                <button onClick={() => setTomatoes(tomatoes + 1)}>+</button>
                <button onClick={() => setTomatoes(tomatoes - 1)}>-</button>
            </div>
            <div>
                <h1>Potatoes : {potatoes} kg</h1>
                <button onClick={() => setPotatoes(potatoes + 1)}>+</button>
                <button onClick={() => setPotatoes(potatoes - 1)}>-</button>
            </div>
            <div>
                <h1>Carrot : {carrot} kg</h1>
                <button onClick={() => setCarrot(carrot + 1)}>+</button>
                <button onClick={() => setCarrot(carrot - 1)}>-</button>
            </div>
            <div>
                <h1>Onion : {onion} kg</h1>
                <button onClick={() => setOnion(onion + 1)}>+</button>
                <button onClick={() => setOnion(onion - 1)}>-</button>
            </div>
        </div>


    )
}
