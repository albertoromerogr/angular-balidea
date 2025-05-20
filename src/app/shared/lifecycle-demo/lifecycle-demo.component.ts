import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  templateUrl: './lifecycle-demo.component.html',
  styleUrl: './lifecycle-demo.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class LifecycleDemoComponent
  implements
    OnInit,
    DoCheck,
    OnDestroy,
    OnChanges,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @Input() inputValue: string = '0';
  logs: string[] = [];

  constructor(private cd: ChangeDetectorRef) {
    console.log('Constructor demo');
  }

  // Solo se ejecutan 1 vez
  ngOnInit(): void {
    console.log('ngOnInit demo');
  }

  ngOnDestroy(): void {
    this.log('OnDestroy');
    console.log('ngOnDestroy demo');
  }

  //Varias ejecuciones (enfoque a componente)
  ngDoCheck(): void {
    console.log('Do Check demo');
  }

  // Enfocados a Vista
  ngAfterContentInit() {
    console.log('ngAfterContentInit demo');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked demo');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked demo');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit demo');
  }

  // Comodín enfocado al componente
  ngOnChanges(changes: SimpleChanges) {
    this.log('ngOnChange');
    console.log('ngOnChanges demo', changes);
  }

  // Logs

  log(msg: string) {
    const fullMsg = `[LifeCycle] ${msg}`;
    this.logs.push(fullMsg);
  }

  //Forzar ejecución de cambios
  triggerChanges() {
    this.cd.detectChanges();
    this.log('Forzando ejecución de cambios');
  }
}
