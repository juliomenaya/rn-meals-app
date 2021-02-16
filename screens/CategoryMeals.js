import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoryMeals = props => {

    const category = props.navigation.getParam('category');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(category.id) >= 0)

    return (
        <MealList 
            listData={displayedMeals}
            navigation={props.navigation}
        />
    );
};

export default CategoryMeals;

CategoryMeals.navigationOptions = navigationData => {
    const category = navigationData.navigation.getParam('category');
    return {
        headerTitle: category.title
    }
}
