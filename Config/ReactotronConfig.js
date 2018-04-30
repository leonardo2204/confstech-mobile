import Config from '../Config/DebugConfig'
import Reactotron from 'reactotron-react-native'

if (Config.useReactotron) {
  Reactotron
    .configure({ name: 'Confs.Tech' })
    .useReactNative()
    .connect()

  // Let's clear Reactotron on every time we load the app
  Reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
  console.tron = Reactotron
}