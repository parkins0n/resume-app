import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  @Input() skills: string[] = [];
  @Input() certificates: string[] = [];
  @Input() knowledges: string[] = [];
  
  currentCategory: string = '';
}