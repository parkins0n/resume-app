import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
  @Input() links: { name: string; url: string }[] = [];
}
