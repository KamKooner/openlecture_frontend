import {OnInit } from '@angular/core';
import { Component, Renderer2, ElementRef, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements  AfterViewInit {
  showImages = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  // This method will be called after the view has initialized
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showImages = true;
    }, 500);
    
  }



}
