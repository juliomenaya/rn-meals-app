import React from 'react';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { View, Text, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';


const Favorites = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals found >:v</DefaultText>
            </View>
        )
    }

    return (
        <MealList 
            listData={favMeals}
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

