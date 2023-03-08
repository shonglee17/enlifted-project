import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { liveFlows } from '../../Data'

export default function TotalCount() {

const liveCount = () => {
  let x = liveFlows.length
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
            Total Flows
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
