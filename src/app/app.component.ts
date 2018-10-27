import {Component} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private apiService: ApiService) {
    this.apiService.getCurrentUserDetails().subscribe(response => {
      console.log(response);
    });

    this.apiService.listAllBoardsOfUser().subscribe(response => {
      console.log(response);
    });

    this.apiService.addAccounts('').subscribe(response => {
      console.log(response);
    });
  }
}
