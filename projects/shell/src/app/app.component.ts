import { Component, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(private renderer: Renderer2,  private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentUrl = this.router.url;

        if (currentUrl.includes('admin')) {
          this.loadAdminCss();
        } else if (currentUrl.includes('client')) {
          this.loadClientCss();;
        }
      }
    });
  }

  private loadAdminCss() {
    this.addCss('assets/admin.css');
  }

  private loadClientCss() {
    this.addCss('/assets/client.css');
  }

  private addCss(cssPath: string) {
    if (typeof document !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssPath;
      document.head.appendChild(link);
    }

  }
}
