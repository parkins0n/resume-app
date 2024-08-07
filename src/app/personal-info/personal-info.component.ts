import { CurrencyPipe, PercentPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  @Input() name!: string;
  @Input() phone!: string;
  @Input() city!: string;
  @Input() photoUrl!: string;
}