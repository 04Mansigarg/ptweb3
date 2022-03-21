import React, { useState } from 'react'
import { DataInput } from './DataInput'
import { DataList } from './DataList'
import { Deparment } from './Deparment'

export const Data = () => {
    const [data, setData] = useState([])
    const handleAdd = (info) => {

        fetch("http://localhost:3000/data", {
            method: "POST",
            body: JSON.stringify(info),
            headers: { "content-type": "application/json" }
        })
            .then((res) => { return res.json() })
            .then((user) => {
                console.log(user)
                setData([...data, user])
            })
            .catch((err) => console.log(err))
    }
    React.useEffect(() => {
        getMethod()
    }, [])

    const getMethod = () => {
        fetch("http://localhost:3000/data")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err))
    }

    const showHR = () => {
        fetch("http://localhost:3000/data?department=HR")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err))

    }
    const showAll = () => {
        fetch("http://localhost:3000/data")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err))

    }
    const showMarketing = () => {
        fetch("http://localhost:3000/data?department=Marketing")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err))

    }
    const showIT = () => {
        fetch("http://localhost:3000/data?department=IT")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err))

    }
    const showFinance = () => {
        fetch("http://localhost:3000/data?department=Finance")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err))

    }
    const ascending = () => {
        fetch("http://localhost:3000/data?_sort=salary&_order=asc")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err))

    }
    const descending = () => {
        fetch("http://localhost:3000/data?_sort=salary&_order=desc")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.log(err))

    }


    return (
        <div>
            <DataInput handleAdd={handleAdd} />
            <Deparment showHR={showHR} showAll={showAll} showIT={showIT} showFinance={showFinance} showMarketing={showMarketing} ascending={ascending} descending={descending} />
            <div>
                {data.map((item) => { return <DataList item={item} /> })}
            </div>

        </div>
    )
}
