import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../shared/nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from "../shared/footer/footer.component";








@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule, NavBarComponent, LandingPageComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, FooterComponent, FooterComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss'
})
export class WrapperComponent {

}
