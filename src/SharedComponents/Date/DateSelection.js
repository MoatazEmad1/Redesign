import React,{useState} from 'react'
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {SearchContainer} from './DateSelection.styles'
function DateSelection({showBtn,setshowBtn,EndDate,startDate,setStartDate,setEndDate}) {
    
  
    const [Display,setDisplay]=useState('block')
   
    const selectionRange = {
        startDate: startDate,
        endDate: EndDate,
        key: 'selection',
      }
      const handleSelect=(ranges)=>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
       
      }
      const handleShow=()=>{
          if(showBtn==='block'){
            setshowBtn('none')
          }
          else{
            setshowBtn('block')
          }
       
       
      }
     
    return (
        <SearchContainer dispaly={Display}>
       
            <DateRangePicker 
                ranges={[selectionRange]}
                onChange={handleSelect}
               
            />
            <button id='btn' onClick={handleShow}>Click To Apply Dates</button>
        </SearchContainer>
    )
}

export default DateSelection
