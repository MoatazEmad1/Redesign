import React from 'react'
import {WraperContentInfo} from '../../styles/Transactions.styles'

function TransactionsReuse({moneyIn,name,percent,charge,amount,msg,cdt}) {
    return (
        <WraperContentInfo>
           
              <span id='te'>{moneyIn}</span>
           
           
          <span id='fn'>{name}</span>

           
           
                <span id='tne'>{charge}</span>

           
           
          <span id='tce'>{percent}</span>

           
           
                    <span id='at'>{amount}</span>

           
           
                    <span id='msg'>{msg}</span>

           
           
          <span id='cdt'>{cdt}</span>

           
           
          <span id='st'>-</span>

           
          
          

           
                    
        </WraperContentInfo>
    )
}

export default TransactionsReuse
