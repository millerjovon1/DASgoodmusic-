import './style/style.css'

import _ from 'lodash-es';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join([''], ' ');

  return element;
}

document.body.appendChild(component());
