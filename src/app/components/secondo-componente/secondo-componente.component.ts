import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-secondo-componente',
  template: `
    <app-terzo-componente (value)="onValueChange($event)"></app-terzo-componente>
  `,
  styles: ['']
})
export class SecondoComponenteComponent {
  @Output() secondoComponenteValue = new EventEmitter<number>();


  onValueChange($event: number) {
    this.secondoComponenteValue.emit($event);
  }
}
