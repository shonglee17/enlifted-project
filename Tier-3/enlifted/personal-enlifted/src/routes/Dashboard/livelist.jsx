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

const liveFlows = [
    {
        name: 'Flow 1',
        version: 'V2',
        published: true,
        dateMade: '11/2/2020'
    },
    {
        name: 'Flow 3',
        version: 'V1',
        published: true,
        dateMade: '1/7/2020'
    },
    {
        name: 'Gratitude',
        version: 'V2',
        published: true,
        dateMade: '12/2/2019'
    },
    {
        name: 'Flow 3',
        version: 'V7',
        published: false,
        dateMade: '4/2/2019'
    },
    {
        name: 'Smile 1',
        version: 'V1',
        published: true,
        dateMade: '3/6/2019'
    },
    {
        name: 'Gratitude',
        version: 'V1',
        published: false,
        dateMade: '12/2/2018'
    },
    {
        name: 'Flow 1',
        version: 'V2',
        published: true,
        dateMade: '12/2/2019'
    },
    {
        name: 'Origin',
        version: 'V1',
        published: true,
        dateMade: '12/2/2019'
    }
]

export default function LiveList() {
    return (
        <Box alignItems='stack'>
            <Typography sx={{ color: '#7F95FA' }} variant='h5'>Live</Typography>
            <List sx={{ width: '100%' }}>
                {liveFlows.map(flow => (
                <ListItem 
                sx={{margin: '20px 0'}}
                justifyContent='space-between' >
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
