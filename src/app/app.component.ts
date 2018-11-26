import { Component } from '@angular/core';
import { CardServiceService } from '../app/card-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-ng-project';

  public cards: Array<any> = [];

  constructor(private cardService: CardServiceService) {
    // cardService.get().subscribe((cards: any) => this.cards = cards);
  }

  addCard(cardText) {
    console.log(cardText);
    this.cards.push({ text: cardText.text });

  }
}
