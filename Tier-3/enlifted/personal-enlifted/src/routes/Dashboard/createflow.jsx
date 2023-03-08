import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreateFlow() {
const navigate = useNavigate()

const handleClick = (e) => {
  e.preventDefault
  navigate('/View')
}

  return (
<h1 onClick={handleClick}>creative flow</h1>
  )
}
