import { CounterService } from './../counter/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eager',
  templateUrl: './eager.component.html',
  styleUrls: ['./eager.component.scss']
})
export class EagerComponent implements OnInit {

  constructor(
    public counterService: CounterService
  ) { }

  ngOnInit(): void {
  }

  increaseCounter(): void {
    this.counterService.counter++;
  }

}
