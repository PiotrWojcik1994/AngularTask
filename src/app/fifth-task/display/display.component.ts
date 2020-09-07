import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{

  displayNumber = 0;

  countChange(newValue: number) {
    this.displayNumber = newValue;
  }

  ngOnInit() {
  }

}
