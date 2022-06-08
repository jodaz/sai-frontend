import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import StyleIcon from '@mui/icons-material/Style';

const routes = [
    {
        name: 'Inicio',
        route: '/',
        icon: <HomeIcon />
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
    {
        name: 'Municipios',
        route: '/municipalities',
        icon: <LocalOfferIcon />
    },
    {
        name: 'Parroquias',
        route: '/parishes',
        icon: <LocalOfferIcon />
    },
]

export default routes;