import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import ModalScreen from './screens/ModalScreen';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <Navigation />
          <ModalScreen />
          <StatusBar />
        </Provider>
      </SafeAreaProvider>
    );
  }
}
