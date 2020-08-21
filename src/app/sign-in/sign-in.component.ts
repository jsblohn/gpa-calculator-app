/*
============================================
; Title:  sign-in.component.ts
; Author: Professor Krasso
; Date:   20 August 2020
; Modified By: Janet Blohn
; Description: Exercise 7.3 - Form Validation
; TypeScript for Sign-In component of gpa-calculator-app
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

// Import required application modules and components
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

// Export as SignInComponent
export class SignInComponent implements OnInit {

  // Create variables
  signinForm: FormGroup;
  errorMessage: string;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private signinService: SignInService) {

   }

  ngOnInit(): void {
    // Use FormBuilder to create a new FormGroup with a FormControl named studentId
    this.signinForm = this.fb.group ({
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }

  onSubmit() {
    // Validate the student ID entered on signin. Sign user in if valid, send error message if not
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
        this.cookieService.set('session_user', studentId.toString(), 1);
        this.router.navigate(['/'])
      } else {
        this.errorMessage = 'The student ID you entered is invalid, please try again.';
      }
  }
  // Create a function that returns the signinForm controls
  get form() {
    return this.signinForm.controls;
  }
}
