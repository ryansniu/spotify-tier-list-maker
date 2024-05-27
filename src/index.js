import ReactDOM from 'react-dom';
import AudioWrapper from './tierlist/AudioWrapper';
import { AudioProvider } from './tierlist/AudioProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sidebar-styles.css';

ReactDOM.render(
  <AudioProvider>
    <AudioWrapper/>
  </AudioProvider>,
  document.getElementById('root')
);