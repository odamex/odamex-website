import { Component, viewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { getOS } from '@shared/utilities';

interface CarouselItem {
    title: string;
    text: string;
    image: string;
    contentLocation: string;
    showContentOverlay: boolean;
    buttons?: { text: string; link: string; styleClass: string }[];
}

interface downloadLink {
  os: string;
  icon: string;
  link: string;
  text: string;
  primary?: boolean;
}

@Component({
  imports: [NgbCarouselModule, NgbDropdownModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  public images = ['slide-1','slide-devs1','slide-wiki1','slide-discord1'].map((n) => `/assets/${n}.jpg`);
  public carouselItems: CarouselItem[] = [
    { 
      title: 'ODAMEX - Online Multiplayer Doom<sup>&trade;</sup>', 
      text: `Odamex is a free, cross-platform (Mac, Windows, Linux) modification of the <a target="new" href="http://doomwiki.org/wiki/Doom_engine">Doom engine</a> that allows players to easily join servers dedicated to playing Doom online.<br><br><span class="hidden-tablet hidden-phone">A copy of Doom, Doom II, <a href="https://freedoom.github.io/download.html" target="new">Freedoom</a> or Chex Quest is recommended to play it. If you do not own Doom, it can be purchased on <a target="new" href="https://gog.com">GOG</a> or <a target="new" href="https://steampowered.com/">Steam</a></span>.`,
      image: 'slide-1',
      contentLocation: 'left',
      showContentOverlay: false,
      buttons: [
        { text: 'Download Odamex', link: '/download', styleClass: 'btn-primary' },
      ]
    },
    { 
      title: 'Developers Wanted', 
      text: `Know C or C++?  Have a desire to work on a multiplayer game engine?  The Odamex Development Group is looking for developers with a little or a lot of time and interest in helping advance this open source multiplayer doom source port.  Get our code on <a href="//github.com/odamex/odamex">GitHub</a>, and check out our <a href="/bugs/open">bug tracker</a> for where we need help the most.`,
      image: 'slide-devs1',
      contentLocation: 'right',
      showContentOverlay: true,
    },
    { 
      title: 'Get On Board The Discord', 
      text: `Chat with friends, join a game, enter a tournament, get help, follow development and more on our Discord channel. It's the best way to stay directly connected to all things Odamex.`,
      image: 'slide-discord1',
      contentLocation: 'left',
      showContentOverlay: true,
      buttons: [
        { text: 'Join Our Discord', link: 'https://discord.gg/3mKEnjx5P9', styleClass: 'btn-primary' },
      ]
    },
    { 
      title: 'Help The Effort - Expand Our Wiki', 
      text: `Our wiki has moved. It's now on GitHub. We need smart, capable folks to improve our wiki, and every little bit helps. Head on over to <a href="https://github.com/odamex/odamex/wiki">GitHub</a> and do your part!`,
      image: 'slide-wiki1',
      contentLocation: 'right',
      showContentOverlay: true,
      buttons: [
        { text: 'Odamex Wiki', link: 'https://github.com/odamex/odamex/wiki', styleClass: 'btn-primary' },
        { text: 'Sign Up', link: 'https://github.com/signup', styleClass: 'btn-primary' },
      ]
    },
  ];
  
  public downloadLinks!: downloadLink[];

  public carousel = viewChild.required<NgbCarousel>('carousel');

  constructor() {
    this.downloadLinks = this.getDownloadLinks();
  }

  ngAfterViewInit() {this.carousel().pause();}

  public get primaryDownloadLink(): downloadLink | undefined {
    return this.downloadLinks.find(link => link.primary);
  }

  private getDownloadLinks(): downloadLink[] {
    const os = getOS();
    const version = '11.2.0';
    switch (os) {
      case 'win':
        return [
          {os, icon: 'windows', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-win-${version}.exe`, text: `${version} Windows 32/64 bit Installer`, primary: true},
          {os, icon: 'windows', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-win64-${version}.zip`, text: `${version} Windows 64-bit Zip`},
          {os, icon: 'windows', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-win32-${version}.zip`, text: `${version} Windows 32-bit Zip`},
          {os, icon: 'code', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-src-${version}.tar.bz2`, text: `${version} Universal Source Package`}
        ];
      case 'macos':
        return [
          {os, icon: 'apple', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-macos-${version}.dmg`, text: `${version} MacOS 10.15+ Intel 64-bit Installer`, primary: true},
          {os, icon: 'code', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-src-${version}.tar.bz2`, text: `${version} Universal Source Package`}
        ];
      case 'linux':
        return [
          {os, icon: 'tux', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-linux-x86_64-${version}.flatpak`, text: `${version} Linux Flatpak`, primary: true},
          {os, icon: 'tux', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-linux-arm64-${version}.flatpak`, text: `${version} Linux Flatpak`},
          {os, icon: 'code', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-src-${version}.tar.bz2`, text: `${version} Universal Source Package`}
        ];
      default:
        return [
          {os, icon: 'code', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-src-${version}.tar.bz2`, text: `${version} Universal Source Package`, primary: true}
        ];
    }
  }
}
