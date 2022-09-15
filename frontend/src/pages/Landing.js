import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes } from "../actions/recipeAction";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { loadUser } from "../actions/authAction";
import Spinner from "../components/Spinner";

const Landing = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const { recipes, isLoading } = useSelector((state) => state.recipe);
  const { isAdmin } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(loadUser());
    dispatch(getAllRecipes());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='search'>
        <form className='form-search'>
          <input
            type='text'
            placeholder='Search Recipes'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          ></input>
        </form>
      </section>

      <div className='grid'>
        {recipes
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.recipeName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              console.log(val);
              return val;
            }
          })
          .map((val) => (
            <Card key={val._id} recip={val} />
          ))}

        {/* {recipes.map()} */}
      </div>

      {isAdmin && (
        <Link to='/newRecipe'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='add-icon icon'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </Link>
      )}
    </>
  );
};

export default Landing;
