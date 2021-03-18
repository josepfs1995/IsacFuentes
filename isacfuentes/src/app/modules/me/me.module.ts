import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeRoutingModule } from './me-routing.module';
import { BiografyComponent } from './components/biografy/biografy.component';
import { InformationComponent } from './components/information/information.component';
import { MeComponent } from './me.component';
import { StudiesComponent } from './components/studies/studies.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { EstefaniasjeansComponent } from './components/estefaniasjeans/estefaniasjeans.component';

@NgModule({
  declarations: [
    MeComponent,
    BiografyComponent,
    InformationComponent,
    StudiesComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ChatbotComponent,
    EstefaniasjeansComponent
  ],
  imports: [
    CommonModule,
    MeRoutingModule
  ]
})
export class MeModule { }
