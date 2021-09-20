import { Component, OnInit  } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';  
import { filter } from 'rxjs/operators';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private meta: Meta,
    private titleService: Title,
    private router: Router,  
    private activatedRoute: ActivatedRoute,  
  ) { }

  ngOnInit() {
    this.meta.addTags([
      { charset: 'UTF-8' },
      { name: 'author', content: 'Benjamin Hera' },
      { name: 'date', content: '2021-09-20', scheme: 'YYYY-MM-DD' },
      { name: 'robots', content: 'index, follow' },
    ]);
    
    this.router.events.pipe(  
      filter(event => event instanceof NavigationEnd),  
    ).subscribe(() => {  
      const rt = this.getChild(this.activatedRoute);  
      rt.data.subscribe((data: { title: string; }) => {  
        console.log(data);  
        this.titleService.setTitle(data.title)});  
    });  
  }

  getChild(activatedRoute: ActivatedRoute): any {  
    if (activatedRoute.firstChild) {  
      return this.getChild(activatedRoute.firstChild);  
    } else {  
      return activatedRoute;  
    }  
  
  } 
}
