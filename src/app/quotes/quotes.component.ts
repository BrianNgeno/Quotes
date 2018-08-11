import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote('Start Early finish Early', 'By Martin Luther', new Date(2018, 9, 14)),
    new Quote('The mind is the greatest weapon against poverty', 'By marvin Gavin', new Date(2018, 4, 13)),
    new Quote('Never underestimate the power of Confidence', 'By Lincon Martin', new Date(2018, 5, 19)),
  ];

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
    console.log(this.quotes[index].showDescription);
  }

  completeGoal(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  // addNewGoal(goal) {
  //   let quoteLength: number = this.quotes.length;
  //   quote.completeDate = new Date(goal.completeDate)
  //   this.quotes.push(quote)
  //
  // }

  constructor() { }

  ngOnInit() {
  }
}
