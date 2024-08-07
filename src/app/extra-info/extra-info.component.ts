import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-extra-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extra-info.component.html',
  styleUrls: ['./extra-info.component.css'],
})
export class ExtraInfoComponent {
  @Input() salary!: number;
  @Input() projectsCompletion!: number;
}