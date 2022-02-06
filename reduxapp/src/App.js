import './style.css'
import Phonecomponent from './components/PhoneContainer';
import Juicecomponent from './components/Juicecomponent';
import { store } from './redux/store';
import {Provider} from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <div className="section-one">
    <Phonecomponent/>
    <Juicecomponent/>
    </div>
    </Provider>
  );
}

export default App;
