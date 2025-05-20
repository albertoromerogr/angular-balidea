import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  /*
    Rxjs -> Signal
    Observable/Subject -> signal()
    myObservable.subscribe() -> mySignal()
    myObservable.next(value) -> mySignal.set(value)
    myObservable.subscribe({next}) -> effect()
    myObservable.pipe(transformed) -> newSignal = computed(() => transformed )
  */
  count = signal<number>(0);
  msg = signal<string>('Soy una signal');
  msgLen = computed(() => this.msg().length); //Dependiente de msg

  constructor() {
    effect(() => {
      console.log('Effect ejecutado');
    });

    //Sino pasamos valores se ejecuta en la carga
  }

  increment() {
    const valorActual = this.count();
    this.count.set(valorActual + 1);

    this.count.update((actualValue) => actualValue + 1);

    this.msg.set('Soy');
  }

  decrement() {
    this.count.update((actualValue) => actualValue - 1);
  }
}
