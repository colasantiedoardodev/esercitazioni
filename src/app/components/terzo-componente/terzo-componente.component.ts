import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-terzo-componente',
  template: `
  app-terzo-componente
  `,
  styles: [``]
})
export class TerzoComponenteComponent implements OnInit {
  @Output() value = new EventEmitter<number>();

  ngOnInit() {
    this.value.emit(99)
  }
}
