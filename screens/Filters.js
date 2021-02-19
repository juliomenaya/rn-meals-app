import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch 
                trackColor={{true: Colors.primary}}
                thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
                value={props.state} 
                onValueChange={props.onChange}
            />
        </View>
    )
};

const Filters = (props) => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <Text style={styles.tile}>Available filters</Text>
            <FilterSwitch label={'Gluten-Free'} state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />
            <FilterSwitch label={'Is Vegan'} state={isVegan} onChange={newValue => setIsVegan(newValue)} />
            <FilterSwitch label={'Is Vegetarian'} state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />
            <FilterSwitch label={'Is Lactose-Free'} state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />
        </View>
    );
};

Filters.navigationOptions = (navData) => {
    return ({
        headerTitle: 'Filter meals!',
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
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item 
                        title='Save'
                        iconName='ios-save'
                        onPress={navData.navigation.getParam('save')}
                    />
                </HeaderButtons>
            );
        }
    });
};

export default Filters;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        margin: 20,
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});
