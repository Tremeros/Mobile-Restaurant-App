import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigationOptions = {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restaurant Search',
  },
  // cardStyle: {
  //   backgroundColor: '#000000',
  // }
}

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, navigationOptions
 );

export default createAppContainer(navigator);