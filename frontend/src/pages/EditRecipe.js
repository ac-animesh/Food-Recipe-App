import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe, updateRecipe } from "../actions/recipeAction";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Spinner from "../components/Spinner";

const EditRecipe = () => {
  const [formData, setFormData] = useState({
    recipeName: "",
    ingredients: "",
    process: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { recipe, isLoading } = useSelector((state) => state.recipe);

  const { recipeName, ingredients, process } = formData;

  useEffect(() => {
    dispatch(getRecipe(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (recipe) {
      setFormData({ ...recipe });
    }
  }, [recipe]);

  const onChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updateRecipe(formData, id));
    dispatch(navigate("/dashboard"));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Button url={"/dashboard"} />
      <div className='form'>
        <form className='form-container' onSubmit={onSubmit}>
          <h1 className='form-header'>Edit Recipe</h1>

          <div className='form-group'>
            <input
              type='text'
              placeholder='Enter Recipe Name'
              name='recipeName'
              value={recipeName || ""}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Enter Ingredients'
              name='ingredients'
              value={ingredients || ""}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Process'
              name='process'
              value={process || ""}
              onChange={onChange}
              required
            />
          </div>

          <div className='form-group'>
            <button className='btn'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditRecipe;
