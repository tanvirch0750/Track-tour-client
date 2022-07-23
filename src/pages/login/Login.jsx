import { useState } from 'react';
import { Link } from 'react-router-dom';

const initialState = {
  email: '',
  password: '',
};

const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <button
              type="submit"
              className="btn btn-active btn-primary mt-4 w-full cursor-pointer"
            >
              Login
            </button>
            <p className="mt-4">
              Don't have an accoutn?{' '}
              <Link to="/Register" className="text-primary">
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
