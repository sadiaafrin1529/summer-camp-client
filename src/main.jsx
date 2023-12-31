import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
 RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>

    
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <div className='container  mx-auto'>
        <RouterProvider router={router}></RouterProvider>
        </div>
      </QueryClientProvider>
      </AuthProvider>
   

  // </React.StrictMode>,
)
