import Meal from './Meal';

export default function MealList({ meals = [] }) {
  return (
    <>
      <div className='list'>
        {meals.map((meal) => (
          <Meal key={meal.idMeal} {...meal} />
        ))}
      </div>
    </>
  );
}
