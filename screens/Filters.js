import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const Filters = () => {
    return (
        <View>
            <Text></Text>
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
        }
    });
};

export default Filters;

const styles = StyleSheet.create({});
