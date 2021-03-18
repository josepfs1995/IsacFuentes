import { Component, OnInit } from '@angular/core';
import { Skills } from '../../model/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skills[] = [];
  constructor() { }

  ngOnInit(): void {
    this.skills.push(new Skills("Inglés", 30));
    this.skills.push(new Skills("C#", 80));
    this.skills.push(new Skills("SQL", 60));
    this.skills.push(new Skills("MVC .NET Framework", 80));
    this.skills.push(new Skills("MVC .NET Core", 80));
    this.skills.push(new Skills("Razor", 80));
    this.skills.push(new Skills("Blazor", 40));
    this.skills.push(new Skills("Dapper", 70));
    this.skills.push(new Skills("WCF", 50));
    this.skills.push(new Skills("SignalR", 60));
    this.skills.push(new Skills("JavaScript", 70));
    this.skills.push(new Skills("TypeScript", 50));
    this.skills.push(new Skills("jQuery", 80));
    this.skills.push(new Skills("Angular", 50));
    this.skills.push(new Skills("DevOps", 40));
  }

}
