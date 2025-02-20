import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-lifecicle',
  templateUrl: './lifecicle.component.html',
  styleUrls: ['./lifecicle.component.scss'],
})
export class LifecicleComponent implements OnInit, OnChanges {
  @Input() inputValue: number | undefined; // presuponiamo che in input arrivi 4

  /** 
   * In quale dei tre console.log vedrò il valore di @inputValue ?
   */

  constructor() {
    console.log(this.inputValue);
  }

  ngOnInit(): void {
    console.log(this.inputValue);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.inputValue);
  }
}
