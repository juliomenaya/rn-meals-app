import React from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';


const CategoryMeals = props => {

    const category = props.navigation.getParam('category');

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(category.id) >= 0)

    const goToMealDetail = (meal) => {
        props.navigation.navigate('MealDetail', { 'meal': meal });
    };

    const renderMealItem = itemData => {
        return (
            <MealItem 
                title={itemData.item.title}
                duration={itemData.item.duration}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                image={itemData.item.imageUrl}
                onSelectMeal={goToMealDetail.bind(this, itemData.item)}
            />
        )
    };



    return (
        <View style={styles.screen}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item, index) => item.id} 
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>
    );
};

export default CategoryMeals;

CategoryMeals.navigationOptions = navigationData => {
    const category = navigationData.navigation.getParam('category');
    return {
        headerTitle: category.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10

    }
});
