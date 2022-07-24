import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setLogout } from '../../redux/features/authSlice';

const Navbar = ({ children }) => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(setLogout());
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-200 py-5">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <Link to="/">
              <h1 className="font-bold text-3xl text-primary">
                Track<span className="text-secondary">Tour</span>
              </h1>
            </Link>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              <li>
                <Link to="/" className="hover:rounded-lg">
                  Home
                </Link>
              </li>
              {user?.result?._id && (
                <li>
                  <Link to="/addTour" className="hover:rounded-lg">
                    Add Tour
                  </Link>
                </li>
              )}
              {user?.result?._id && (
                <li>
                  <Link to="/myTour" className="hover:rounded-lg">
                    My Tour
                  </Link>
                </li>
              )}

              {user?.result?._id && (
                <li className="bg-primary rounded-lg ml-6">
                  <span>{user?.result?.name}</span>
                </li>
              )}

              {user?.result?._id ? (
                <li
                  className="bg-secondary rounded-lg ml-6"
                  onClick={handleLogout}
                >
                  <Link to="/login">Logout</Link>
                </li>
              ) : (
                <li>
                  <Link className="bg-secondary rounded-lg ml-6" to="/login">
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <Link to="/">Home</Link>
          </li>
          {user?.result?._id && (
            <li>
              <Link to="/addTour">Add Tour</Link>
            </li>
          )}
          {user?.result?._id && (
            <li>
              <Link to="/myTour">My Tour</Link>
            </li>
          )}

          {user?.result?._id && (
            <li className="bg-primary rounded-lg mt-6">
              <span>{user?.result?.name}</span>
            </li>
          )}

          {user?.result?._id ? (
            <li className="bg-secondary rounded-lg mt-6" onClick={handleLogout}>
              <Link to="/login">Logout</Link>
            </li>
          ) : (
            <li>
              <Link className="bg-secondary rounded-lg mt-6" to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
