import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.scss']
})
export class CardInputComponent implements OnInit {
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCardAdd = new EventEmitter<string>();
  @HostListener('document:keypress', ['$event'])

  public newCard: any = { text: '' };
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.onCardAdd.emit(this.newCard);
  }

}
