import React, {useEffect, useState, useMemo} from 'react'
import PageTitle from '../../components/layout/PageTitle'

//simularing a big calc dalay
//If we dont use useEfect or useMemo, the dalay will be applied to the whole app
function sum(a, b){
    const delay = Date.now() + 2000
    while(Date.now() < delay) {}
    return a + b
}

const UseMemo = (props) => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    
//applying the useMemo to the sum function
    const result = useMemo(() => sum(n1, n2), [n1, n2])

    // //creating useEfect to hold delay only in this calc 
    //const [result, setResult] = useState(0) 
    // useEffect(() => {
    //     setResult(sum(n1, n2))
    // }, [n1, n2])
    
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className="center">
                <input type="number" className="input" value={n1} onChange={(e) => setN1(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n2} onChange={(e) => setN2(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n3} onChange={(e) => setN3(parseInt(e.target.value))}/>
                <span className="text">{result}</span>
            </div>
            
        </div>
    )
}

export default UseMemo
