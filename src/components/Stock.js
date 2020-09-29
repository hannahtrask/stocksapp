import React, { useEffect } from 'react'

const Stock = (props) => {

console.log('this is routerprops', props)

//will render every time a change is made
useEffect(() => {
    
    
    const findData =  () => {

        
    }
    findData()
}, [])


    return (
        <div>
            <h2>Stock Page</h2>
            <div className="stock">
                <p>{props.match.params.stock}</p>
                <p></p>
            </div>
        </div>
    )
}


export default Stock