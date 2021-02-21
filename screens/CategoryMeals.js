import React from 'react';
import { View, StyleSheet } from 'react-native';
// because this is a functional component we use "useSelector" instead of mapStateToProps, dispatchToProps
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import MealList from '../components/MealList';


const CategoryMeals = props => {

    const category = props.navigation.getParam('category');

    // "meals" prop is available since we declared it in rootReaducer at App.js
    const availableMeals = useSelector(state => state.meals.filteredMeals);


    const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(category.id) >= 0);

    if (displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>No meals found, maybe check your filters?</DefaultText>
            </View>
        );
    }

    return (
        <MealList 
            listData={displayedMeals}
            navigation={props.navigation}
        />
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMeals;

CategoryMeals.navigationOptions = navigationData => {
    const category = navigationData.navigation.getParam('category');
    return {
        headerTitle: category.title
    }
}
