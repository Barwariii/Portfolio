import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NavBarComponent } from './../../shared/nav-bar/nav-bar.component';
// import { AboutMeComponent } from '../about-me/about-me.component';
// import { MySkillsComponent } from '../my-skills/my-skills.component';
// import { PortfolioComponent } from '../portfolio/portfolio.component';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';






@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  translate = inject(TranslationService);
}
