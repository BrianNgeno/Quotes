import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote(1, 'Start Early finish Early', 'Martin Luther', 'Mark Luke', 2, 7),
    new Quote(2, 'The mind is the greatest weapon against poverty', 'marvin Gavin', 'John Luther', 4, 9),
    new Quote(3, 'Never underestimate the power of Confidence', 'Lincon Martin', 'List King', 6, 8 ),
  ];

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    console.log(this.quotes[index].showDescription);
  }

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote) {
      this.quotes.push(quote);

  }


  constructor() { }



  ngOnInit() {
  }
}
