import {Component} from '@angular/core';

@Component({
  selector: 'app-primo-componente',
  template: `
    <app-secondo-componente (secondoComponenteValue)="onSecondoComponenteValueChange($event)"></app-secondo-componente>
  `,
  styles: [``]
})
export class PrimoComponenteComponent {

  onSecondoComponenteValueChange($event: number) {
    console.log($event);
  }
}
