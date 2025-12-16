import { createBrowserRouter, Navigate } from 'react-router-dom';


import {HomePage} from "../../pages/HomePage.tsx";
import {AppLayout} from "../../widgets/app-shell/AppLayout.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: '*', element: <Navigate to="/" replace /> },
        ],
    },
]);