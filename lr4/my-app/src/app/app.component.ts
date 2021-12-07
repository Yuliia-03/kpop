import { Component } from '@angular/core';
import { NumbArray } from 'src/models/NumbersArray';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  numbers: NumbArray[] = [];

  Add() {
    this.numbers.push({ value: 0 });
  }

  Delete(index: number) {
    this.numbers.splice(index, 1);
  }

}
