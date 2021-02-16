import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoryMeals = props => {

    const category = props.navigation.getParam('category');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(category.id) >= 0)

    // const goToMealDetail = (meal) => {
    //     props.navigation.navigate('MealDetail', { 'meal': meal });
    // };

    return (
        <MealList 
            listData={displayedMeals}
            navigation={props.navigation}
        />
        // <View style={styles.screen}>
        //     <FlatList 
        //         data={displayedMeals} 
        //         keyExtractor={(item, index) => item.id} 
        //         renderItem={renderMealItem}
        //         style={{width: '100%'}}
        //     />
        // </View>
    );
};

export default CategoryMeals;

CategoryMeals.navigationOptions = navigationData => {
    const category = navigationData.navigation.getParam('category');
    return {
        headerTitle: category.title
    }
}
