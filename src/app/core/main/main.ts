import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { FooterComponent, NavComponent } from '@app/core';

@Component({
  selector: 'app-main',
  imports: [FooterComponent, NavComponent, RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class MainComponent {

}
