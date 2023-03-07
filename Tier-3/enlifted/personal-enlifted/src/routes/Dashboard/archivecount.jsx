import { Box, TextField } from '@mui/material'
import { borderRadius } from '@mui/system'
import React from 'react'

export default function ArchiveCount() {

    return (
      <Box
        sx={{
          position: 'absolute',
          width: '389px',
          height: '287px',
          left: '923px',
          top: '800px',
          boxShadow: 3,
          borderRadius: 10,
          backgroundColor: '#6B85FB'
        }}>
        <p
          style={{
            position: 'absolute',
            left: '6.43%',
            right: '47.3%',
            top: '8.71%',
            bottom: '83.28%',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '23px',
            letterSpacing: '0.05em',
            color: '#000000'
          }}
        >
          ARCHIVE FLOWS
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
            color: '#FFFFFF'
          }}
        >
          25
        </p>
      </Box>
    )
}
