import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import ForgotPassword from './components/ForgotPassword';
import HomePage from './components/HomePage';
import Login from './components/Login';

import Main from './components/Main';
import NewsPasge from './components/NewsPasge';
import Register from './components/Register';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

export default function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/blogs',
                    element: (
                        <PrivateRoute>
                            <BlogPage />
                        </PrivateRoute>
                    )
                },
                {
                    path: '/news',
                    element: (
                        <PrivateRoute>
                            <NewsPasge />
                        </PrivateRoute>
                    )
                },
                {
                    path: '/register',
                    element: (
                        <PublicRoute>
                            <Register />
                        </PublicRoute>
                    )
                },
                {
                    path: '/login',
                    element: (
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    )
                },
                {
                    path: '/forgotpassword',
                    element: (
                        <PublicRoute>
                            <ForgotPassword />
                        </PublicRoute>
                    )
                },
                {
                    path: '*',
                    element: <div>Page not found</div>
                }
            ]
        },
        {
            path: '*',
            element: <div>Page not found</div>
        }
    ]);

    return (
        <div className="container mx-auto">
            <RouterProvider router={router} />
        </div>
    );
}
