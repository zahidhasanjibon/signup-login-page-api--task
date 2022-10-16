import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Main from './components/Main';

export default function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main />,
            children: [
                {
                    path: '/register',
                    element: <Form />
                },
                {
                    path: '/login',
                    element: <Login />
                }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}
