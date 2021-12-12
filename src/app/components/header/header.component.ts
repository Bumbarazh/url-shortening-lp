import { Component, OnInit } from '@angular/core';
import {DropdownMenuService} from "../../services/dropdown-menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dropDownMenu: DropdownMenuService) { }

  getMenu(): void {
    this.dropDownMenu.showMobileMenu();
  }

  ngOnInit(): void {
  }

}
