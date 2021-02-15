import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const MealDetail = props => {
    const selectedMeal = props.navigation.getParam('meal');;
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
};

MealDetail.navigationOptions = navigationData => {
    const selectedMeal = navigationData.navigation.getParam('meal');
    return {
        headerTitle: selectedMeal.title
    };
};

export default MealDetail;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
