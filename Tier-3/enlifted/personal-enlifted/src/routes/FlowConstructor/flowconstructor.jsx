import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function FlowConstructor() {


  return (
    <Box m='20px'>
      <Box
        alignItems='center'
        display='grid'
        gridTemplateColumns='repeat(45, 1fr)'
        gridTemplateRows='repeat(30, auto)'
        gridAutoRows='140px'
        gap='20px'
      >
        <Box
          gridColumn='span 12'
          gridRow='span 30'
          display='flex'
          height='flex'
          p='0 30px'
          mt='25'
          justifyContent='left'
          borderRadius='20px'
          backgroundColor='black'
          >

        </Box>
      </Box>
    </Box>
  )
}
