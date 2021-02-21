import React from 'react';
// because this is a functional component we use "useSelector" instead of mapStateToProps, dispatchToProps
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';


const CategoryMeals = props => {

    const category = props.navigation.getParam('category');

    // "meals" prop is available since we declared it in rootReaducer at App.js
    const availableMeals = useSelector(state => state.meals.filteredMeals);


    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(category.id) >= 0)

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
