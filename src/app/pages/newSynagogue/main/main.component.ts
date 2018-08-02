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

  getNemxtLeft(leftBound: number, arr: any): number {
    while (leftBound < arr.length ) {
      const tmp = leftBound + 1;
      if (arr[tmp]) {
        if (arr[tmp] < arr[leftBound]) {
          return leftBound;
        } else {
          leftBound += 1;
        }
      }
    }
    return leftBound;
  }
  getNemxtright(leftBound: number, arr: any): number {
    let ans = leftBound + 1;
    if (ans >= arr.length - 1 ) {
      return (arr.length - 1);
    }
    while (ans < arr.length ) {
      if (arr[ans]) {
        if (ans === arr.length - 1) {
          return ans;
        }
        if (arr[ans] >= arr[leftBound]) {
          return ans;
        } else {
          if (arr[ans + 1] && arr[ans + 1] < arr[ans]) {
            return ans;
          } else {
            ans ++;
          }
        }
      }
    }
    return ans;
  }
  calculateSum(left, right, arr): number {
    const min = Math.min(arr[left], arr[right]);
    let ans = 0;
    for (let i = (left + 1); i < (right); i++) {
      ans = ans + (min - arr[i]);
    }
    return ans;
  }
  calculate(arr: any[]) {
    let leftBound = 0;
    let rightBound = 0;
    let sum = 0;
    while (leftBound < arr.length - 1) {
      leftBound = this.getNemxtLeft(leftBound, arr);
      rightBound = this.getNemxtright(leftBound, arr);
      if (rightBound > leftBound) {
        sum = sum + this.calculateSum(leftBound, rightBound, arr);
        leftBound = rightBound;
      }
    }
    console.log(sum);
  }

 /** catch changes */
  changer($event) {
    const num: string = ($event.target.value);
    const arr: any = num.split(',');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = parseFloat(arr[i]);
    }
    console.log(arr);
    this.calculate(arr);
  }
}
