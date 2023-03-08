import { Box, Typography } from '@mui/material'
import React from 'react'
import { liveFlows } from '../../Data'

export default function PublishCount() {

  const liveCount = () => {
  let x = 0
  liveFlows.map(flow =>{
    if(flow.published == true){
      x += 1
    }
  })
  return x
}

  return (
       <Box width ="100%" m='0 10px'>
      <Box display='flex' >
        <Box m='0 -20px 20px 0%'>
          <Typography
          variant='h10'
          fontWeight='medium'
          color='Black'
          >
            Live Flows
          </Typography>
        </Box>
        </Box>
        <Box m='0 20px 20px 50%'>
        <Box>
          <Typography
          variant='h4'
          fontWeight='bold'
          color='Black'
          >
            {liveCount()}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
