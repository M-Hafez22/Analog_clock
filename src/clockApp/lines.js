import {lines, clock} from './config';

export const locatLines = () => {
  for (let i = 1; i < 60; i++) {
    if(!clock){
      throw new Error("Clock div not found");
    }
    clock.appendChild(document.createElement("span"));
    if(!clock.lastElementChild){
      throw new Error("Clock div not found");
    }
    clock.lastElementChild.classList.add('lines');
    lines[i].style.transform = "rotate(" + 6 *  i + "deg)";
  }
  
  for (let i =0; i< lines.length; i+=5){
    lines[i].classList.add('mainLine');
  }  
}