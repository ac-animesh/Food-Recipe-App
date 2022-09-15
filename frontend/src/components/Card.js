import { Link } from "react-router-dom";
import { deleteRecipe } from "../actions/recipeAction";
import { useDispatch, useSelector } from "react-redux";
import ViewButton from "../components/ViewButton";
const Card = ({ recip }) => {
  const dispatch = useDispatch();

  const { isAdmin } = useSelector((state) => state.auth);
  // const { recipe } = useSelector((state) => state.recipe);

  const deleteHandler = (id) => {
    dispatch(deleteRecipe({ id }));
  };

  return (
    <div>
      <div className='grid-item'>
        <div className='card'>
          <img
            className='card-img'
            src={require(`../img/${recip.img}`)}
            alt='recipe'
          />
          {isAdmin && (
            <>
              <Link to={`/editRecipe/${recip._id}`}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='edit-icon icon'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
                  />
                </svg>
              </Link>

              <svg
                onClick={() => {
                  deleteHandler(recip._id);
                }}
                xmlns='http://www.w3.org/2000/svg'
                className='delete-icon icon'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                />
              </svg>
            </>
          )}

          <div className='card-content'>
            <h1 className='card-header'>{recip.recipeName}</h1>
            <div className='view-btn'>
              <ViewButton url={`/viewRecipe/${recip._id}`} />
            </div>
            {/* <button className='card-btn'>
              <Link className='view-btn' to={`/viewRecipe/${recipe._id}`}>
                View
              </Link>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
