import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { LinksComponent } from './links/links.component';
import { ExtraInfoComponent } from './extra-info/extra-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PersonalInfoComponent,
    WorkExperienceComponent,
    SkillsComponent,
    LinksComponent,
    ExtraInfoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'resume-app';
}
