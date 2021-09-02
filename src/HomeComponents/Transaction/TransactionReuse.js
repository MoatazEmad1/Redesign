import React from 'react'
import {TransactionReuseContainer} from '../../styles/Transaction.styles'
function TransactionReuse({id,type,from,to,amount,msg,cdt}) {
    return (
        <TransactionReuseContainer>
          
                <input id='cx' type='checkbox'/>
                <span id='td'>{id}</span>
            
          
              
                <span id='te'>{type}</span>
            
          
              
                <span id='fn'>{from}</span>
            
          
              
                <span id='tn'>{to}</span>
            
          
              
                <span id='tne'>N/A</span>
            
          
              
                <span id='tce'>N/A</span>
            
          
              
                <span id='at'>{amount}</span>
            
          
              
                <span id='me'>{msg}</span>
            
          
              
                <span id='cdt'>{cdt}</span>
            
          
              
                <span id='ss'>-</span>
            
        </TransactionReuseContainer>
    )
}

export default TransactionReuse
