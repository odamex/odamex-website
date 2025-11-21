import { getOS } from "./get-os";

export const downloadLinks = (version: string) => {
    const os = getOS();
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
          {os, icon: 'tux', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-linux-x86_64-${version}.flatpak`, text: `${version} Linux Flatpak x86 64-bit`, primary: true},
          {os, icon: 'tux', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-linux-arm64-${version}.flatpak`, text: `${version} Linux Flatpak ARM 64-bit`},
          {os, icon: 'code', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-src-${version}.tar.bz2`, text: `${version} Universal Source Package`}
        ];
      default:
        return [
          {os, icon: 'code', link: `https://github.com/odamex/odamex/releases/download/${version}/odamex-src-${version}.tar.bz2`, text: `${version} Universal Source Package`, primary: true}
        ];
    }
  }    