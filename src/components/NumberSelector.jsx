import React, { useEffect, useState } from 'react'
import './NumberSelector.css'
import styled from 'styled-components';
function NumberSelector({selectedNumber,setSelectedNumber,error,setError}) {
    const numArray = [1,2,3,4,5,6];

    const numberSelectorHandler = (value)=>{
        setSelectedNumber(value);
        setError("");
    }

  return (
    <>
    <div className='d-flex flex-column'>
        <p className='d-flex justify-content-end fw-bold fs-4' style={{color:'red'}}>{error}</p>
        <div className='number-section'>
            {
                numArray.map((value,index)=>(
                    <Box isSelected={value === selectedNumber} 
                    className='box mx-2' key={index} onClick={()=>numberSelectorHandler(value)}>{value}</Box>
                ))
            }
        </div>
        <p className='numberselect-label'>Select Number</p>
    </div>
    </>
  )
}

const Box = styled.div`
    background-color: ${(props)=>(props.isSelected ? "black" : "white")};
    color: ${(props)=>(props.isSelected ? "white" : "black")};
`;

export default NumberSelector
