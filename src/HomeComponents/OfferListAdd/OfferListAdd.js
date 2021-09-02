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
                    <div id='input-name' className='btcontainer'><span>enter an offer name</span></div>
                    <span id='image'>  Offer image</span>
                    <div id='file' className='btcontainer'>
                        <div className='choose'><span>Choose file</span></div>
                        <div className='filetitle'><span>No file selected</span></div>
                    </div>
                </WraperContent>
           </Wraper>
        </OfferListAddContainer>
    )
}

export default OfferListAdd
