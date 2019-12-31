import {runHands} from './clockApp/hands';
import {locatLines} from './clockApp/lines';
import {showDateInfo} from './clockApp/date';

import './styles/main.scss';
locatLines();
runHands();
showDateInfo();
