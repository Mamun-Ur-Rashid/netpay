import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './layout/router/Router'
import AuthProvider from './pages/AuthProvider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RouterProvider router={router}>
        </RouterProvider>
      </React.StrictMode>
    </QueryClientProvider>
  </AuthProvider>,
)
