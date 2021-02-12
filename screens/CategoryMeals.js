import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

const CategoryMeals = () => {
    return (
        <View style={styles.screen}>
            <Text>The category meal screen</Text>
        </View>
    );
};

export default CategoryMeals;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
