# rn-meals-app
Basic app to understand navigation between screens and redux state handling in react native

In this app I learned to use different navigators like stack, botton, drawer and how to combine them in one main navigator.

The stack navigator was used to implement the transitions between Categories, MealCategory and MealDetail screens.

Botton navigator to reach Favorites and Categories screens and last but not less important, drawer navigator to interact with a Filters and Categories.

I also learned to pass down data between screens, set default styles and add buttons to trigger actions that represent changes from component to nav and vice versa.

The app state was ruled by Redux and their hooks-like functions as useDispatch and useSelector. With this, to give some examples, I was able to apply the user filters in the Categories screen or to add favorites meals.

useEffect and useCallback gave me the neccesary knowledge to optimize and avoid render cycles in the app.
