import { Component, OnInit  } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    this.meta.addTags([
      { charset: 'UTF-8' },
      { name: 'author', content: 'Benjamin Hera' },
      { name: 'date', content: '2021-09-20', scheme: 'YYYY-MM-DD' },
      { name: 'robots', content: 'index, follow' },
    ]);
    let i18nTitle = $localize`:@@title:Angular playground`;
    this.title.setTitle(i18nTitle);
  }
}
