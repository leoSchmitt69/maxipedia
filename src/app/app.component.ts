import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
interface WeeklyInformation {
  anecdote: string;
  funFact: string;
  author: string;
}

const weeklyInformations: WeeklyInformation[] = [{
  anecdote: "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  funFact: "Est ce que tu savais que bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
  author: "leo"
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

  displayAnecdote = true;
  currentWeeklyInformation!: WeeklyInformation;
  authorFormControl = new FormControl<string>('');
  hasAuthorBeenFound!: boolean;
  failAttempts = 0;

  ngOnInit(): void {
      this.currentWeeklyInformation = this.getCurrentWeeklyInformation();
  }

  failAttemptsArray(): any[] {
    const arr = new Array(this.failAttempts || 0)
    console.log(arr)
    return arr;
  }

  validateAuthor(): void {
    this.failAttempts ++;
    this.hasAuthorBeenFound = this.authorFormControl.value?.trim().toLowerCase() === this.currentWeeklyInformation.author.toLowerCase();
  }

  private getCurrentWeeklyInformation(): WeeklyInformation {
    return weeklyInformations[0]; // TODO
  }
}