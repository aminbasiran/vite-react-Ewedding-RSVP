import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Loading from './components/Loading.tsx'
import Error from './components/Error.tsx'


import App from './App.tsx'



import { ErrorBoundary } from "react-error-boundary";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<Error />}>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
    </ErrorBoundary>
  </StrictMode>,
)
