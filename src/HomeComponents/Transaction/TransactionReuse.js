import React from 'react'
import {TransactionReuseContainer} from '../../styles/Transaction.styles'
function TransactionReuse({id,type,from,to,amount,msg,cdt}) {
    return (
        <TransactionReuseContainer>
            <div className='content'> 
                <input type='checkbox'/>
                <span>{id}</span>
            </div>
            <div className='content'> 
              
                <span>{type}</span>
            </div>
            <div className='content'> 
              
                <span>{from}</span>
            </div>
            <div className='content'> 
              
                <span>{to}</span>
            </div>
            <div className='content'> 
              
                <span>N/A</span>
            </div>
            <div className='content'> 
              
                <span>N/A</span>
            </div>
            <div className='content'> 
              
                <span>{amount}</span>
            </div>
            <div className='content'> 
              
                <span>{msg}</span>
            </div>
            <div className='content'> 
              
                <span>{cdt}</span>
            </div>
            <div className='content'> 
              
                <span>-</span>
            </div>
        </TransactionReuseContainer>
    )
}

export default TransactionReuse
