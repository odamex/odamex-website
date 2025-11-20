import { Component } from '@angular/core';

@Component({
  selector: 'app-content-container-header, [contentContainerHeader]',
  standalone: true,
  styleUrls: ['./content-container-header.component.scss'],
  template: '<ng-content></ng-content>',
})
export class ContentContainerHeaderComponent {}
