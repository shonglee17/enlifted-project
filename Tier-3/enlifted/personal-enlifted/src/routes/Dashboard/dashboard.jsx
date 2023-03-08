import React, { useEffect } from 'react';
import { useAuth } from '../../auth';
import ArchiveCount from './archivecount';
import CreateFlow from './createflow';
import LiveList from './livelist';
import PublishCount from './publishcount';
import TotalCount from './totalcount.jsx';
import { Box, Typography } from '@mui/material';
import { liveFlows } from '../../Data';

export default function Dashboard() {
  const auth = useAuth();

  function handleSignOut() {
    auth.signout(() => { });
  }

  return (
    <Box m='20px'>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <h1> welcome {auth.user.username}</h1>
      </Box>

      <Box
        display='grid'
        gridTemplateColumns='repeat(45, 1fr)'
        gridTemplateRows='repeat(30, auto)'
        gridAutoRows='140px'
        gap='20px'
      >
        <Box
          gridColumn='span 33'
          gridRow='span 20'
          backgroundColor='#ffffff'
          display='flex'
          height='flex'
          p='0 30px'
          mt='25'
          alignItems='center'
          justifyContent='center'
          borderRadius='20px'
          sx={{
            boxShadow: 1
          }}
        >
          <CreateFlow/>
        </Box>

        <Box
          gridColumn='span 12'
          gridRow='span 30'

          display='flex'
          height='flex'
          p='0 30px'
          mt='25'
          
          justifyContent='left'
          borderRadius='20px'
        >
          <LiveList/>
        </Box>


        <Box
          gridColumn='span 11'
          gridRow='span 10'
          backgroundColor='#ffffff'
          display='flex'
          height='flex'
          p='0 30px'
          mt='25'
          alignItems='center'
          justifyContent='center'
          borderRadius='20px'
          sx={{
            boxShadow: 1
          }}
        >
          <TotalCount />
        </Box>

        <Box
          gridColumn='span 11'
          gridRow='span 10'
          backgroundColor='#ffffff'
          display='flex'
          height='flex'
          p='0 30px'
          mt='25'
          alignItems='center'
          justifyContent='center'
          borderRadius='20px'
          sx={{
            boxShadow: 1
          }}
        >

          <PublishCount />
        </Box>

        <Box
          gridColumn='span 11'
          gridRow='span 10'
          backgroundColor='#6B85FB'
          display='flex'
          height='flex'
          p='0 30px'
          mt='25'
          alignItems='center'
          justifyContent='center'
          borderRadius='20px'
          sx={{
            boxShadow: 1
          }}
        >
          <ArchiveCount />
        </Box>

      </Box>
    </Box>

  );
}

{/* <div>
        <h1 style={{'width': '200px'}}>
          This is the secure Dashboard Page. The user `{auth.user.username}` is
          logged in. The JWT is: `{auth.user.token}`
        </h1>
      </div>
      <button onClick={handleSignOut}>Sign Out</button> */}