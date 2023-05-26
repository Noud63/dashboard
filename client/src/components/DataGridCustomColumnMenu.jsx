import React from 'react'
import { GridColumnMenuContainer, GridFilterMenuItem, HideGridColMenuItem, HideGridcolMenuItem} from '@mui/x-data-grid'

const CustomColumnMenu = (props) => {

    const {hideMenu, currentColumn, open} = props

  return (
    <GridColumnMenuContainer
    hideMenu={hideMenu}
    currentColumn={currentColumn}
    open={open}
    >
        <GridFilterMenuItem onClick={hideMenu} column={currentColumn}/>
        <HideGridColMenuItem />
    </GridColumnMenuContainer>
  )
}

export default CustomColumnMenu