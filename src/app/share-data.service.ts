import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  sharedData: any;

  setSharedData(value: any) {
    this.sharedData = value;
  }

  getSharedData(): any {
    return this.sharedData;
  }
}


