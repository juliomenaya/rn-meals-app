import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Categories = () => {
    return (
        <View style={styles.screen}>
            <Text>The categories screen</Text>
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
