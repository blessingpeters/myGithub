import React from 'react';
import { ErrorBoundary } from 'react-error-boundary'
//IMPORTANT: The ErrorBoundary component must be placed at the top of the component tree. If you place it in the middle of the tree, it will not catch errors from its children.
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
        
            <div className=''>
                <div className=''>
                    <h1>Test for Error Boundary</h1>
                    <p>Click the button below to throw an error</p>
                   <ErrorBoundary FallbackComponent={ErrorFallback}> <Repos  /> </ErrorBoundary>
                    <div className='flex'>
                         
                        <button className="repo-items" onClick={goBack}>Back</button>
                    </div>


                   
                </div>


                
            </div>
       
    )
}
export default ErrorTest