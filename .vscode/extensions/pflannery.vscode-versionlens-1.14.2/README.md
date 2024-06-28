# Version Lens for Visual Studio Code

[![Badge for version for Visual Studio Code extension](https://vsmarketplacebadges.dev/version/pflannery.vscode-versionlens.png?color=blue&style=?style=for-the-badge&logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens&wt.mc_id=vscode-versionlens-gitlab)
[![Installs](https://vsmarketplacebadges.dev/installs-short/pflannery.vscode-versionlens.png?color=blue&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)
[![Rating](https://vsmarketplacebadges.dev/rating/pflannery.vscode-versionlens.png?color=blue&style=flat-square)](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)
[![The ISC license](https://img.shields.io/badge/license-ISC-orange.png?color=blue&style=flat-square)](http://opensource.org/licenses/ISC)

This project is `active`, not sponsored or funded.

[![BuyMeACoffee](https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png)](https://www.buymeacoffee.com/peterf)

This extension shows __version__ information when opening a package or project file in vscode. <br> It abides by [semver rules](https://semver.org/) and uses the [Node Semver](https://github.com/npm/node-semver) package to compare and sort versions.

![Show releases](https://gitlab.com/versionlens/vscode-versionlens/-/raw/master/images/faq/show-releases.gif)

The following languages are supported:

- cargo (rust) https://doc.rust-lang.org/cargo/ 
- composer (php) https://getcomposer.org/
- dotnet https://www.dotnetfoundation.org/
- dub https://code.dlang.org/
- maven (java) https://maven.apache.org/
- npm (node) https://www.npmjs.com/
  - jspm https://jspm.org/
  - pnpm https://pnpm.io/
- pub (dart) https://pub.dev/
- python https://pypi.org/

## Contents

- [How do I see version information for a package?](#how-do-i-see-version-information-for-a-package)
- [Can I see pre-release versions?](#can-i-see-pre-release-versions)
- [What do the suggestion links mean?](https://gitlab.com/versionlens/vscode-versionlens/-/blob/HEAD/docs/suggestion-overview.md)
- [Will this extension install packages for me?](#will-this-extension-install-packages-for-me)
- [How do I install this extension?](#how-do-i-install-this-extension)
- [Can I install this extension manually?](#can-i-install-this-extension-manually)
- [I'm not able to install this extention](#im-not-able-to-install-this-extention)
- [How do I troubleshoot this extension?](#how-do-i-troubleshoot-this-extension)

## How do I see version information for a package?

Click the V icon in the package\project file toolbar.

You can also choose the default startup state by setting `versionlens.suggestions.showOnStartup`

## Can I see pre-release versions?

Yes, click on the tag icon in the package\project file toolbar.

You can also choose the default startup state by setting `versionlens.suggestions.showPrereleasesOnStartup`

![Show prereleases](https://gitlab.com/versionlens/vscode-versionlens/-/raw/master/images/faq/show-prereleases.gif)

## Will this extension install packages for me?

Yes, you can define a task that will run when you save a package document.

To set this up follow the [custom task install guide](https://gitlab.com/versionlens/vscode-versionlens/-/blob/HEAD/docs/custom-install-task.md)

## How do I install this extension?

Follow this link on [how to install vscode extensions](https://code.visualstudio.com/docs/editor/extension-gallery)

## Can I install this extension manually?

Yes goto the [release page for instructions](https://gitlab.com/versionlens/vscode-versionlens/-/releases)

## I'm not able to install this extention

Try a clean install:

- Shut down vscode
- Delete the extension folder `{home}/.vscode/extensions/pflannery.vscode-versionlens*`
- Open vscode and try reinstalling the extension again

If that fails then have a look in the output channel and choose the `Log (Extension Host)` in thedrop down. Report the problem here if this doesn't help.

![image](https://gitlab.com/versionlens/vscode-versionlens/-/raw/master/images/faq/ext-host-log.png)

## How do I troubleshoot this extension?

- Ensure you have `"editor.codeLens": true` set in your settings.

- Version lens writes a log to an output channel in vscode.

  If your experiencing issues please set your `versionlens.logging.level` to `debug` (vscode needs to be restarted) 
    
  Then open the channel like:
    
  ![image](https://gitlab.com/versionlens/vscode-versionlens/-/raw/master/images/faq/ext-log.png)

- In the worst case no logs are output. There maybe an error in the developer tools of vscode. You can open the dev tools from the `help menu` in vscode (Ctrl+Shift+I)

## License

Licensed under ISC

Copyright &copy; 2016+ [contributors](https://gitlab.com/versionlens/vscode-versionlens/-/graphs/master)
