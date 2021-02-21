import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const Favorites = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    return (
        <MealList 
            listData={favMeals}
            navigation={props.navigation}
        />
    );
};

Favorites.navigationOptions = (navData) => {
    return ({
        headerTitle: 'My favorites!',
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
    });
};

export default Favorites;

