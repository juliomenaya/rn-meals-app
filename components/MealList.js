import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from './MealItem';

const MealList = props => {
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
