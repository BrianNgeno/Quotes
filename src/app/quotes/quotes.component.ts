import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote(1, 'Start Early finish Early', 'By Martin Luther', new Date(2018, 9, 14)),
    new Quote(2, 'The mind is the greatest weapon against poverty', 'By marvin Gavin', new Date(2018, 4, 13)),
    new Quote(3, 'Never underestimate the power of Confidence', 'By Lincon Martin', new Date(2018, 5, 19)),
  ];

  constructor() { }

  ngOnInit() {
  }

}
