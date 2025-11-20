import { Component } from '@angular/core';

@Component({
  selector: 'app-content-container-title, [contentContainerTitle]',
  standalone: true,
  styleUrls: ['./content-container-title.component.scss'],
  template: '<ng-content></ng-content>',
})
export class ContentContainerTitleComponent {}
