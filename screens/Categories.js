import React from 'react';
import { Button, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';


const Categories = (props) => {
    const handleCategorySelected = (itemData) => {
        props.navigation.navigate('CategoryMeals', {category: itemData.item})
    };

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                onSelect={handleCategorySelected.bind(this, itemData)} 
                color={itemData.item.color}
            />
        );
    };

    return (
        <FlatList 
            keyExtractor={(item, index) => item.id} 
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2} 
        />
    );
};

// "navigationOptions" could be a function that returns an object. See "CategoryMeals.js"
Categories.navigationOptions = {
    headerTitle: 'Meal Categories',    
}

export default Categories;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    // gridItem: {
    //     flex: 1,
    //     margin: 15,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     height: 150,
    //     paddingVertical: 10
    // },
    // categoryTitle: {
    //     fontSize: 20
    // }
});
