import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote('Start Early finish Early', 'Martin Luther', 'Mark Luke'),
    new Quote('The mind is the greatest weapon against poverty', 'marvin Gavin', 'John Luther'),
    new Quote('Never underestimate the power of Confidence', 'Lincon Martin', 'List King'),
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
//   var n = 0;
//
// function increment(){
//
//   n++;
//   return n;
// }
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
