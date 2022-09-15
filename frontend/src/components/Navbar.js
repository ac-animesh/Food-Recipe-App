import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../actions/authAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <nav className='navbar'>
      <div>
        <Link className='logo' to='/dashboard'>
          Recipes Journal
        </Link>
      </div>

      <ul className='nav-items'>
        {user ? (
          <li className='item'>
            <button onClick={onSubmit} className='btn'>
              Logout
            </button>
          </li>
        ) : (
          <>
            <li className='item'>
              <Link to='/login'>Login</Link>
            </li>
            <li className='item'>
              <Link to='/register'>Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
