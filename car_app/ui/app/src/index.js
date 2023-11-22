import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './components/Router';
import "./assets/styles/global.css";
import AuthProvider from './providers/AuthProvider';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Layout from './components/Layout';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Layout>
        <Router />
      </Layout>
    </AuthProvider>
  </QueryClientProvider>
);