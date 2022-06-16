import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StyleIcon from '@mui/icons-material/Style';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PeopleIcon from '@mui/icons-material/People';
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
        icon: <PeopleIcon />
    },
    {
        name: 'Solicitudes',
        route: '/applications',
        icon: <SupportIcon />
    },
    {
        name: 'Categorias',
        route: '/categories',
        icon: <LocalOfferIcon />
    },
    {
        name: 'Subcategorías',
        route: '/subcategories',
        icon: <StyleIcon />
    },
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
    }
]