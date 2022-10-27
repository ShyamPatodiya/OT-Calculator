import { Component, OnInit } from '@angular/core';
import { TimeLogsDetailsService } from 'src/app/services/time-logs-details.service';

@Component({
  selector: 'app-time-logs-table',
  templateUrl: './time-logs-table.component.html',
  styleUrls: ['./time-logs-table.component.css'],
})
export class TimeLogsTableComponent implements OnInit {
  timeLogsData: any[] = [];

  constructor(private timeLogsService: TimeLogsDetailsService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.timeLogsData = this.timeLogsService.postData;
  }
}
