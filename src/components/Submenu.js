import * as React from 'react';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

const SubMenu = ({
    handleToggle,
    sidebarIsOpen,
    isOpen,
    name,
    icon,
    children,
    dense
}) => {
    const header = (
        <ListItem button onClick={handleToggle} sx={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Box display='flex' alignItems='center' flex='1'>
                <ListItemIcon>
                {icon}
                </ListItemIcon>
                {name}
            </Box>
            <ListItemIcon sx={{
                minWidth: '0 !important'
            }}>
            {
                (isOpen) ? <ExpandLess /> : <ExpandMore />
            }
            </ListItemIcon>
        </ListItem>
    );

    return (
        <React.Fragment>
            {sidebarIsOpen || isOpen ? (
                header
            ) : (
                <Tooltip title={name} placement="right">
                    {header}
                </Tooltip>
            )}
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List
                    dense={dense}
                    component="div"
                    disablePadding
                >
                    {children}
                </List>
            </Collapse>
        </React.Fragment>
    );
};

export default SubMenu;
