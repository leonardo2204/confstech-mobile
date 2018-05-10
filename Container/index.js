import { Navigation } from 'react-native-navigation';

import RootContainer from './RootContainer'
import FilterContainer from './FilterContainer/FilterContainer'

export default registerScreens = () => {
    Navigation.registerComponent('confstech.root', () => RootContainer),
    Navigation.registerComponent('confstech.filter', () => FilterContainer)
}