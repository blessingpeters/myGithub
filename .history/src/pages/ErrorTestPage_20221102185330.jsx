import React from 'react';
import { ErrorBoundary } from 'react-error-boundary'
// import ErrorFallback from "../components/ErrorFallback";

function ErrorFallback({ error }) {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: 'red' }}>{error.message}</pre>
      </div>
    )
  }

function ErrorTest (){
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div>
                <h1>Test for Error Boundary</h1>
                
            </div>
        </ErrorBoundary>
    )
}
export default ErrorTest