import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/Private-Route/PrivateRoute';
import AddEditTour from './pages/add-edit-tour/AddEditTour';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import MyTour from './pages/myTour/MyTour';
import NotFound from './pages/not-found/NotFound';
import Register from './pages/register/Register';
import SingleTour from './pages/single-tour/SingleTour';
import Tours from './pages/tours/Tours';
import { setUser } from './redux/features/authSlice';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(setUser(user));
  }, []);

  return (
    <>
      <ToastContainer />
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tours" element={<Tours />}></Route>
          <Route
            path="/addTour"
            element={
              <PrivateRoute>
                <AddEditTour />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/myTour"
            element={
              <PrivateRoute>
                <MyTour />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/tour/:id" element={<SingleTour />}></Route>
          <Route
            path="/editTour/:id"
            element={
              <PrivateRoute>
                <AddEditTour />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Navbar>
    </>
  );
}

export default App;
