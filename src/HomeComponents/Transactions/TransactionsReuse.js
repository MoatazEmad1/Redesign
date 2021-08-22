import React from 'react'
import {WraperContentInfo} from '../../styles/Transactions.styles'

function TransactionsReuse({moneyIn,name,percent,charge,amount,msg,cdt}) {
    return (
        <WraperContentInfo>
            <div className='Info'>
<span>{moneyIn}</span>
            </div>
            <div className='Info'>
          <span>{name}</span>

            </div>
            <div className='Info'>
                <span>{charge}</span>

            </div>
            <div className='Info'>
          <span>{percent}</span>

            </div>
            <div className='Info'>
                    <span>{amount}</span>

            </div>
            <div className='Info'>
                    <span>{msg}</span>

            </div>
            <div className='Info'>
          <span>{cdt}</span>

            </div>
            <div className='Info'>
          <span>-</span>

            </div>
          
          

           
                    
        </WraperContentInfo>
    )
}

export default TransactionsReuse
