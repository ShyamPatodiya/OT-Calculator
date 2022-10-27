import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeLogsDetailsService {
  postData: any = [];
  constructor() {}

  post(data: any) {
    this.postData.push(data);
  }
}
