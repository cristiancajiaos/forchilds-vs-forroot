import { Counter2Service } from './../counter/counter2.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss'],
})
export class LazyComponent implements OnInit {
  constructor(public counter2Service: Counter2Service) {}

  ngOnInit(): void {}

  increaseCounter(): void {
    this.counter2Service.counter++;
  }
}
