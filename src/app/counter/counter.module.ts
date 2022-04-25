import { Counter2Service } from './counter2.service';
import { CounterService } from './counter.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CounterModule {
  static forRoot(): ModuleWithProviders<CounterModule> {
    return {
      ngModule: CounterModule,
      providers: [{ provide: CounterService }],
    };
  }

  static forChild(): ModuleWithProviders<CounterModule> {
    return {
      ngModule: CounterModule,
      providers: [{ provide: Counter2Service }],
    };
  }
}
