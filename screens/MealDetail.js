import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{props.children}</DefaultText>
        </View>
    );
};


const MealDetail = props => {
    const selectedMeal = props.navigation.getParam('meal');;
    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map((ingredient, idx) => {
                return (
                    <ListItem key={idx}>{ingredient}</ListItem>
                )
            })}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map((step, idx) => {
                return (
                    <ListItem key={idx}>{step}</ListItem>
                )
            })}
        </ScrollView>
    );
};

MealDetail.navigationOptions = navigationData => {
    const selectedMeal = navigationData.navigation.getParam('meal');
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='Favorite' iconName='ios-star' onPress={() => console.log('Marked as favorite')} />
                </HeaderButtons>
            )
        }
    };
};

export default MealDetail;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});
