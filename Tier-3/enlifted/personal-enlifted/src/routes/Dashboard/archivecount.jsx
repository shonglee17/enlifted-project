import { Box, TextField, Typography } from '@mui/material'
import { borderRadius } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ArchiveCount() {
const navigate = useNavigate()
const handleClick = (e) => {
  e.preventDefault
  navigate('/View')
}
    return (
          <Box width ="100%" m='0 10px'>
      <Box display='flex' >
        <Box m='0 -20px 20px 0%'>
          <Typography
          variant='h10'
          fontWeight='medium'
          color='White'
          >
            Archive Flows
          </Typography>
        </Box>
        </Box>
        <Box m='0 20px 20px 50%'>
        <Box>
          <Typography
          variant='h4'
          fontWeight='bold'
          color='White'
          >
            10
          </Typography>
        </Box>
      </Box>
    </Box>
    )
}
