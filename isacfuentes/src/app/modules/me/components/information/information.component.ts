import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { EstefaniasjeansComponent } from '../estefaniasjeans/estefaniasjeans.component';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openChatBot():void{
    const modalRef = this.modalService.open(ChatbotComponent);
  }
  openEstefaniaJeans():void{
    const modalRef = this.modalService.open(EstefaniasjeansComponent);
  }
}
