import React, { useEffect } from 'react'

const Stock = (props) => {

// console.log('this is routerprops', props)
// console.log(props.stockData)

    console.log(props.stockData);

useEffect(()=> {
    console.log('this is routerProps', props)

}, [])

//maybe this filter will work? filter out looking for stock clicked on
//omg if the name matches in the filter.. maybe for each?? somethign that doesn't return an array
// you can use the data
//stockData is an array

//                     filters through stockData array

let currentStock = props.stockData.filter(function (e) {
    if (props.match.params.stock === e.name) {
        //this works, how do I put it in the return statement below??
        console.log(e)
    }
})



//how do I return more than just the data of the name? need more vals. should I pass down stockData?
//maybe I'm accessing match.params wrong?
//will useEffect help?
//should I try to figure out the API and do that instead?

    return (
        <div>
            <h2>Stock Page</h2>
            <div className="stock">
                <p>{props.match.params.stock}</p>
            </div>
        </div>
    )
}


export default Stock