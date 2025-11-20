import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class FooterComponent {
  public today = new Date().getFullYear();

  public scrollToTop($event: Event): void {
    $event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
