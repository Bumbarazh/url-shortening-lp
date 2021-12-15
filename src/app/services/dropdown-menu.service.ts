import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownMenuService {

  constructor() { }

  showMobileMenu() {
    const menu = <HTMLDivElement>document.getElementById('menu');
    const button = <HTMLButtonElement>document.getElementById('menu-button');

    if(menu.style.display === 'none') {
      button.innerText = 'close';
      menu.style.display = 'block';
    } else {
      button.innerText = 'menu';
      menu.style.display = 'none';
    }
  }
}
