import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import FlexBetween from './FlexBetween'


const StatBox = ( {title, value, increase, icon, description} ) => {

    const theme = useTheme()
  const isNonMediumScreens = useMediaQuery("(min-width: 1600px)")

  return (
    <Box 
    gridColumn="span 2" 
    gridRow="span 1" 
    display="flex" 
    flexDirection="column" 
    justifyContent="space-between"
    p="1.25rem 1rem"
    flex="1 1 100%"
    boxShadow="0px 0px 8px 4px rgb(0, 0, 0, 0.3)"
    backgroundColor={theme.palette.background.alt}
    borderRadius="0.55rem"
    >
        <FlexBetween>
            <Typography variant="h6" sx={{ color: theme.palette.secondary[100]}}>
                {title}
            </Typography>
                {icon}
        </FlexBetween>

      <Typography variant="h3" fontWeight="600" sx={{ color: theme.palette.secondary[200]}}>
                {value}
        </Typography>
      <FlexBetween gap="1rem" sx={{ display: isNonMediumScreens ? "flex" : "block", alignItems: "flex-start"}}>
              <Typography variant="h6" fontStyle="italic" sx={{ color: theme.palette.secondary.light}}>
                {increase}
              </Typography>
        <Typography fontSize="13px">{description}</Typography>
        </FlexBetween>

    </Box>
  )
}

export default StatBox
