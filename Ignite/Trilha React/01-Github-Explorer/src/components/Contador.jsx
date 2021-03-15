import { useState } from 'react'

export function Contador(){

    const [total, setTotal] = useState(0)

    function add(){
        setTotal(total + 1)
    }

    return(
        <>
            <h1>{total}</h1>
            <button type="button" onClick={add}>Adicionar</button>
        </>
    )
}