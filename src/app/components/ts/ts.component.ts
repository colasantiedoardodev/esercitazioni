import { Component } from '@angular/core';

@Component({
  selector: 'app-ts',
  template: ` <p>ts works!</p> `,
  styles: [],
})
export class TsComponent {
  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  constructor() {
    this.forEach();
    this.forOf();
  }

  /**
   * Entrambi i for vanno a fare un console.log del numero ciclato,
   * ed entrambi hanno un return se il valore di num è uguale a 4
   * ma uno dei due solo uscirà, quale dei due?
   */

  forEach(): void {
    this.numbers.forEach((num) => {
      console.log(num);
      if (num === 4) {
        return;
      }
    });
  }

  forOf(): void {
    for (const num of this.numbers) {
      console.log(num);
      if (num === 4) {
        return;
      }
    }
  }
}
