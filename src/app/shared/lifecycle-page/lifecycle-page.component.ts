import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { LifecycleDemoComponent } from '@shared/lifecycle-demo/lifecycle-demo.component';

@Component({
  selector: 'app-lifecycle-page',
  templateUrl: './lifecycle-page.component.html',
  styleUrl: './lifecycle-page.component.scss',
  standalone: true,
  imports: [CommonModule, LifecycleDemoComponent],
})
export class LifecyclePageComponent implements OnInit, DoCheck, OnDestroy {
  inputText: string = 'Valor Inicial';
  showComponent: boolean = true;
  counter: number = 0;
  projectedContent: string = 'Mi variable que proyecto';
  constructor() {
    console.log('Constructor Page');
  }

  ngOnInit(): void {
    console.log('OnInit Page');
  }

  ngOnDestroy() {
    console.log('OnDestroy Page');
  }

  ngDoCheck() {
    console.log('DoCheck Page');
  }

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }

  updateInput() {
    this.inputText = `Valor: ${++this.counter}`;
    this.projectedContent = 'Cambio proyeccion';
  }
}
