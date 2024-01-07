import React from 'react'
export const depositMoney = (amount)=>
{
    return(dispatch)=>
    {
        console.log(dispatch.action)
        dispatch({
            type:'deposit',
            payload:amount
        })
    }
}

export const withdrawmoney=(amount)=>{
    return(dispatch)=>{
        console.log(dispatch.action)
        dispatch({
            type:'withdraw',
            payload:amount
        })
    }

}