import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function TotalCount() {
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
            25
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
