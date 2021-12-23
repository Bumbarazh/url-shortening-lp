import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() url = new EventEmitter<string>();

  p = document.getElementById('error') as HTMLParagraphElement;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    if(!form.value.urlShort) {
      this.noUrl();
    } else {
      this.url.emit(form.value.urlShort);
    }
  }

  noUrl(): void {
    this.p.style.display = 'block';
  }

  onInputFocus() {
    if(this.p.style.display === 'block') this.p.style.display = 'none';
  }
}
