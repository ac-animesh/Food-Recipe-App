import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, reset } from "../actions/authAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { message, isError, isSuccess } = useSelector((state) => state.auth);

  const { name, email, password, cpassword } = formData;

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === cpassword) {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(registerUser(userData));
      navigate("/login");
    } else {
      toast.error("Password is not matching");
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message.message);
      dispatch(reset());
    }
  }, [message, isError, isSuccess, dispatch]);

  return (
    <div className='form'>
      <form className='form-container' onSubmit={onSubmit}>
        <h1 className='form-header'>Sign-Up</h1>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Enter your name'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
        </div>
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
          <input
            type='password'
            placeholder='Confirm password'
            name='cpassword'
            value={cpassword}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <button className='btn'>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
