import {lines, clock} from './config';

export const locatLines = () => {
  for (let i = 1; i < 60; i++) {
    clock.appendChild(document.createElement("span"));
    clock.lastElementChild.classList.add('lines');
    lines[i].style.transform = "rotate(" + 6 *  i + "deg)";
  }
  
  for (let i =0; i< lines.length; i+=5){
    lines[i].classList.add('mainLine');
  }  
}