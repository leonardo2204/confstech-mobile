import Icon from 'react-native-vector-icons/MaterialIcons';

async function prepareIcons() {
  const icons = await Promise.all([
    Icon.getImageSource('filter-list', 30),
  ]);
  const [filter] = icons;
  return { filter };
}

// and then
async function startApp() {
  const icons = await prepareIcons();

  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Home',
        screen: HOME_SCREEN_NAME,
        icon: icons.home,

        title: 'Screen One',
      },
    ],
  });
}

// start the app
startApp();