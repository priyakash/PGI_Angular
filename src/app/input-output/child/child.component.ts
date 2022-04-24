import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output() numberFromChild: EventEmitter<number> = new EventEmitter();

  numbers: number[] = [1, 12, 24, 48];

  constructor() { }

  ngOnInit(): void {
  }

  sendNumberToParent(num: number): void {
    this.numberFromChild.emit(num);
  }
  
}
