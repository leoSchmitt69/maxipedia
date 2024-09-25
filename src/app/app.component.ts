import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { datesSaturdays } from './dates';

interface WeeklyInformation {
  souvenir: string;
  funFact: string;
  author: string;
}

const weeklyInformations: WeeklyInformation[] = [{
  souvenir: "Boire une bière au Bombardier et parler de code jusqu'à 1h, des fucking geek quoi !",
  funFact: "Chez Microsoft dans les années 1990, il y avait une tradition informelle appelée le 'Beer and Code' où les développeurs se réunissaient pour coder tout en buvant de la bière. L’idée était que, dans une ambiance décontractée, les idées créatives pouvaient mieux émerger. C'était un moyen de rendre le travail intense de développement plus agréable, en particulier pendant les longues sessions de codage pour finaliser des projets avant les deadlines. Cette pratique s’est répandue dans de nombreux autres départements technologiques, créant une sorte de culture où bière et code allaient souvent de pair. Cependant, bien que cela ait parfois stimulé la créativité et l’esprit d’équipe, c’était aussi parfois la recette pour des bugs inattendus !",
  author: "leo",
}]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NgIf, 
    ReactiveFormsModule, 
    NgFor, 
    NgForOf,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  displaySouvenir!: boolean;
  displaySearchAuthor = false;
  currentWeeklyInformation!: WeeklyInformation;
  authorFormControl = new FormControl<string>('');
  hasAuthorBeenFound!: boolean;
  failAttempts = 0;

  ngOnInit(): void {
      this.currentWeeklyInformation = this.getCurrentWeeklyInformation();

      setTimeout(() => {
        this.displaySouvenir = false
      },1000)
  }

  failAttemptsArray(): any[] {
    const arr = new Array(this.failAttempts || 0)
    console.log(arr)
    return arr;
  }

  validateAuthor(): void {
    this.failAttempts ++;
    this.hasAuthorBeenFound = this.authorFormControl.value?.trim().toLowerCase() === this.currentWeeklyInformation.author.toLowerCase();

    if(this.hasAuthorBeenFound) {
      this.generateFireworks();
    }
  }

  private getCurrentWeeklyInformation(): WeeklyInformation {
    let index = datesSaturdays.findIndex((saturdayDate: string, index: number) => {
      const previousSaturday = new Date(saturdayDate);
      const nextSaturday = new Date(datesSaturdays[index+1]);
      const today = new Date();
      return today >= previousSaturday && today < nextSaturday
      })

    index = index === -1 ? 0 : index

    return weeklyInformations[index];
  }

  generateFireworks() {
    const fireworksContainer = document.getElementById('fireworks-container');
    const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#ffbeef', '#cdb4db', '#ffc8dd', '#ffafcc'];
  
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    for (let i = 0; i < 350; i++) {
      const firework = document.createElement('div');
  
      // Style en ligne pour chaque particule
      firework.style.position = 'absolute';
      firework.style.width = '10px';
      firework.style.height = '10px';
      firework.style.borderRadius = '50%';
      firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      firework.style.opacity = '0.8';
      firework.style.left = `${centerX}px`;
      firework.style.top = `${centerY}px`;
  
      // Random direction and distance
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * 2000;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
  
      // Animation via JavaScript
      firework.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${x}px, ${y}px) scale(0.5)`, opacity: 0 }
      ], {
        duration: 3000, // Durée de l'animation (1s)
        easing: 'ease-out',
        fill: 'forwards' // Maintenir la dernière étape
      });
  
      // Ajouter la particule au conteneur
      fireworksContainer!.appendChild(firework);
  
      // Supprimer la particule après l'animation
      setTimeout(() => {
        firework.remove();
      }, 3000);
    }
  }

  generateHearts() {
    const fireworksContainer = document.getElementById('fireworks-container');
  
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    for (let i = 0; i < 350; i++) {
      const firework = document.createElement('div');
  
      // Style en ligne pour chaque particule
      firework.style.position = 'absolute';
      firework.style.width = '10px';
      firework.style.height = '10px';
      firework.style.opacity = Math.random().toString();
      firework.style.left = `${centerX}px`;
      firework.style.top = `${centerY}px`;
      firework.innerHTML = '&#10084;'
  
      // Random direction and distance
      const angle = Math.random() * 2 * Math.PI;
      const radius = Math.random() * 2000;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
  
      // Animation via JavaScript
      firework.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${x}px, ${y}px) scale(0.5)`, opacity: 0 }
      ], {
        duration: 3000, // Durée de l'animation (1s)
        easing: 'ease-out',
        fill: 'forwards' // Maintenir la dernière étape
      });
  
      // Ajouter la particule au conteneur
      fireworksContainer!.appendChild(firework);
  
      // Supprimer la particule après l'animation
      setTimeout(() => {
        firework.remove();
      }, 3000);
    }
  }
  
}