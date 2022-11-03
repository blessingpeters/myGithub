import React from 'react';
import { ErrorBoundary } from 'react-error-boundary'
//IMPORTANT: The ErrorBoundary component must be placed at the top of the component tree. If you place it in the middle of the tree, it will not catch errors from its children.
import ErrorFallback from "../components/ErrorFallback";
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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div className='repo-page'>
                <div className='repo'>
                    <h1>Test for Error Boundary</h1>
                    <p>Click the button below to throw an error</p>
                    <div className='flex'>
                        <button className="repo-items" onClick={() => { 
                            throw new Error('Error thrown from button click') 
                            }}>Throw error
                        </button> 
                        <button className="repo-items" onClick={goBack}>Back</button>
                    </div>


                   
                </div>


                
            </div>
        </ErrorBoundary>
    )
}
export default ErrorTest