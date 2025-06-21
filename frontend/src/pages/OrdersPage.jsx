import React from 'react'
import { Box } from '@mui/material'
import CollapsibleTable from '../components/Table'
import FilterBar from '../components/FilterBar'
const OrdersPage = () => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>

        <Box sx={{ alignItems: 'center', backgroundColor: '#453F78', color: 'white', padding: '10px', paddingX: '22px', borderRadius: '7px', width: '24%' }}>Total Orders <h1>71</h1> <p style={{ fontSize: '13px' }}>22% last week</p></Box>

        <Box sx={{ justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#795458', color: 'white', padding: '10px', borderRadius: '7px', paddingX: '22px', width: '24%' }}>Pending <h1>13</h1> <p style={{ fontSize: '13px' }}>4% last week</p></Box>


        <Box sx={{ justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#C08B5C', color: 'white', padding: '10px', borderRadius: '7px', paddingX: '22px', width: '24%' }}>On way <h1>27</h1> <p style={{ fontSize: '13px' }}>8% last week</p></Box>


        <Box sx={{ justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#FFC94A', color: 'white', padding: '10px', borderRadius: '7px', paddingX: '22px', width: '24%' }}>Completed <h1>31</h1> <p style={{ fontSize: '13px' }}>42% last week</p></Box>

      </Box>

<div style={{marginTop:'30px'}}>
<FilterBar/>
</div>
      <div style={{ marginTop: '20px', padding: '6px',  borderRadius: '8px' }}>
        <CollapsibleTable />
      </div>
    </>
  )
}

export default OrdersPage