
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetail from '../screens/MealDetail';
import { Platform, Text } from 'react-native';
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
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
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
            tabBarColor: Colors.primary,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
        }
    },
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.secondary,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites'
        }
    }
};

const MealsFavTabNavigator = 
    Platform.OS === 'android' 
        ? createMaterialBottomTabNavigator(
            tabScreenConfig,
            {
                activeColor: 'white',
                shifting: true,
                barStyle: {
                    backgroundColor: Colors.primary
                }
            }
        ) 
        : createBottomTabNavigator(
            tabScreenConfig,
            {
                tabBarOptions: {
                    activeTintColor: Colors.secondary,
                    labelStyle: {
                        fontFamily: 'open-sans-bold'
                    }
                }
            }
);

const FiltersNavigator = createStackNavigator(
    { Filters: Filters },
    { defaultNavigationOptions: defaultStackNavOptions }
);

const MainNavigator = createDrawerNavigator(
    {
        MealsFav: {
            screen: MealsFavTabNavigator,
            navigationOptions: {
                drawerLabel: 'Meals'
            }
        },
        Filters: FiltersNavigator
    },
    {
        contentOptions: {
            activeTintColor: Colors.primary,
            labelStyle: {
                fontFamily: 'open-sans-bold'
            }
        }
    }
);

export default createAppContainer(MainNavigator);
