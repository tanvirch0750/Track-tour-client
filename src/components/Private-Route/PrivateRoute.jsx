import { useSelector } from 'react-redux';
import LoadingToRedirect from '../Loading-to-Redirect/LoadingToRedirect';

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  return user ? children : <LoadingToRedirect />;
};

export default PrivateRoute;
