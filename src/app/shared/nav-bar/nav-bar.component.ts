import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  menuActive: boolean = false;

  toggleMenu(): void {
    this.menuActive = !this.menuActive;

    setTimeout(() => {
      if (this.menuActive) {
        document.body.classList.add('menu-active');
      } else {
        document.body.classList.remove('menu-active');
      }
    });
  }

  navigateToSection(sectionId: string): void {
    this.menuActive = false;
    document.body.classList.remove('menu-active'); // Entfernt die Klasse vom Body
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Scrollt zur Sektion
    }
}


// navigateToSection(sectionId: string): void {
//   this.menuActive = false;
//   document.body.classList.remove('menu-active'); // Entfernt die Klasse vom Body
//   const section = document.getElementById(sectionId);
//   if (section) {
//       const yOffset = -200; // Offset für die Navbar
//       const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: yPosition, behavior: 'smooth' }); // Scrollt zur Sektion mit Offset
//   }
// }

translate = inject(TranslationService);

}
