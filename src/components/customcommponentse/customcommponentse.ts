import { Component } from '@angular/core';

/**
 * Generated class for the CustomcommponentseComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'customcommponentse',
  templateUrl: 'customcommponentse.html'
})
export class CustomcommponentseComponent {

  text: string;

  constructor() {
    console.log('Hello CustomcommponentseComponent Component');
    this.text = 'Hello World';
  }

}
