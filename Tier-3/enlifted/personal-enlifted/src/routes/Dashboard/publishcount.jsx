import { Box, Typography } from '@mui/material'
import React from 'react'

export default function PublishCount() {
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
            15
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
