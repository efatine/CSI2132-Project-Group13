import { Navigate } from 'react-router-dom';
import { getAuthorization } from '../utils/Authorization';

function PrivateRoute({ component, ...rest }) {
    const isAuthenticated = getAuthorization(); // Get the user's login status, you can replace this with your actual logic
    const { auth } = rest; // Get the 'auth' attribute from 'rest'
    console.log(rest)
    // If no authentication is required, return the component directly
    if (!auth) {
        return component;
    }

    // If authentication is required, check if the user is logged in. If logged in, return the component, otherwise redirect to the login page
    return isAuthenticated ? component : <Navigate to="/login" />;
}

export default PrivateRoute;
