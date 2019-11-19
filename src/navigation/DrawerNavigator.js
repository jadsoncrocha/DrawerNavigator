import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from '../HomeScreen';
import ProfileScreen from '../ProfileScreen';

const MainNavigator = createDrawerNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const AppContainer = createAppContainer(MainNavigator);

export default AppContainer;