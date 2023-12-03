import { Component } from '@angular/core';

import { NavbarComponent } from '../../../../core/navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NavbarComponent]
})
export class HeaderComponent {

}
