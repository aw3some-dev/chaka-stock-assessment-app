import { Component } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'picnic-products';

  loadingModule: boolean;

  constructor(private router: Router) {
    this.loadingModule = false;

    router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingModule = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingModule = false;
      }
    });
  }

}
