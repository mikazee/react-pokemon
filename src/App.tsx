import { RootNavigation } from './navigation'
import { Provider } from 'react-redux'
import { store } from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}
