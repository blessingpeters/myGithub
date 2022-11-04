import React from 'react';
import { ErrorBoundary } from 'react-error-boundary'
import ErrorFallback from "../components/ErrorFallback";
import Repos from "../components/Repos";
import { useNavigate } from "react-router-dom";

// function ErrorFallback({ error }) {
//     return (
//       <div role="alert">
//         <p>Something went wrong:</p>
//         <pre style={{ color: 'red' }}>{error.message}</pre>
//       </div>
//     )
// }

function ErrorTest (){
    const navigate = useNavigate()

    const goBack = (e)=>{
      e.preventDefault()
      navigate("/")
    }
    return (
    
        <div className='error-cont repo'>
            <h1>Test for Error Boundary</h1>

            <ErrorBoundary FallbackComponent={ErrorFallback}> 
                <Repos  /> 
            </ErrorBoundary>

            <button className="repo-items" onClick={goBack}>Back</button>
        </div>
    )
}
export default ErrorTest