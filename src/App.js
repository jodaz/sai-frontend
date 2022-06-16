import './App.css';
import { Routes, Route } from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import { AdminProvider } from './context/AdminContext'
import { AuthProvider } from './context/AuthContext'
import { SnackbarProvider } from 'notistack';
import { ConfirmProvider } from 'material-ui-confirm';
import theme from './theme'
import Layout from './layout'
// Other pages
import routes from './routes'
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
                                    path="/security"
                                    element={
                                        <Layout>
                                            <Security />
                                        </Layout>
                                    }
                                />
                                {routes.map(route => (
                                    <Route
                                        path={route.path}
                                        element={
                                            <Layout>
                                                {route.component}
                                            </Layout>
                                        }
                                    />
                                ))}
                            </Routes>
                        </AuthProvider>
                    </AdminProvider>
                </SnackbarProvider>
            </ConfirmProvider>
        </ThemeProvider>
    );
}

export default App;
