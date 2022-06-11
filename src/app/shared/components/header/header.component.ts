import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public routes = [
    { name: 'Product List', url: 'store' },
    { name: 'Cart', url: 'cart' }
  ];
  public activeLink!: string;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    this.route.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('URL:', event.url);
        if (event.url.includes('store') || event.url === '/') {
          this.activeLink = 'store';
        } else if (event.url.includes('cart')) {
          this.activeLink = 'cart';
        }
      }
    });
  }
}
