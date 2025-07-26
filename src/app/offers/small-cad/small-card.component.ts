import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() oem!: string;
  @Input() leistung!: string;
  @Input() position!: string;
  @Input() price!: string;

  @Input() size: 'small' | 'large' = 'small';

}
