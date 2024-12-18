import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  projects = [
    {
      id: '1',
      name: 'Jion',
      Languages: 'JavaScript | HTML | CSS | Firebase',
      description: 'Task Manager inspired by the Kanban System. Create and organize tasks suing drag and drop functions, assign users and categories.',
      url: 'https://github.com/lbalz/Join-Kanban-Board',
      project_number: '01/02',
      image: './assets/img/portfolio-designs/join photo.png',
      isReverse: false
   },
   {
    id: '2',
    name: 'El Pollo loco',
    Languages: 'HTML | CSS | JavaScript',
    description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen',
    url: 'https://github.com/Barwariii/El-Pollo-Loco',
    project_number: '02/02',
    image: './assets/img/portfolio-designs/Pollo loco photo.png',
    isReverse: true

  },
  ]
}
