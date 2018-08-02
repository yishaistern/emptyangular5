import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {

  constructor(private router: Router) { }
  goto(str) {
    this.router.navigate(str);
  }

  ngOnInit() {
  }

  getNext(cuurent: number, arr: number[]): number {
      let counter = cuurent + 1;
      if (counter > arr.length - 1 ) {
        counter = 0;
      }
      while (counter !== cuurent) {
        if (arr[counter] === 0) {
          return counter;
        }
        if (counter === arr.length - 1) {
          counter = 0;
        } else {
          counter ++;
        }
      }
      return -1;
  }
  caculate(arr: number[]) {
    let index = 0;
    let tmp = 0;
    while (tmp !== -1) {
      tmp = this.getNext(index, arr);
      if (tmp !== -1) {
        arr[tmp] = 1;
        tmp = this.getNext(index, arr);
        if (tmp !== -1) {
          index = tmp;
        }
      }
    }
    console.log(index);
    alert(index);
  }
  /** catch changes */
  changer($event) {
    const num: number =  parseFloat($event.target.value);
    console.log(num);
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr[arr.length] = 0;
    }
    console.log(arr);
    this.caculate(arr);
  }

  clicker() {
  }
}
