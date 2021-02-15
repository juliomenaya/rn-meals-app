import React from 'react';
import { StyleSheet, Text, View, Platform, TouchableNativeFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp onPress={props.onSelect} style={{flex: 1}}>
                <View style={{ ...styles.container, backgroundColor: props.color }}>
                    <Text style={styles.categoryTitle}>{props.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    categoryTitle: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
        textAlign: 'right'
    }
});
