import { Box } from '@mui/material'
import React from 'react'

export default function PublishCount() {
  return (
    <Box
        sx={{
          position: 'absolute',
          width: '389px',
          height: '287px',
          left: '495px',
          top: '800px',
          boxShadow: 3,
          borderRadius: 10,
          backgroundColor: 'white'
        }}>
        <p
          style={{
            position: 'absolute',
            left: '6.43%',
            right: '40.1%',
            top: '8.71%',
            bottom: '83.28%',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '23px',
            letterSpacing: '0.05em',
            color: '#000000'
          }}
        >
          PUBLISHED FLOWS
        </p>
        <p
                  style={{
            position: 'absolute',
            left: '39.33%',
            right: '39.59%',
            top: '36.24%',
            bottom: '35.89%',
            fontWeight: 400,
            fontSize: '70px',
            lineHeight: '0px',
            letterSpacing: '0.05em',
            color: '#000000'
          }}
        >
          25
        </p>
      </Box>
  )
}
