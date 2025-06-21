import React from 'react'
import SwitchSeriesType from '../components/LineChart'
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, Chip, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const TrafficReportPage = () => {
  const circleColors = [
    '#FF6384', // Red
    '#36A2EB', // Blue
    '#FFCE56', // Yellow
    '#4BC0C0', // Teal
    '#9966FF', // Purple
  ];
  return (
    <>

      <SwitchSeriesType />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap:'wrap' ,marginTop: '20px' }}>
        <Box sx={{
          width: '100%',
          maxWidth: 360,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          boxShadow: 1,
          p: 2,
          marginTop: 3,
        }}>
          <Typography variant="h6" component="div" sx={{
            fontWeight: 'bold',
            mb: 2,
            color: '#333' // Darker text for title
          }}>
            Pages
          </Typography>

          <List component="nav">
            {[
              { name: 'Home', path: '/index.php' },
              { name: 'Products', path: '/products.php' },
              { name: 'Card', path: '/card.php' },
              { name: 'About', path: '/products.php' },
              { name: 'Login', path: '/login.php' },
            ].map((page, index) => (
              <ListItem
                button
                component={Link}
                to={page.path}
                key={page.name}
                sx={{
                  px: 1,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                    borderRadius: 1,
                  }
                }}
              >
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Avatar sx={{
                    bgcolor: circleColors[index % circleColors.length],
                    width: 10,
                    height: 10,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ color: '#444', fontWeight: 500 }}>
                      {page.name}
                    </Typography>
                  }
                />
                <Typography variant="body2" sx={{ color: '#888', fontSize: '0.75rem' }}>
                  {page.path}
                </Typography>
              </ListItem>
            ))}

            <Divider sx={{ my: 1 }} />

            <ListItem
              button
              sx={{
                px: 1,
                py: 1.5,
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                  borderRadius: 1,
                }
              }}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>
                <Avatar sx={{
                  bgcolor: '#ddd',
                  width: 10,
                  height: 10,
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }} />
              </ListItemIcon>
              <ListItemText primary={
                <Typography variant="body1" sx={{ color: '#444', fontWeight: 500 }}>
                  Other
                </Typography>
              } />
              <Typography variant="body2" sx={{ color: '#1976d2', fontSize: '0.75rem', fontWeight: 500 }}>
                See all
              </Typography>
            </ListItem>
          </List>


        </Box>

        <Box sx={{ alignItems: 'center', backgroundColor: '#453F78', color: 'white', padding: '10px', paddingX: '22px', borderRadius: '7px', width: '24%', alignContent: 'center', marginTop: '25px' }}><span style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>Sessions <ArrowUpwardIcon fontSize='small' /> 19%</span><h1>3.2K</h1> <p style={{ fontSize: '13px' }}>22% last week</p></Box>


        <Box sx={{ alignItems: 'center', backgroundColor: '#C08B5C', color: 'white', padding: '10px', paddingX: '22px', borderRadius: '7px', width: '24%', alignContent: 'center', marginTop: '25px' }}><span style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>Bounce rate</span><h1>88.27%</h1> <p style={{ fontSize: '13px' }}>22% last week</p></Box>


      </div>
    </>
  )
}

export default TrafficReportPage