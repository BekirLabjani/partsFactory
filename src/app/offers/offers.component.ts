import { Component, Input } from '@angular/core';
import { SmallCardComponent } from './small-cad/small-card.component';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [SmallCardComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {

  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() oem!: string;
  @Input() leistung!: string;
  @Input() position!: string;
  @Input() price!: string;

  // Größe: 'small' oder 'large', default 'small'
  @Input() size: 'small' | 'large' = 'small';

  openLargCard(){
    
  }
}
