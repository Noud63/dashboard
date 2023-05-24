import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import { Box, Typography, useTheme } from '@mui/material'
import { useGetSalesQuery } from 'state/api'
import { RestaurantMenu } from '@mui/icons-material'

const BreakdownChart = ({ isDashboard = false }) => {

    const { data, isLoading } =useGetSalesQuery()
    const theme = useTheme()

    if(!data || isLoading) return "Loading..."

    const colors = [
        theme.palette.secondary[500],
        theme.palette.secondary[300],
        theme.palette.secondary[300],
        theme.palette.secondary[500],
    ]
    const formattedData = Object.entries(data.salesByCategory).map(([category, sales], index) => ({  //ex. ["shoes", 6515] category = shoes, sales = 6515
            id: category,
            label: category,
            value: sales,
            color: colors[index]  
    })
    )
    
  return (
    <div>BreakdownChart</div>
  )
}

export default BreakdownChart
