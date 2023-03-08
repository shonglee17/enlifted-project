import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import StarIcon from '@mui/icons-material/Star';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import BlurCircularIcon from '@mui/icons-material/BlurCircular';
import { Box } from '@mui/material';
import { liveFlows } from '../../Data';

export default function LiveList() {
const arrToShow = liveFlows.slice(Math.min(liveFlows.length - 10, 0))

    return (
        <Box alignItems='stack'>
            <Typography sx={{ color: '#7F95FA' }} variant='h5'>Live</Typography>
            <List sx={{ width: '100%' }}>
                {arrToShow.slice(0).reverse().map(flow => (
                <ListItem 
                key={flow.id}
                sx={{margin: '20px 0'}}
                 >
                    <ListItemIcon>
                    
                    {flow.published ? 
                        <BlurCircularIcon
                            sx={{ color: '#7F95FA' }}
                            fontSize='small'
                        />
                        :
                        <BlurCircularIcon
                            color='disabled'
                            fontSize='small'
                        />
                    }

                    </ListItemIcon>
                    
                    <Typography
                        paddingRight={5}
                        variant='h7'
                    >
                        {flow.name} {flow.version}
                    </Typography>
                    <Typography
                    sx={{ opacity: .5 }}
                    >
                        {flow.dateMade}
                    </Typography>
                </ListItem>
                    
                        ))}
            </List>
        </Box>
    )
}
