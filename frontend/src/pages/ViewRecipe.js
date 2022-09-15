import { useEffect } from "react";
import { getRecipe } from "../actions/recipeAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import Button from "../components/Button";
// import { loadUser } from "../actions/authAction";

const ViewRecipe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { recipe, isloading } = useSelector((state) => state.recipe);

  useEffect(() => {
    dispatch(getRecipe(id));
  }, [dispatch, id]);

  if (isloading) {
    return <Spinner />;
  }

  return (
    <>
      {Object.keys(recipe).length > 0 && (
        <>
          <Button url={"/dashboard"} />
          <div className='recipe'>
            <div className='recipe-heading'>
              <h1>{recipe.recipeName}</h1>
            </div>
            <div className='recipe-img'>
              <img src={require(`../img/${recipe.img}`)} alt='recipe' />
            </div>
            <div className='recipe-ingredients'>
              <h1>Ingredients</h1>
              <p>{recipe.ingredients}</p>
            </div>
            <div className='recipe-process'>
              <h1>Process</h1>
              <p>{recipe.process}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ViewRecipe;
