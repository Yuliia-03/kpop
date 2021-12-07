import { Component, Input, OnInit } from '@angular/core';
import { NumbArray } from 'src/models/NumbersArray';


@Component({
    selector: 'child-root',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class Calculation implements OnInit {

    @Input() numberArray: NumbArray[] = [];

    ngOnInit(): void {}

    get maxNumber(): number {
        if (this.numberArray.length < 1) return 0;
        var max = this.numberArray[0].value;
        for (var i = 1; i < this.numberArray.length; ++i) {
            if (this.numberArray[i].value > max) {
                max = this.numberArray[i].value;
            }
        }
        return max;
    }

    get minNumber(): number {
        if (this.numberArray.length < 1) return 0;
        var min = this.numberArray[0].value;
        for (var i = 1; i < this.numberArray.length; ++i) {
            if (this.numberArray[i].value < min) {
                min = this.numberArray[i].value;
            }
        }
        return min;
    }

    get calculation(): number {
        return this.maxNumber - this.minNumber;
    }


}
