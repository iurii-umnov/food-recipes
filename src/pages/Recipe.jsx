import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Preloader from '../components/Preloader';
import { getMealById } from '../api';

export default function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const goBack = useNavigate();

  // Effect to load particular meal
  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className='recipe'>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>
            <b>Category</b>: {recipe.strCategory}
          </h6>
          {recipe.strArea ? (
            <h6>
              <b>Area</b>: {recipe.strArea}
            </h6>
          ) : null}
          <div style={{ textAlign: 'justify' }}>{recipe.strInstructions}</div>
          <table className='centered'>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div>
              <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
      <button className='btn' onClick={() => goBack(-1)}>
        Go back
      </button>
    </>
  );
}
