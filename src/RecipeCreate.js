import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

///////////// ZW CODE BELOW ///////////////

// Should display the form to create a new recipe post.
// When the form is submitted, a new post is created and the form
// contents are cleared.

const initialFormState = {
  name: "",
  cuisine: "",
  photo: "",
  ingredients: "",
  preparation: "",
}

const [formData, setFormData] = useState({ ...initialFormState });
const handleChange = ({ target }) => {
  setFormData({
    ...formData,
    [target.name]: target.value,
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(formData.name, formData.cuisine, formData.photo, formData.ingredients, formData.preparation);
  createRecipe(formData)
  setFormData({ ...initialFormState });
};
//<input name="name">, <input name="cuisine">, <input name="photo">, <textarea name="ingredients"> and <textarea name="preparation">.
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                required={true}
                onChange={handleChange}
                value={formData.name}/>
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                required={true}
                onChange={handleChange}
                value={formData.cuisine}/>
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                // required={true}
                onChange={handleChange}
                value={formData.photo}/>
            </td>
            <td>
              <textarea
                id="ingredients"
                // type="text"
                name="ingredients"
                required={true}
                onChange={handleChange}
                value={formData.ingredients}/>
            </td>
            <td>
              <textarea
                id="preparation"
                // type="text"
                name="preparation"
                required={true}
                onChange={handleChange}
                value={formData.preparation}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
