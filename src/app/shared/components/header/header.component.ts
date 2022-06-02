import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routes = [
    { name: 'Product List', url: 'store' },
    { name: 'Cart', url: 'cart' }
  ];
  activeLink = this.routes[0].url;

  constructor() { }

  ngOnInit(): void {
  }

}
