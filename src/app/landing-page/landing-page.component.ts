import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';



@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavBarComponent, AboutMeComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
