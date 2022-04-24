import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  numberReceveidFromChild: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  catchValue(event: number): void {
    this.numberReceveidFromChild = event;
  }
}
