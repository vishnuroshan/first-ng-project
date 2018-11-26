import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-ng-project';

  public cards: Array<any> = [];

  constructor() {
  }

  addCard(cardText) {
    console.log(cardText);
    this.cards.push({ text: cardText.text });

  }
}
