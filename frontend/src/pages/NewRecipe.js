import { useState } from "react";
import { useDispatch } from "react-redux";
import { createRecipe } from "../actions/recipeAction";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const NewRecipe = () => {
  const [inputData, setInputData] = useState({
    recipeName: "",
    ingredients: "",
    process: "",
    recipeImg: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { recipeName, ingredients, process } = inputData;

  const onChange = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const imageUpload = (e) => {
    setInputData((prevData) => ({
      ...prevData,
      recipeImg: e.target.files[0],
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("myFile", inputData.recipeImg, inputData.recipeImg.name);
    formData.append("recipeName", inputData.recipeName);
    formData.append("ingredients", inputData.ingredients);
    formData.append("process", inputData.process);

    dispatch(createRecipe(formData));
    dispatch(navigate("/dashboard"));
  };

  return (
    <>
      <Button url={"/dashboard"} />
      <div className='form'>
        <form className='form-container' onSubmit={onSubmit}>
          <h1 className='form-header'>Add Recipe</h1>

          <div className='form-group'>
            <input
              type='text'
              placeholder='Enter Recipe Name'
              name='recipeName'
              value={recipeName}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Enter Ingredients'
              name='ingredients'
              value={ingredients}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <textarea
              type='text'
              placeholder='Process'
              name='process'
              value={process}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group form-file'>
            <label>Upload Image :</label>
            <br />
            <input
              className='input-file'
              type='file'
              placeholder='Process'
              name='myFile'
              onChange={imageUpload}
            />
          </div>

          <div className='form-group'>
            <button className='btn'>Add Recipe</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewRecipe;
