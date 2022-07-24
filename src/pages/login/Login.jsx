import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../redux/features/authSlice';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(login({ formValue, navigate, toast }));
    }
  };

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center inline-block text-2xl">
            Login
          </h2>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Your Email"
                className="input w-full max-w-xs"
                value={email}
                name="email"
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mt-4">
              <input
                type="password"
                placeholder="Your Password"
                className="input w-full max-w-xs"
                value={password}
                name="password"
                onChange={onInputChange}
                required
              />
            </div>
            {loading ? (
              <button className="btn loading btn-primary mt-4 w-full">
                loading
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-active btn-primary mt-4 w-full cursor-pointer"
              >
                Login
              </button>
            )}

            {error && <p className="mt-4 text-error">{error}</p>}
            <p className="mt-4">
              Don't have an accoutn?{' '}
              <Link to="/register" className="text-primary">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
