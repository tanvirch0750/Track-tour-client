import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { setLogout } from '../../redux/features/authSlice';
import { searchTours } from '../../redux/features/tourSlice';
import Footer from '../Footer/Footer';

const Navbar = ({ children }) => {
  const [search, setSearch] = useState('');
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(setLogout());
  };

  console.log(search);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(searchTours(search));
      navigate(`/tours/search?searchQuery=${search}`);
      setSearch('');
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className={`w-full navbar bg-base-200 py-12`}>
            <div className="flex-1 px-2 mx-2">
              <Link to="/">
                <h1 className="font-bold text-3xl text-primary">
                  Track<span className="text-secondary">Tour</span>
                </h1>
              </Link>
              <form className="form-control ml-8" onSubmit={handleSubmit}>
                <div className="input-group justify-center">
                  <input
                    type="text"
                    placeholder="Search Tours"
                    className="input input-bordered"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <button className="btn btn-square" type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                <li>
                  <Link to="/" className="hover:rounded-lg">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/tours" className="hover:rounded-lg">
                    Tours
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
          </div>
          {children}
          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tours" className="hover:rounded-lg">
                Tours
              </Link>
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
                <span className="text-center inline-block">
                  {user?.result?.name}
                </span>
              </li>
            )}

            {user?.result?._id ? (
              <li
                className="bg-secondary rounded-lg mt-6"
                onClick={handleLogout}
              >
                <Link to="/login" className="text-center inline-block">
                  Logout
                </Link>
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
    </>
  );
};

export default Navbar;
