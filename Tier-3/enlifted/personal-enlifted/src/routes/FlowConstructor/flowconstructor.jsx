import { Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import AddStep from './Stepbar/addstep'
import ToolBar from './Toolbar/toolBar'
import View from './WYSIWYG/view'


export default function FlowConstructor() {


  return (
    <Box display='flex' justifyContent='space-between' >
    <ToolBar/>
    <View/>
    <AddStep/>
    </Box>
  )
}
