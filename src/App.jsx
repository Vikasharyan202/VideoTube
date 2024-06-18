
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {

  return (
      <Provider store={store}>
        <div className='flex flex-col gap-4'>
          <Header />
          <Body />
        </div>       
      </Provider>
  )
}

export default App
