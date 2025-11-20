import { Component, ContentChild, ElementRef, input, contentChild, HostBinding } from '@angular/core';
import {
  ContentContainerHeaderComponent,
  ContentContainerTitleComponent,
} from './content-container-subs';

@Component({
  selector: 'app-content-container',
  imports: [
  ],
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss'],
})
export class ContentContainerComponent {
  readonly loading = input(false);
  readonly progress = input(false);
  readonly clampWidth = input(false);

  readonly contentContainerHeader = contentChild.required(ContentContainerHeaderComponent);

  readonly contentContainerTitle = contentChild.required(ContentContainerTitleComponent);

  @HostBinding('class.clampWidth') clampWidthClass: boolean = false;

  ngOnInit() {
    this.clampWidthClass = this.clampWidth();
  }
}
