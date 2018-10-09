import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-initialpage',
  templateUrl: './initialpage.component.html',
  styleUrls: ['./initialpage.component.css']
})
export class InitialpageComponent implements OnInit {
  breakpoint: number;

  constructor(public dialog: MatDialog) { }
  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 767) ? 2 : 4;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 767) ? 2 : 4;
  }
  myfun() {
    console.log('k');

  }

}
