import { Component, OnInit } from '@angular/core';
// to get current route/page/path 
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // go store current link/route/page/path clicked details
  currentUrl: string;
  
  constructor(private _router: Router) {
    // to highlight current path licked
    _router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  ngOnInit() {
  }

}
