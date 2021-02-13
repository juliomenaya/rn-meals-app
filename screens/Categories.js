import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Categories = (props) => {
    return (
        <View style={styles.screen}>
            <Text>The categories screen</Text>
            <Button title='Go to Meals!' onPress={() => {
                // props passed down by MealsNavigator component
                // we use navigate function to go to 'routeName' arg screen, in this case 'CategoryMeals'
                // 'routeName' args must be one of the object keys declared for 'createStackNavigator' in 'MealsNavigator'
                props.navigation.navigate({routeName: 'CategoryMeals'})
            }} />
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
