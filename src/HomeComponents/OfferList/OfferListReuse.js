import React from 'react'
import {OfferListReuseContainer,Button} from '../../styles/OfferList.styles'

function OfferListReuse({name}) {
    const image='https://previews.123rf.com/images/houbacze/houbacze1801/houbacze180100243/93055121-banner-best-offer-design-.jpg'
    return (
        <OfferListReuseContainer>
            <div className='contentInfo'>
            <span>{name}</span>
            </div>
            <div className='contentInfo'>
           <img src={image} alt=''/>
            </div>
            <div className='contentInfo'>
          <Button bg='#639DFF'>Edit</Button>
          <Button bg='#FF666A'>Delete</Button>
            </div>
        </OfferListReuseContainer>
    )
}

export default OfferListReuse
