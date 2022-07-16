import HomeIcon from '@mui/icons-material/Home';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SupportIcon from '@mui/icons-material/Support';

const AdminIcon = () => (
    <FiberManualRecordIcon sx={{
        color: theme => theme.palette.primary.main,
        marginLeft: '1rem',
        paddingRight: '-1rem',
        fontSize: '0.7rem'
    }}/>
)

export const routes = [
    {
        name: 'Inicio',
        route: '/',
        icon: <HomeIcon />
    },
    {
        name: 'Personas',
        route: '/people',
        icon: <PeopleAltOutlinedIcon />
    },
    {
        name: 'Solicitudes',
        route: '/applications',
        icon: <SupportIcon />
    }
]

export const geographicAreaRoutes = [
    {
        name: 'Parroquias',
        route: '/parishes',
        icon: <AdminIcon />
    },
    {
        name: 'Comunidades',
        route: '/communities',
        icon: <AdminIcon />
    },
    {
        name: 'Sectores',
        route: '/sectors',
        icon: <AdminIcon />
    },
    {
        name: 'Calles',
        route: '/streets',
        icon: <AdminIcon />
    }
]

export const adminRoutes = [
    {
        name: 'Usuarios',
        route: '/users',
        icon: <AdminIcon />
    },
    {
        name: 'Roles',
        route: '/roles',
        icon: <AdminIcon />
    },
    {
        name: 'Dependencias',
        route: '/entities',
        icon: <AdminIcon />
    }
]

export const settingsRoutes = [
    {
        name: 'Cargos',
        route: '/positions',
        icon: <AdminIcon />
    },
    {
        name: 'Categorias',
        route: '/categories',
        icon: <AdminIcon />
    },
    {
        name: 'Subcategorías',
        route: '/subcategories',
        icon: <AdminIcon />
    },
]