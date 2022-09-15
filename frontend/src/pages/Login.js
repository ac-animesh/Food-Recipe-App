import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, reset } from "../actions/authAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import Spinner from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, message, isError, isSuccess } = useSelector(
    (state) => state.auth
  );

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(loginUser(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }
    if (isSuccess && user) {
      navigate("/dashboard");
      dispatch(reset());
    }
  }, [dispatch, isError, isSuccess, message, navigate, user]);

  return (
    <div className='form'>
      <form className='form-container' onSubmit={onSubmit}>
        <h1 className='form-header'>Login</h1>

        <div className='form-group'>
          <input
            type='email'
            placeholder='Enter your email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Enter your password'
            name='password'
            value={password}
            onChange={onChange}
            required
          />
        </div>

        <div className='form-group'>
          <button className='btn'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
