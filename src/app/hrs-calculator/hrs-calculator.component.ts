import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';

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
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  getHours() {
    const startTime = moment(this.timeForm.controls.pInTime.value, 'hh:mm');
    const endTime = moment(this.timeForm.controls.pOutTime.value, 'hh:mm');
    const duration = moment.duration(endTime.diff(startTime));
    const hours = Math.floor(duration.asHours());
    const minutes = duration.asMinutes() % 60;
    let inp = moment(
      (hours == 0 ? '00' : hours < 10 ? '0' + hours : hours) +
        ':' +
        (minutes == 0 ? '00' : minutes < 10 ? '0' + minutes : minutes),
      'hh:mm'
    );
    const overTime = duration.subtract(9.5, 'hours');
    console.log('overTime > hrs =>', overTime.get('hours'));
    console.log('overTime > mins =>', overTime.get('minutes'));

    this.netWorkingHours = hours;
    this.netWorkingMinutes = minutes;
  }

  reset() {
    this.timeForm.reset({ workingHrs: 9.5 });
    this.netWorkingHours = null;
  }
}
