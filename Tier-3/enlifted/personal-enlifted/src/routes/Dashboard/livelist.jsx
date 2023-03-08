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



export default function LiveList() {
    return (
        <Box alignItems='stack'>
        <Typography paddingLeft='5' sx={{color: '#7F95FA'}}  variant='h5'>Live</Typography>
        <List sx={{ width: '100%' }}>
            <ListItem>
                <ListItemIcon>
            <BlurCircularIcon 
            sx={{color: '#7F95FA'}} 
            fontSize='small'
            />
          </ListItemIcon>
                <ListItemText
                    secondary="Flow 1"
                />
            </ListItem>

            <ListItem >
                  <ListItemIcon>
            <BlurCircularIcon 
            fontSize='small'
            color='disabled'
             />
          </ListItemIcon>
                <ListItemText
                    secondary="Flow 2"
                />
            </ListItem>

            <ListItem >
                  <ListItemIcon>
            <BlurCircularIcon 
            fontSize='small'
            sx={{color: '#7F95FA'}} 
            />
          </ListItemIcon>
                <ListItemText
                    secondary="Flow 3"
                />
            </ListItem>
        </List>
        </Box>
    )
}
