import { Component } from '@angular/core';
import { ContentContainerComponent } from '@shared/ui';
import { ContentContainerTitleComponent } from "@shared/ui/content-container/content-container-subs";

@Component({
  selector: 'app-privacy',
  imports: [ContentContainerComponent, ContentContainerTitleComponent],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class Privacy {

}
