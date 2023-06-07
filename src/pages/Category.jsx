import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import MealList from '../components/MealList';
import Preloader from '../components/Preloader';
import { getFilteredCategory } from '../api';

export default function Category() {
  const [meals, setMeals] = useState([]);
  const { name } = useParams();
  const goBack = useNavigate();

  // Effect to load meals in the category
  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      <h1>{name}</h1>
      {!meals.length ? <Preloader /> : <MealList name={name} meals={meals} />}
      <button className='btn' onClick={() => goBack(-1)}>
        Go back
      </button>
    </>
  );
}
