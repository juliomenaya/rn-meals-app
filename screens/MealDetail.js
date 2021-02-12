import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MealDetail = () => {
    return (
        <View style={styles.screen}>
            <Text>Meal detail screen</Text>
        </View>
    );
};

export default MealDetail;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
