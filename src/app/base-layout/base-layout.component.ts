/*
============================================
; Title:  base-layout.component.ts
; Author: Professor Krasso
; Date:   20 August 2020
; Modified By: Janet Blohn
; Description: Exercise 7.3 - Form Validation
; TypeScript for base-layout.component of gpa-calculator-app
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})

// Export as BaseLayoutComponent and define the assignment name for the HTML to pull in.
export class BaseLayoutComponent implements OnInit {

  assignment : string;

  // Define the assignment name
  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = "GPA Calculator";
   }

  ngOnInit(): void {
  }

  // Delete cookies on sign out and return to the signin screen
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
