import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import InicioPage from "../pages/InicioPage";
import ProductosPage from "../pages/ProductosPage";
import KefirPage from "../pages/KefirPage";
import DudasPage from "../pages/DudasPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children:[
            {
                index:true,
                element: <InicioPage/>
            },
            {
                path: '/productos',
                element: <ProductosPage/>
            },
            {
                path: '/acerca-de-kefir',
                element: <KefirPage/>
            },
            {
                path: '/dudas',
                element: <DudasPage/>
            }
        ]
    }
])