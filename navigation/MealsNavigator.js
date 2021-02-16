
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetail from '../screens/MealDetail';
import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import Favorites from '../screens/Favorites';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Filters from '../screens/Filters';

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const MealsNavigator = createStackNavigator(
    {
        // screens to navigate through
        // all these components will receive special props from createStackNavigator
        Categories: Categories,
        MealDetail: MealDetail,
        // alternative way, here we can specified some features (cover later)
        CategoryMeals: {
            screen: CategoryMeals
        },
    }, 
    {
        // 'navigationOptions' keys setting on screen will override these configuration
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const FavNavigator = createStackNavigator(
    {
        Favorites: Favorites,
        MealDetail: MealDetail
    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator, 
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primary
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.secondary
            // tabBarLabel: 'Favorites! prro'
        }
    }
};

const MealsFavTabNavigator = 
    Platform.OS === 'android' 
        ? createMaterialBottomTabNavigator(
            tabScreenConfig,
            {
                activeColor: 'white',
                shifting: true
            }
        ) 
        : createBottomTabNavigator(
            tabScreenConfig,
            {
                tabBarOptions: {
                    activeTintColor: Colors.secondary
                }
            }
);

const FiltersNavigator = createStackNavigator({
    Filters: Filters
});

const MainNavigator = createDrawerNavigator({
    MealsFav: MealsFavTabNavigator,
    Filters: FiltersNavigator
});

export default createAppContainer(MainNavigator);
