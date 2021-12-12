import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownMenuService {

  constructor() { }

  showMobileMenu() {
    const menu = <HTMLDivElement>document.getElementById('menu');

    if(menu.style.display === 'none') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }
}
