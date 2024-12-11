import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './../../shared/nav-bar/nav-bar.component';
import { AboutMeComponent } from './../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';




@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NavBarComponent, AboutMeComponent, MySkillsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
