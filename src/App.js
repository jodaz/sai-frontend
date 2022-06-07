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
import ItemsList from './pages/items/ItemList'
import ItemEdit from './pages/items/ItemEdit'
import ItemCreate from './pages/items/ItemCreate'
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
                                    path="/items"
                                    element={
                                        <Layout>
                                            <ItemsList />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/items/:id/edit"
                                    element={
                                        <Layout>
                                            <ItemEdit />
                                        </Layout>
                                    }
                                />
                                <Route
                                    path="/items/create"
                                    element={
                                        <Layout>
                                            <ItemCreate />
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
