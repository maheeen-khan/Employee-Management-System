import React from 'react';
import { Box, Button, ToggleButton, ToggleButtonGroup, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const FilterBar = () => {
  const [filter, setFilter] = React.useState('all');

  const handleFilterChange = (event, newFilter) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
      backgroundColor: 'white',
      borderBottom: '1px solid #e0e0e0',
    }}>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilterChange}
        aria-label="order filter"
        sx={{
          '& .MuiToggleButton-root': {
            textTransform: 'none',
            border: 'none',
            borderRadius: '4px',
            padding: '6px 12px',
            marginRight: '8px',
            '&.Mui-selected': {
              backgroundColor: '#A67B5B',
              color: 'white',
              '&:hover': {
                backgroundColor: '#906c51',
              }
            },
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 0.04)',
            }
          }
        }}
      >
        <ToggleButton value="all" aria-label="all">
          All
        </ToggleButton>
        <ToggleButton value="unfulfilled" aria-label="unfulfilled">
          Unfulfilled
        </ToggleButton>
        <ToggleButton value="unpaid" aria-label="unpaid">
          Unpaid
        </ToggleButton>
        <ToggleButton value="open" aria-label="open">
          On way
        </ToggleButton>
        <ToggleButton value="closed" aria-label="closed">
          Completed
        </ToggleButton>
      </ToggleButtonGroup>

      <Button
      style={{backgroundColor: '#6F4E37'}}
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          textTransform: 'none',
          borderRadius: '4px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          }
        }}
      >
        Add
      </Button>
    </Box>
  );
};

export default FilterBar;