import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../../redux/features/authSlice';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password, firstName, lastName, confirmPassword } = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => ({ ...state.auth }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error('Password should match');
    }
    if (email && password && firstName && lastName && confirmPassword) {
      dispatch(register({ formValue, navigate, toast }));
    } else {
      toast.error('Pleae provide valid credentials');
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
            Registration
          </h2>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Your First Name"
                className="input w-full max-w-xs"
                value={firstName}
                name="firstName"
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Your Last Name"
                className="input w-full max-w-xs"
                value={lastName}
                name="lastName"
                onChange={onInputChange}
                required
              />
            </div>
            <div className="mt-4">
              <input
                type="email"
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
            <div className="mt-4">
              <input
                type="password"
                placeholder="Confirm Password"
                className="input w-full max-w-xs"
                value={confirmPassword}
                name="confirmPassword"
                onChange={onInputChange}
                required
              />
            </div>
            {loading ? (
              <button class="btn loading btn-primary mt-4 w-full">
                loading
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-active btn-primary mt-4 w-full cursor-pointer"
              >
                Register
              </button>
            )}

            {error && <p className="mt-4 text-error">{error}</p>}
            <p className="mt-4">
              Already have an accoutn?{' '}
              <Link to="/login" className="text-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
