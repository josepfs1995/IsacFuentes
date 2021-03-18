import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private viewportScroller:ViewportScroller) { }

  ngOnInit(): void {
  }

  onClickScroll(elementId:string):void{
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
