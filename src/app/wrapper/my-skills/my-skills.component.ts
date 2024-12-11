import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {


  // skills icons ob 
 skillsIcons = [
 {
    id: '1',
    name: 'Angular',
    image: './assets/img/icons/Property 1=Angular.png'
 },
 {
  id: '2',
  name: 'TypeScript',
  image: './assets/img/icons/Property 1=Typescript.png'
},
{
  id: '3',
  name: 'JavaScript',
  image: './assets/img/icons/Property 1=JavScript.png'
},
{
  id: '4',
  name: 'HTML',
  image: './assets/img/icons/Property 1=html.png'
},
{
  id: '5',
  name: 'CSS',
  image: './assets/img/icons/Property 1=css.png'
},
{
  id: '6',
  name: 'Firebase',
  image: './assets/img/icons/Property 1=Firebase.png'
},
{
  id: '7',
  name: 'Git',
  image: './assets/img/icons/Property 1=Git.png'
},
{
  id: '8',
  name: 'Scrum',
  image: './assets/img/icons/Property 1=Scrum.png'
},
{
  id: '9',
  name: 'Rest API',
  image: './assets/img/icons/Property 1=Api.png'
},
{
  id: '10',
  name: 'Material Design',
  image: './assets/img/icons/Property 1=Test Automation.png'
},

 ];

}
