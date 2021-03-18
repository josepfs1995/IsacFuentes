import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('backTop', [
        state('closed', style({
          opacity: 0,
          display: 'none'
        })),
        state('open', style({
          display: 'block',
          opacity: 1,
        })),
        transition('* => *', animate(250))
    ]),
  ]
})
export class FooterComponent implements OnInit{
  state = "closed";
  @ViewChild("backtop") backtop: ElementRef;
  _html: ElementRef;
  constructor(private _elemRef: ElementRef) { 
    this._html = _elemRef;
  }

  ngOnInit(): void {
    
  }
  topRedirect():void{
    document.getElementsByTagName("html")[0].scrollTop = 0;
  }

  @HostListener('window:scroll', ['$event'])
  handleScroll($event:any){
    
    if (window.scrollY > 150) {
      this.state = "open";
		} else {
      this.state = "closed";
		}
  }
}
