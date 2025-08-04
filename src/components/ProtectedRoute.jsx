import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const user = getAuth().currentUser;

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
