import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const CategoryMeals = props => {

    const goToMealDetail = () => {
        props.navigation.navigate('MealDetail');
    };

    return (
        <View style={styles.screen}>
            <Text>The category meal screen</Text>
            <Button title='Give me details!' onPress={goToMealDetail} />
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
