import { Component } from '@angular/core';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { OffersComponent } from "../offers/offers.component";

@Component({
  selector: 'app-landingpagehero',
  standalone: true,
  imports: [NavbarComponent, OffersComponent],
  templateUrl: './landingpagehero.component.html',
  styleUrl: './landingpagehero.component.scss'
})
export class LandingpageheroComponent {

}
