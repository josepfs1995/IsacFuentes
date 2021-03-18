import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  show:boolean = false;
  constructor(private viewportScroller:ViewportScroller) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId:string):void{
    this.viewportScroller.scrollToAnchor(elementId);
  }
  collapseMenu():void{
    this.show = !this.show;
  }
}
