import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollable',
  templateUrl: './scrollable.component.html',
  styleUrls: ['./scrollable.component.css']
})
export class ScrollableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener("scroll", ['$event'])
  doSomethingOnInternalScroll($event:Event){
    console.log("scroll: ", $event);
  }
}
