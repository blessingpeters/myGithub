import React from 'react';
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from "../components/ErrorFallback";
function ErrorBoundary (){
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div>
                <h1>Error Boundary</h1>
                <p>Click on the button below to throw an error</p>
                <button onClick={() => { throw new Error('Error thrown from the button') }}>Throw Error</button>
            </div>
        </ErrorBoundary>
    )
}
export default ErrorBoundary;