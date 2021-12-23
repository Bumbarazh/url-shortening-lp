import { Component, OnInit } from '@angular/core';
import {GetShortUrlService} from "../../services/get-short-url.service";
import {ShortUrlModel} from "../../models/short-url-model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  genShortUrl: ShortUrlModel = <ShortUrlModel>{};

  constructor(private getUrlService: GetShortUrlService) { }

  ngOnInit(): void {
  }

  getUrl(url: string) {
    this.getUrlService.generateShortUrl(url).subscribe(shortUrl => {
      console.log(shortUrl)
      this.genShortUrl = shortUrl;
    })
  }
}
