import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Favorites = () => {
    return (
        <View style={styles.screen}>
            <Text>Favorites prro</Text>
        </View>
    );
};

export default Favorites;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
