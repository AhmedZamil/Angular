import { Component, OnChanges, EventEmitter, Input, Output } from '@angular/core';


@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
        this.starWidth = this.rating * 75/5;
    }
    @Input() rating:number;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();
    // @Output() notify: EventEmitter<string> = new EventEmitter<string>();
    starWidth: number;

    onClick():void{
         this.ratingClicked.emit(`The Rating ${this.rating} was clicked`);
        // console.log(` The Rating ${this.rating} was clicked`);
    }
}