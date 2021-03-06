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
import EntityList from './pages/entities/EntityList'
import EntityEdit from './pages/entities/EntityEdit'
import EntityCreate from './pages/entities/EntityCreate'
import CategoryShow from './pages/categories/CategoryShow'
import SubcategoryShow from './pages/subcategories/SubcategoryShow'
import PositionShow from './pages/positions/PositionShow'
import ParishShow from './pages/parishes/ParishShow'
import CommunityShow from './pages/communities/CommunityShow'
import SectorShow from './pages/sectors/SectorShow'
import StreetShow from './pages/streets/StreetShow'

const routes = [
    {
        path: '/',
        component: <Dashboard />,
        roles: 'super-admin,admin,transcriptor'
    },
    {
        path: '/people',
        component: <PeopleList />,
        roles: 'super-admin,admin,transcriptor'
    },
    {
        path: '/people/:id/edit',
        component: <PeopleEdit />,
        roles: 'super-admin,admin'
    },
    {
        path: '/people/:id',
        component: <PeopleShow />,
        roles: 'super-admin,admin,transcriptor'
    },
    {
        path: '/people/create',
        component: <PeopleCreate />,
        roles: 'super-admin,admin,transcriptor'
    },
    {
        path: '/people/:id/applications/create',
        component: <ApplicationCreate />,
        roles: 'super-admin,admin,transcriptor'
    },
    {
        path: '/applications/:id',
        component: <ApplicationShow />,
        roles: 'super-admin,admin,transcriptor'
    },
    {
        path: '/applications',
        component: <ApplicationList />,
        roles: 'super-admin,admin,transcriptor'
    },
    {
        path: '/categories',
        component: <CategorysList />,
        roles: 'super-admin,admin'
    },
    {
        path: '/categories/:id/edit',
        component: <CategoryEdit />,
        roles: 'super-admin'
    },
    {
        path: '/categories/:id',
        component: <CategoryShow />,
        roles: 'super-admin,admin'
    },
    {
        path: '/categories/create',
        component: <CategoryCreate />,
        roles: 'super-admin'
    },
    {
        path: '/positions',
        component: <PositionList />,
        roles: 'super-admin,admin'
    },
    {
        path: '/positions/:id',
        component: <PositionShow />,
        roles: 'super-admin,admin'
    },
    {
        path: '/positions/:id/edit',
        component: <PositionEdit />,
        roles: 'super-admin'
    },
    {
        path: '/positions/create',
        component: <PositionCreate />,
        roles: 'super-admin'
    },
    {
        path: '/subcategories',
        component: <SubcategoryList />,
        roles: 'super-admin,admin'
    },
    {
        path: '/subcategories/:id',
        component: <SubcategoryShow />,
        roles: 'super-admin,admin'
    },
    {
        path: '/subcategories/:id/edit',
        component: <SubcategoryEdit />,
        roles: 'super-admin'
    },
    {
        path: '/subcategories/create',
        component: <SubcategoryCreate />,
        roles: 'super-admin'
    },
    {
        path: '/parishes',
        component: <ParishList />,
        roles: 'super-admin,admin'
    },
    {
        path: '/parishes/:id/edit',
        component: <ParishEdit />,
        roles: 'super-admin'
    },
    {
        path: '/parishes/:id',
        component: <ParishShow />,
        roles: 'super-admin,admin'
    },
    {
        path: '/parishes/create',
        component: <ParishCreate />,
        roles: 'super-admin'
    },
    {
        path: '/communities',
        component: <CommunityList />,
        roles: 'super-admin,admin'
    },
    {
        path: '/communities/:id/edit',
        component: <CommunityEdit />,
        roles: 'super-admin'
    },
    {
        path: '/communities/:id',
        component: <CommunityShow />,
        roles: 'super-admin,admin'
    },
    {
        path: '/communities/create',
        component: <CommunityCreate />,
        roles: 'super-admin'
    },
    {
        path: '/sectors',
        component: <SectorList />,
        roles: 'super-admin,admin'
    },
    {
        path: '/sectors/:id/edit',
        component: <SectorEdit />,
        roles: 'super-admin'
    },
    {
        path: '/sectors/create',
        component: <SectorCreate />,
        roles: 'super-admin'
    },
    {
        path: '/sectors/:id',
        component: <SectorShow />,
        roles: 'super-admin,admin'
    },
    {
        path: '/streets',
        component: <StreetList />,
        roles: 'super-admin,admin'
    },
    {
        path: '/streets/:id/edit',
        component: <StreetEdit />,
        roles: 'super-admin'
    },
    {
        path: '/streets/:id',
        component: <StreetShow />,
        roles: 'super-admin,admin'
    },
    {
        path: '/streets/create',
        component: <StreetCreate />,
        roles: 'super-admin'
    },
    {
        path: '/users',
        component: <UserList />,
        roles: 'super-admin'
    },
    {
        path: '/users/:id/edit',
        component: <UserEdit />,
        roles: 'super-admin'
    },
    {
        path: '/users/create',
        component: <UserCreate />,
        roles: 'super-admin'
    },
    {
        path: '/roles',
        component: <RoleList />,
        roles: 'super-admin'
    },
    {
        path: '/roles/:id/edit',
        component: <RoleEdit />,
        roles: 'super-admin'
    },
    {
        path: '/roles/create',
        component: <RoleCreate />,
        roles: 'super-admin'
    },
    {
        path: '/entities',
        component: <EntityList />,
        roles: 'super-admin'
    },
    {
        path: '/entities/:id/edit',
        component: <EntityEdit />,
        roles: 'super-admin'
    },
    {
        path: '/entities/create',
        component: <EntityCreate />,
        roles: 'super-admin'
    },
]

export default routes