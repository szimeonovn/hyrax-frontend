import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public navigateToLoginPage(): void {
    this.router.navigate(['/login']);
  }

  public navigateToWelcomePage(): void {
    this.router.navigate(['/']);
  }

  public navigateToReagisterPage(): void {
    this.router.navigate(['/register']);
  }
}
