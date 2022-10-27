import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { TimeLogsDetailsService } from '../services/time-logs-details.service';

@Component({
  selector: 'app-hrs-calculator',
  templateUrl: './hrs-calculator.component.html',
  styleUrls: ['./hrs-calculator.component.css'],
})
export class HrsCalculatorComponent implements OnInit {
  timeForm = this.fb.group({
    pInTime: new FormControl(null, Validators.required),
    pOutTime: new FormControl(null, Validators.required),
    workingHrs: new FormControl(9.5, Validators.required),
  });

  netWorkingHours: number | null = null;
  netWorkingMinutes: number | null = null;
  otHours: number | null = null;
  otMinutes: number | null = null;
  decimalOTHours: number | string = 0;
  constructor(
    private fb: FormBuilder,
    private timeLogsService: TimeLogsDetailsService
  ) {}

  ngOnInit(): void {}

  getHours() {
    const startTime = moment(this.timeForm.controls.pInTime.value, 'hh:mm');
    const endTime = moment(this.timeForm.controls.pOutTime.value, 'hh:mm');
    const duration = moment.duration(endTime.diff(startTime));
    const hours = Math.floor(duration.asHours());
    const minutes = duration.asMinutes() % 60;
    const overTime = duration.subtract(
      this.timeForm.controls.workingHrs.value || 0,
      'hours'
    );

    this.netWorkingHours = hours;
    this.netWorkingMinutes = minutes;
    this.otHours = overTime.get('hours');
    this.otMinutes = overTime.get('minutes');
    this.decimalOTHours = moment
      .duration(this.otHours + ':' + this.otMinutes)
      .asHours();
  }

  reset() {
    this.timeForm.reset({ workingHrs: 9.5 });
    this.netWorkingHours = null;
    this.netWorkingHours = null;
    this.netWorkingMinutes = null;
    this.otHours = null;
    this.otMinutes = null;
    this.decimalOTHours = 0;
  }

  submit() {
    this.getHours();

    let timeLogObj = {
      inTime: this.timeForm.value.pInTime,
      outTime: this.timeForm.value.pOutTime,
      otHrs: this.otHours,
      otMins: this.otMinutes,
      otHrsInDecimal: this.decimalOTHours,
    };
    console.log('timeLogObj =>', timeLogObj);
    this.timeLogsService.post(timeLogObj);
  }
}
