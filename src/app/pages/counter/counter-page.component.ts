import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styles: `
    button{
      padding: 5px;
      margin: 5px 10px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  counterSignal = signal(10);

  increaseBy(value: number) {
    this.counterSignal.update((current) => current + value);
  }

  resetCounter() {
    this.counterSignal.set(10);
  }
}
