
import { Component, OnChanges, Input, Output ,EventEmitter } from '@angular/core';
@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating :number;
    @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();
    starWidth: number;
    ngOnChanges() : void {
        console.log(this.rating);

        this.starWidth = this.rating * 75 / 5;
    }

    onClick():void{
       this.ratingClicked.emit(`the rating ${this.rating} was clicked`)
    }
}
