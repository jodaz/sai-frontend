import SubcategoryList from './pages/subcategories/SubcategoryList'
import SubcategoryEdit from './pages/subcategories/SubcategoryEdit'
import SubcategoryCreate from './pages/subcategories/SubcategoryCreate'
import SectorList from './pages/sectors/SectorList'
import SectorEdit from './pages/sectors/SectorEdit'
import SectorCreate from './pages/sectors/SectorCreate'
import CategorysList from './pages/categories/CategoryList'
import CategoryEdit from './pages/categories/CategoryEdit'
import CategoryCreate from './pages/categories/CategoryCreate'
import CommunityList from './pages/communities/CommunityList'
import CommunityEdit from './pages/communities/CommunityEdit'
import CommunityCreate from './pages/communities/CommunityCreate'
import PeopleList from './pages/people/PeopleList'
import PeopleEdit from './pages/people/PeopleEdit'
import PeopleCreate from './pages/people/PeopleCreate'
import ParishList from './pages/parishes/ParishList'
import ParishEdit from './pages/parishes/ParishEdit'
import ParishCreate from './pages/parishes/ParishCreate'
import StreetList from './pages/streets/StreetList'
import StreetEdit from './pages/streets/StreetEdit'
import StreetCreate from './pages/streets/StreetCreate'
import RoleList from './pages/roles/RoleList'
import RoleEdit from './pages/roles/RoleEdit'
import RoleCreate from './pages/roles/RoleCreate'
import UserList from './pages/users/UserList'
import UserEdit from './pages/users/UserEdit'
import UserCreate from './pages/users/UserCreate'
import Dashboard from './pages/dashboard'
import ApplicationList from './pages/applications/ApplicationList';
import ApplicationCreate from './pages/applications/ApplicationCreate';
import PeopleShow from './pages/people/PeopleShow'
import ApplicationShow from './pages/applications/ApplicationShow'
import PositionList from './pages/positions/PositionList'
import PositionEdit from './pages/positions/PositionEdit'
import PositionCreate from './pages/positions/PositionCreate'

const routes = [
    {
        path: '/',
        component: <Dashboard />
    },
    {
        path: '/people',
        component: <PeopleList />
    },
    {
        path: '/people/:id/edit',
        component: <PeopleEdit />
    },
    {
        path: '/people/:id',
        component: <PeopleShow />
    },
    {
        path: '/people/create',
        component: <PeopleCreate />
    },
    {
        path: '/people/:id/applications/create',
        component: <ApplicationCreate />
    },
    {
        path: '/applications/:id',
        component: <ApplicationShow />
    },
    {
        path: '/applications',
        component: <ApplicationList />
    },
    {
        path: '/categories',
        component: <CategorysList />
    },
    {
        path: '/categories/:id/edit',
        component: <CategoryEdit />
    },
    {
        path: '/categories/create',
        component: <CategoryCreate />
    },
    {
        path: '/positions',
        component: <PositionList />
    },
    {
        path: '/positions/:id/edit',
        component: <PositionEdit />
    },
    {
        path: '/positions/create',
        component: <PositionCreate />
    },
    {
        path: '/subcategories',
        component: <SubcategoryList />
    },
    {
        path: '/subcategories/:id/edit',
        component: <SubcategoryEdit />
    },
    {
        path: '/subcategories/create',
        component: <SubcategoryCreate />
    },
    {
        path: '/parishes',
        component: <ParishList />
    },
    {
        path: '/parishes/:id/edit',
        component: <ParishEdit />
    },
    {
        path: '/parishes/create',
        component: <ParishCreate />
    },
    {
        path: '/communities',
        component: <CommunityList />
    },
    {
        path: '/communities/:id/edit',
        component: <CommunityEdit />
    },
    {
        path: '/communities/create',
        component: <CommunityCreate />
    },
    {
        path: '/sectors',
        component: <SectorList />
    },
    {
        path: '/sectors/:id/edit',
        component: <SectorEdit />
    },
    {
        path: '/sectors/create',
        component: <SectorCreate />
    },
    {
        path: '/streets',
        component: <StreetList />
    },
    {
        path: '/streets/:id/edit',
        component: <StreetEdit />
    },
    {
        path: '/streets/create',
        component: <StreetCreate />
    },
    {
        path: '/users',
        component: <UserList />
    },
    {
        path: '/users/:id/edit',
        component: <UserEdit />
    },
    {
        path: '/users/create',
        component: <UserCreate />
    },
    {
        path: '/roles',
        component: <RoleList />
    },
    {
        path: '/roles/:id/edit',
        component: <RoleEdit />
    },
    {
        path: '/roles/create',
        component: <RoleCreate />
    },
]

export default routes