/*
============================================
; Title:  grade-summary.component.ts
; Author: Professor Krasso
; Date:   20 August 2020
; Modified By: Janet Blohn
; Description: Exercise 7.3 - Form Validation
; TypeScript for grade-summary.component of gpa-calculator-app
============================================
*/

/* Import required modules from Angular */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})

// Export as GradeSummaryComponent
export class GradeSummaryComponent implements OnInit {
  // Define input values
  @Input() grade: string;
  @Input() course: string;

  constructor() { }

  ngOnInit(): void {
  }

}
