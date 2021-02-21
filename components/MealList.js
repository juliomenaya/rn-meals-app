import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from './MealItem';
import { useSelector } from 'react-redux';

const MealList = props => {

    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    
    const renderMealItem = itemData => {
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.id);

        return (
            <MealItem 
                title={itemData.item.title}
                duration={itemData.item.duration}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate('MealDetail', { 'meal': itemData.item, 'isFav': isFavorite})
                }}
            />
        );
    };

    return (
        <View style={styles.list}>
            <FlatList 
                data={props.listData} 
                keyExtractor={(item, index) => item.id} 
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>
    );
};

export default MealList;

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10

    }
});
