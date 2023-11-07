import { Component, Renderer2, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  showImages = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    // Add this code to initialize the state
    this.checkScroll();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Add this code to respond to scroll events
    this.checkScroll();
  }

  private checkScroll(): void {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const scrollPosition = scrollY + windowHeight;

    // Adjust the threshold as needed
    const threshold = 0.8; // 80% of the content should be visible before fading in

    if (scrollPosition >= document.body.scrollHeight * threshold) {
      this.showImages = true;
    }
  }
}
