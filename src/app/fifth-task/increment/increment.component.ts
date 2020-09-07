import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  @Input() incrementNumber = 0;

  @Output() increment = new EventEmitter<number>();

  incrementValue() {
    this.incrementNumber ++;
    this.increment.emit(this.incrementNumber);
  }

  ngOnInit() {
  }

}
