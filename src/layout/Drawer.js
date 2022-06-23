import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    routes,
    geographicAreaRoutes,
    adminRoutes,
    settingsRoutes
} from './routes'
import ListItemLink from '../components/ListItemLink';
import { useAdmin } from '../context/AdminContext'
import AccountMenu from './AccountMenu'
import LogoutButton from '../components/LogoutButton';
import Submenu from '../components/Submenu';
import PublicIcon from '@mui/icons-material/Public';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import GoBackButton from './GoBackButton'
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

const drawerWidth = 240;

function ResponsiveDrawer() {
    const [state, setState] = React.useState({
        geographicArea: false,
        settingsArea: false,
        administrative: false
    });
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { state: AdminState } = useAdmin()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleToggle = menu => {
        setState(state => ({ ...state, [menu]: !state[menu] }));
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {routes.map((route, index) => (
                    <ListItemLink
                        primary={route.name}
                        to={route.route}
                        icon={route.icon}
                        key={index}
                    />
                ))}
                <Submenu
                    handleToggle={() => handleToggle('settingsArea')}
                    isOpen={state.settingsArea}
                    sidebarIsOpen={true}
                    name='Configuraciones'
                    icon={<DisplaySettingsIcon />}
                >
                    {settingsRoutes.map((route, index) => (
                        <ListItemLink
                            primary={route.name}
                            to={route.route}
                            icon={route.icon}
                            key={index}
                        />
                    ))}
                </Submenu>
                <Submenu
                    handleToggle={() => handleToggle('geographicArea')}
                    isOpen={state.geographicArea}
                    sidebarIsOpen={true}
                    name='Áreas'
                    icon={<PublicIcon />}
                >
                    {geographicAreaRoutes.map((route, index) => (
                        <ListItemLink
                            primary={route.name}
                            to={route.route}
                            icon={route.icon}
                            key={index}
                        />
                    ))}
                </Submenu>
                <Submenu
                    handleToggle={() => handleToggle('administrative')}
                    isOpen={state.administrative}
                    sidebarIsOpen={true}
                    name='Administración'
                    icon={<AssignmentIndIcon />}
                >
                    {adminRoutes.map((route, index) => (
                        <ListItemLink
                            primary={route.name}
                            to={route.route}
                            icon={route.icon}
                            key={index}
                        />
                    ))}
                </Submenu>
                <LogoutButton />
            </List>
            <Divider />
        </div>
    );

    return (
        <>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <GoBackButton />
                    <Typography variant="h6" noWrap component="div">
                        {AdminState.title}
                    </Typography>
                    <Box flex='1' justifyContent='flex-end' display='flex'>
                        <AccountMenu />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
}

export default ResponsiveDrawer;
