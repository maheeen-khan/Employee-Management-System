import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import { BarPlot } from '@mui/x-charts/BarChart';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';

export default function BasicComposition() {
    const [isResponsive, setIsResponsive] = React.useState(true);

    const sizingProps = isResponsive ? {} : { width: 500, height: 300 };
    return (
        <Box sx={{ width: '100%', overflow: 'auto', border: '1px solid grey', padding: 2, borderRadius: 2 }}>
            <h4>Total sales</h4>
            <p style={{ color: 'rgb(102, 102, 102)', fontSize: '12px' }}>
                Chart is showing each month's sale
            </p>

            <Paper sx={{ margin: 1, height: 300, boxShadow: 'none' }} elevation={3}>

                <ChartContainer
                    series={[
                        {
                            type: 'bar',
                            data: [1, 2, 3, 5, 1],
                        },
                        {
                            type: 'line',
                            data: [1, 3, 2, 5, 4],
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
                    yAxis={[
                        {
                            id: 'y-axis-id',
                            scaleType: 'linear',
                            label: 'Visitors',
                        },
                    ]}

                    {...sizingProps}
                >
                    <BarPlot />
                    <LinePlot />
                    <MarkPlot />
                    <ChartsXAxis label="X axis" axisId="x-axis-id" />
                    <ChartsYAxis label="Visitors" axisId="y-axis-id" />
                </ChartContainer>
            </Paper>
        </Box>
    );
}
