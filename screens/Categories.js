import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


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
Categories.navigationOptions = (navData) => {
    return ({
        headerTitle: 'Meal Categories',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title='Menu'
                        iconName='ios-menu'
                        onPress={() => navData.navigation.toggleDrawer()}
                    />
                </HeaderButtons>
            );
        }
    })
};

export default Categories;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
