import './index.css';
import * as serviceWorker from './serviceWorker';

import {store} from './redux/state'
import {render} from './render';

store.subscribe(render)
render()




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
