import './App.css';
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import { AdminProvider } from './context/AdminContext'
import { AuthProvider } from './context/AuthContext'
import { SnackbarProvider } from 'notistack';
import { ConfirmProvider } from 'material-ui-confirm';
import theme from './theme'
import Layout from './layout'
// Pages
import SubcategoryList from './pages/subcategories/SubcategoryList'
import SubcategoryEdit from './pages/subcategories/SubcategoryEdit'
import SubcategoryCreate from './pages/subcategories/SubcategoryCreate'
import CategorysList from './pages/categories/CategoryList'
import CategoryEdit from './pages/categories/CategoryEdit'
import CategoryCreate from './pages/categories/CategoryCreate'
import MunicipalityList from './pages/municipalities/MunicipalityList'
import MunicipalityEdit from './pages/municipalities/MunicipalityEdit'
import MunicipalityCreate from './pages/municipalities/MunicipalityCreate'
import ParishList from './pages/parishes/ParishList'
import ParishEdit from './pages/parishes/ParishEdit'
import ParishCreate from './pages/parishes/ParishCreate'
import Dashboard from './pages/dashboard'
import Login from './pages/auth/Login'
import Security from './pages/account/Security';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <ConfirmProvider>
                <SnackbarProvider maxSnack={3}>
                    <AdminProvider>
                        <AuthProvider>
                            <Routes>
                                <Route path='/login' element={<Login />} />
                                <Route
                                    path="/"
                                    element={
                                        <Layout>
                                            <Dashboard />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/categories"
                                    element={
                                        <Layout>
                                            <CategorysList />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/categories/:id/edit"
                                    element={
                                        <Layout>
                                            <CategoryEdit />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/categories/create"
                                    element={
                                        <Layout>
                                            <CategoryCreate />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/subcategories"
                                    element={
                                        <Layout>
                                            <SubcategoryList />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/subcategories/:id/edit"
                                    element={
                                        <Layout>
                                            <SubcategoryEdit />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/subcategories/create"
                                    element={
                                        <Layout>
                                            <SubcategoryCreate />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/municipalities"
                                    element={
                                        <Layout>
                                            <MunicipalityList />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/municipalities/:id/edit"
                                    element={
                                        <Layout>
                                            <MunicipalityEdit />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/municipalities/create"
                                    element={
                                        <Layout>
                                            <MunicipalityCreate />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/parishes"
                                    element={
                                        <Layout>
                                            <ParishList />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/parishes/:id/edit"
                                    element={
                                        <Layout>
                                            <ParishEdit />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/parishes/create"
                                    element={
                                        <Layout>
                                            <ParishCreate />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/security"
                                    element={
                                        <Layout>
                                            <Security />
                                        </Layout>
                                    }
                                />
                            </Routes>
                        </AuthProvider>
                    </AdminProvider>
                </SnackbarProvider>
            </ConfirmProvider>
        </ThemeProvider>
    );
}

export default App;
