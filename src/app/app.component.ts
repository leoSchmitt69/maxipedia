import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { datesWednesdays } from './dates';
import { WeeklyInformation, weeklyInformations } from './weekly-informations';

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
    MatInputModule,
    MatSnackBarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private _snackBar = inject(MatSnackBar);
  
  displaySouvenir!: boolean;
  displaySearchAuthor = false;
  currentWeeklyInformation!: WeeklyInformation;
  authorFormControl = new FormControl<string>('');
  hasAuthorBeenFound!: boolean;
  failAttempts = 0;
  headClicks = 0;
  souvenirImage = '/maxipedia-souriant.png';
  presentationImage = '/maxipedia-sofa.png';

  ngOnInit(): void {
      this.currentWeeklyInformation = this.getCurrentWeeklyInformation();
      this.souvenirImage = this.currentWeeklyInformation.image ? this.currentWeeklyInformation.image : '/maxipedia-souriant.png';
      setTimeout(() => {
        this.displaySouvenir = false
      },1000)
  }

  failAttemptsArray(): any[] {
    const arr = new Array(this.failAttempts || 0)
    
    return arr;
  }

  headClicked(): void {
    if(this.displaySouvenir) {
      this.headClicks++;
      if(this.headClicks > 5 && this.headClicks <= 10){
        this._snackBar.open("Bien joué ! Tu as trouvé un Easter Egg ! (Tabasser Max)", undefined, {duration: 5000, panelClass: "snackbar"});
        this.souvenirImage = "max-tabasse.png"
      } else if (this.headClicks > 10) {
        this._snackBar.open("Calme toi ! T'as la clickonite ou quoi ? 🤪🤪", undefined, {duration: 5000, panelClass: "snackbar"});
      }
    }
  }


  validateAuthor(): void {
    
    const reponse = this.authorFormControl?.value ? this.authorFormControl.value.trim().toLowerCase() : '';
    const authors = this.currentWeeklyInformation.author.map(name => name.toLowerCase());
    this.hasAuthorBeenFound = authors.includes(reponse);

    if(this.hasAuthorBeenFound) {
      this.generateFireworks();
    } else if(this.authorFormControl.value?.trim().toLowerCase().includes('dragon')) {
      this.foundEasterEgg();
      this.showDragon();
    } else {
      this.failAttempts ++;
    }
  }

  private getCurrentWeeklyInformation(): WeeklyInformation {
    let index = datesWednesdays.findIndex((wednesdayDate: string, index: number) => {
      const previousWednesday = new Date(wednesdayDate);
      const nextWednesday = new Date(datesWednesdays[index+1]);
      const today = new Date();
      return today >= previousWednesday && today < nextWednesday
      })

    index = index === -1 ? 0 : index

    return weeklyInformations[index];
  }

  foundEasterEgg() {
    this._snackBar.open("Bien joué ! Tu as trouvé un Easter Egg !", undefined, {duration: 5000, panelClass: "snackbar"}); // On code sale, on variabilise R !
  }

  showDragon() {
    this.souvenirImage = "max-the-dragon.png"
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
        duration: 8000, // Durée de l'animation (1s)
        easing: 'ease-out',
        fill: 'forwards' // Maintenir la dernière étape
      });
  
      // Ajouter la particule au conteneur
      fireworksContainer!.appendChild(firework);
  
      // Supprimer la particule après l'animation
      setTimeout(() => {
        firework.remove();
      }, 5000);
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
        duration: 8000, // Durée de l'animation (1s)
        easing: 'ease-out',
        fill: 'forwards' // Maintenir la dernière étape
      });
  
      // Ajouter la particule au conteneur
      fireworksContainer!.appendChild(firework);
  
      // Supprimer la particule après l'animation
      setTimeout(() => {
        firework.remove();
      }, 5000);
    }
  }
  
}