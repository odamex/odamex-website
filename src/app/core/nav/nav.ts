import { Component } from '@angular/core';
import { DownloadLink } from '@core/models';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { downloadLinks } from '@shared/utilities';

@Component({
  selector: 'app-nav',
  imports: [NgbDropdownModule],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class NavComponent {
  public downloadLink!: DownloadLink;

  constructor() {
    const version = '11.2.0';
    this.downloadLink = downloadLinks(version).find(link => link.primary)!;
  }
}
