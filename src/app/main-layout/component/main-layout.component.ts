import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MainLayout } from '../main-layout';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  isMobile: boolean;
  opened: boolean;

  @Input() config: MainLayout;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe('(max-width: 599px)')
      .subscribe(breakpoint => {
        this.isMobile = breakpoint.matches;
        this.opened = !this.isMobile;
      });
  }

  ngOnInit() {
  }

  onToggleSidenav(): void {
    this.opened = !this.opened;
  }

  onCloseSidenavItem(): void {
    if (this.isMobile) {
      this.opened = !this.opened;
    }
  }

}
