import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./styles/global.css";
import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>

  </StrictMode>,
)
