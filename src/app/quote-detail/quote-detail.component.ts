import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter <boolean> ();
  quoteComplete(complete: boolean) {
   this.isComplete.emit(complete);
   console.log('complete');
}
// let myApp = angular.module('myApp', []);
//
// function TodoCtrl($scope) {
//     $scope.todos = [{
//         text: 'todo one'
//     }, {
//         text: 'todo two',
//         done: false
//     }];
//     $scope.likeIt = function likeIt(model) {
//         model.count = model.count + 1 || 1;
//     };
// }
constructor() { }

  ngOnInit() {
  }
}
