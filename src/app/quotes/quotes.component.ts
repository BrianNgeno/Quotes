import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
    new Quote(1, 'Start Early finish Early', 'By Martin Luther'),
    new Quote(2, 'The mind is the greatest weapon against poverty', 'By marvin Gavin'),
    new Quote(3, 'Never underestimate the power of Confidence', 'By Lincon Martin'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
