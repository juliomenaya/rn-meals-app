import React from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';


const CategoryMeals = props => {

    const category = props.navigation.getParam('category');
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(category.id) >= 0)
    const renderMealItem = itemData => {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        )
    };


    const goToMealDetail = () => {
        props.navigation.navigate('MealDetail');
    };

    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem}/>
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
        alignItems: 'center'
    }
});
