import { Component } from '@angular/core';
import { ContentContainerComponent } from "@shared/ui";
import { ContentContainerTitleComponent } from "@shared/ui/content-container/content-container-subs";

@Component({
  selector: 'app-terms',
  imports: [ContentContainerComponent, ContentContainerTitleComponent],
  templateUrl: './terms.html',
  styleUrl: './terms.scss',
})
export class Terms {

}
