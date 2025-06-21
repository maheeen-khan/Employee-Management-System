import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';

export default function SwitchSeriesType() {
  const [type, setType] = React.useState('line');

  return (
    <Box sx={{ width: '100%', overflow: 'auto', border: '1px solid grey', padding: 2, borderRadius: 2, marginTop: 3 }}>
      <TextField
        select
        value={type}
        onChange={(event) => setType(event.target.value)}
        label="series type"
        sx={{ minWidth: 150, marginBottom: 5}}

      >
        <MenuItem value="line">line</MenuItem>
        <MenuItem value="bar">bar</MenuItem>
      </TextField>

      <div>
        <ChartContainer
          series={[
            {
              type,
              data: [1, 2, 3, 2, 1],
            },
            {
              type,
              data: [4, 3, 1, 3, 4],
            },
            {
              type,
              data: [2, 2, 3, 4, 4],
            },
          ]}
          xAxis={[
            {
              data: ['July', 'Aug', 'Sep', 'Oct', 'Nov'],
              scaleType: 'band',
              id: 'x-axis-id',
              height: 45,
            },
          ]}
          height={250}
        >
          <BarPlot />
          <LinePlot />
          <ChartsXAxis label="Months" axisId="x-axis-id" />
        </ChartContainer>
      </div>
    </Box>
  );
}
