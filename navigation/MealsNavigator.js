
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Categories from '../screens/Categories';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetail from '../screens/MealDetail';

const MealsNavigator = createStackNavigator({
    // screens to navigate through
    // all these components will receive special props from createStackNavigator
    Categories: Categories,
    MealDetail: MealDetail,
    // alternative way, here we can specified some features (cover later)
    CategoryMeals: {
        screen: CategoryMeals
    },
});

export default createAppContainer(MealsNavigator);
