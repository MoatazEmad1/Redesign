import React from 'react'
import {WraperContent,Button,WraperHeader,Wraper,OfferListAddContainer} from '../../styles/OfferListAdd.styles'
function OfferListAdd() {
    return (
        <OfferListAddContainer>
           <span>Offer List</span>
           <Wraper>
               <WraperHeader>
                <div className='btn'>
                  <Button bg='#4ECAA5'>Save</Button>
                  <Button bg='#FF666A'>Cancel</Button>
               </div>
               
               </WraperHeader>
               <WraperContent>
                    <span id='name'>Offer Name</span>
                    <input id='input-name' placeholder='enter an offer name'/>
                    <span id='image'>  Offer image</span>
                    <input id='file' type='file'/>
                </WraperContent>
           </Wraper>
        </OfferListAddContainer>
    )
}

export default OfferListAdd
