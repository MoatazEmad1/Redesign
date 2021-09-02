import React from 'react'
import {OfferListReuseContainer,Button} from '../../styles/OfferList.styles'

function OfferListReuse({name}) {
    const image='https://previews.123rf.com/images/houbacze/houbacze1801/houbacze180100243/93055121-banner-best-offer-design-.jpg'
    return (
        <OfferListReuseContainer>
         
            <span id='nm'>{name}</span>
           
         
           <img id='img' src={image} alt=''/>
           
         
          <Button id='et' bg='#639DFF'>Edit</Button>
          <Button id='del' bg='#FF666A'>Delete</Button>
           
        </OfferListReuseContainer>
    )
}

export default OfferListReuse
