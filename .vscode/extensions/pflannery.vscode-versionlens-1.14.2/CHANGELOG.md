# 1.14.2

### All Providers

  - Added the ability to update the package\project version

    Suggestions available:
    - `↑ major`, `↑ minor`, `↑ patch` for release versions
    - `↑ release` and `↑ pre-release` for pre-release versions

    Fields:
    - cargo = `[packages] version` property
    - composer = `version` property
    - dotnet = `<Version>` and `<AssemblyVersion>` elements
    - maven: `<version>` element
    - node = `version` property
    - pub = `version` property
    - python = `[project] version` property

    > **NOTE**
    >
    > - **Go** is not supported yet
    >
    > - Will trigger the [custom install task](https://gitlab.com/versionlens/vscode-versionlens/-/blob/master/docs/custom-install-task.md?ref_type=heads) when making and saving changes.
    >
    >   This is useful for package managers like npm where the package-lock.json file needs to be updated after making changes to the project version

    Relates to [#356](https://gitlab.com/versionlens/vscode-versionlens/-/issues/356)

  - Fixed suggestion replace-text race-condition causing broken text output

# 1.13.1

### All Providers

  - Fixed a case when using prerelease range versions (e.g. `^1.0.0-pre`), 
    it would show 'no match' and clicking the latest suggestion would not update the version text

### Npm

  - Fixed suggestion handling for the `packageManager` field when using sha hashes

    Thanks to https://gitlab.com/ST-DDT

    Relates to [#358](https://gitlab.com/versionlens/vscode-versionlens/-/issues/358)

# 1.13.0

## All Providers

  - Added JSONC support for all providers that use json files

  - Fixed cases when a version range is invalid (e.g. `>1 <1`) and wasn't showing a status or suggestion

  - Fixed an error when opening an external package file inside a folder workspace

# 1.12.5

## All Providers

  - Added suggestion links for the next available maximum `minor` and\or `patch` version(s)

    Examples:

    ![image](https://gitlab.com/-/project/19418059/uploads/c10bed509673e368184d9ab546186029/image.png)
    
    ![image](https://gitlab.com/-/project/19418059/uploads/411ad32f58e37cc64b40a757796829aa/image.png)

    Thanks to https://gitlab.com/ST-DDT

    Relates to [#291](https://gitlab.com/versionlens/vscode-versionlens/-/issues/291)

  - A sub dependency patch caused versionlens to stop working for some users.<br>
    This fix overrides `@npmcli/agent` back to the last know working version.

    Relates to [#357](https://gitlab.com/versionlens/vscode-versionlens/-/issues/357)

  - Fixed an activation error when opening a project file outside of a workspace folder

  - Replaced webpack with esbuild for a faster extension start-up time

## Dart (pub)

  - Fixed a case where a comment after the version was preventing suggestions from showing for that package

## GoLang

  - Fixed line comments being removed when replacing a version

# 1.11.0

## GoLang

  - Added support for go.mod files

    Relates to [#353](https://gitlab.com/versionlens/vscode-versionlens/-/issues/353)

# 1.10.0

## Python (pip, poetry)

  - Added poetry support to pyproject.toml files
  - Added Pipfile support

  Relates to [#57](https://gitlab.com/versionlens/vscode-versionlens/-/issues/57)

## Rust (cargo)

  - Added '[workspace.dependencies]' support to Cargo.toml files

    Relates to [#346](https://gitlab.com/versionlens/vscode-versionlens/-/issues/346)

# 1.9.3

## Dotnet

  - Fixed missing space and breaking xml when inserting a new version attribute
  - Fixed breaking the xml when a <Version> element is child of a <PackageReference> element

    Relates to [#348](https://gitlab.com/versionlens/vscode-versionlens/-/issues/348)

# 1.9.2

## All providers

  - Fixed visibility of inactive editor icons when using vscode light themes

    Relates to [#340](https://gitlab.com/versionlens/vscode-versionlens/-/issues/340)

# 1.9.1

## Npm

  - Fixed valid alias packages returning "package not found"

    Relates to [#338](https://gitlab.com/versionlens/vscode-versionlens/-/issues/338)

  - Fixed replacing alias versions so they preserve range prefixes

# 1.9.0

## All providers

  - Added colour back to editor icons due to vscode 1.83.1 revert of the svg icon colour implementation 
  - Fixed a case when the latest suggestion for a no-match would result in 'latest' text being inserted in to the version. Now uses '*' instead for these cases.
  - Improved versionlens initial start up time

## Cargo (rust)

  - Added suggestion support to Cargo.toml files
    > TOML is not a first class citizen in vscode so you will need a 
    > TOML language extension installed like [even-better-toml](https://marketplace.visualstudio.com/items?itemName=tamasfe.even-better-toml)

    Relates to [#116](https://gitlab.com/versionlens/vscode-versionlens/-/issues/116)

## Dotnet

  - Prevented versionlens from being able to suggest package updates for files in the bin or obj folders

# 1.8.0

## All providers

  - Updated editor icon graphics to show when they are enabled or not

    This is due to a change that affected the way svg icons are rendered in vscode v1.83.0.

    New enabled icons

    ![Alt text](https://gitlab.com/versionlens/vscode-versionlens/uploads/6273cf1fbaac4c93d146ce5643f31d08/image.png)

    Related to [#336](https://gitlab.com/versionlens/vscode-versionlens/-/issues/336)

  - Prevented BOMs altering position ranges when reading content from project\package files.

## Dotnet

  - Added ability to insert missing version attributes

    Related to [#304](https://gitlab.com/versionlens/vscode-versionlens/-/issues/304)

  - Added extra debug logging for retry attempts with multiple package sources

    Related to [#335](https://gitlab.com/versionlens/vscode-versionlens/-/issues/335)

## Npm

  - Replaced pacote with npm-registry-fetch which is what pacote uses to fetch npm packages. This has reduced the size of bundling versionlens by around 1MB

# 1.7.3

## Maven

  - Fixed an extension loading issue when a maven pom.xml file causes the xml parser to crash on start up.

    Related to [#330](https://gitlab.com/versionlens/vscode-versionlens/-/issues/330)

  - Xml parser has been updated to use the full xml path to find dependency elements.

    `versionlens.maven.dependencyProperties` default settings

    ```js
    "default": [
      "project.dependencies.dependency",
      "project.parent"
    ]
    ```

## Dotnet

  - Xml parser has been updated to use the full xml path to find dependency elements. 

    `versionlens.dotnet.dependencyProperties` default settings

    ```js
    "default": [
      "Project.Sdk",
      "Project.ItemGroup.GlobalPackageReference",
      "Project.ItemGroup.PackageReference",
      "Project.ItemGroup.PackageVersion",
      "Project.ItemGroup.DotNetCliToolReference"
    ]
    ```

## All providers

  - Replaced the up arrow and folder indicators in the default settings so they render correctly on the mac.
  
    - "Directory": "📁 "
    - "Updateable": "↑ "

    Related to [#331](https://gitlab.com/versionlens/vscode-versionlens/-/issues/331)

  - Added an extra space to all indicators on mac\linux. This does not apply to windows.

    Related to [#331](https://gitlab.com/versionlens/vscode-versionlens/-/issues/331)

# 1.7.2

## All providers

  - Fixed a character glitch in the file exclude pattern which caused version lens to search the node_modules 
    when the extension first loads. This made version lens initialize slower for larger projects.

    ![image](https://gitlab.com/versionlens/vscode-versionlens/uploads/a24c518454257c6224a0991f5da4619a/image.png)

    Unit tests also had the same character glitch and therefore passed when checking the exclude pattern.

    Related to [#327](https://gitlab.com/versionlens/vscode-versionlens/-/issues/327)

## Dart

  - Fixed a spacing issue after clicking an updatable link for blank version entries that have `# comments` on the same line.

# 1.7.1

## All providers

  - Fixes cases where 'satisifies latest' didn't offer a bump update suggestion link

    This fix also comes with an adjustment to the indictor group used for 'satisifies latest' statuses.

    ```js
    {
      "Directory": "🖿 ",  // clickable folder links (used by dart or npm)
      "Error": "🔴",      // i.e "invalid version" or "package not found"
      "Latest": "🟢",     // "latest x.x.x"
      "NoMatch": "⚪",    // "no match" or "not supported"
      "Match": "🟡",      // "fixed x.x.x" or satisfies x.x.x or "satisfies latest x.x.x"
      "Updateable": "🠝 "  // up arrow used to show updateable links "🠝 latest x.x.x"
    }
    ```

# 1.7.0

## All providers

  - Added unicode indicators to help identify versions that have updates

    The indicators can be customized in the settings `versionlens.suggestions.indicators`

    Related to [#328](https://gitlab.com/versionlens/vscode-versionlens/-/issues/328)

  - Fixed an issue where certain ranged version expressions that didn't satisfy the latest version were not showing updateable links.

    The updateable link is called `🠝 bump x.x.x`.

    Related to [#329](https://gitlab.com/versionlens/vscode-versionlens/-/issues/329)

  - Editor icons for version lens now match the size of the built in icons in the editor/title bar

# 1.6

## All providers

  - Updated version suggestion text

    - Shows 'safisfies latest x.x.x' when range expressions match the latest version Related to [#289](https://gitlab.com/versionlens/vscode-versionlens/-/issues/289)

    - Shows 'safisfies x.x.x' when range expressions match an existing version that is not the latest

    - Shows 'latest x.x.x' when an exact version matches the latest version.

    - Shows 'latest x.x.x' when a dist tag (i.e. 'latest') is the latest version Related to [#289](https://gitlab.com/versionlens/vscode-versionlens/-/issues/289)

    - Shows 'fixed x.x.x' when a dist tag is not the latest version

    - Stopped suggesting latest version when a range expression matches the latest version

    - Fixed a crash when no minimum version was found when filtering prereleases

  - Updated caching logic

    - The cache is no longer reset when de-activating the 'V' icon.
      This is to allow caching across all project/package files in the workspace.

      To clear the cache manually there is now a command called 
      `VersionLens: Clear cache`.
      This can be found by pressing `ctrl + shift + p` and searching for "VersionLens"

## Npm

  - Fixed an ERR ENOENT error when using an .npmrc file without an .env file

    Related to [issue [#324](https://gitlab.com/versionlens/vscode-versionlens/-/issues/324)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/324)

  - No longer caches per package.json file.

    Related to [issue [#322](https://gitlab.com/versionlens/vscode-versionlens/-/issues/322)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/322)

## DotNet

  - Added suggestions for the VersionOverride attribute.

    `<PackageReference Include="Newtonsoft.Json" VersionOverride="13.0.1" />`

# 1.5.2

## Pub (dart)

  - Removed retracted versions from the pub api results

# 1.5.1

## Pub (dart)

  - Updated pub api endpoint to fix missing tagged versions and sort order

     Related to [issue [#323](https://gitlab.com/versionlens/vscode-versionlens/-/issues/323)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/323)

## All providers

  - Dependency updates to app npm modules

# 1.5.0

## Pub (dart)

  - added basic `hosted`, `path` and `git` suggestions to pubspec files

  > **NOTE** hosted authorization isn't implemented yet

  Thanks to [ekasetiawans](https://gitlab.com/ekasetiawans) for providing 
  an example [merge request](https://gitlab.com/versionlens/vscode-versionlens/-/merge_requests/269) hosted solution

## DotNet

  - Fixed an issue where converting nuget ranges (1.0.*) weren't resolving pre-releases due to a typo in the code

## Npm

  - Increased performance when fetching dependencies by setting the before parameter 
    in the [pacote](https://www.npmjs.com/package/pacote) options to the current fetch date+time 

# 1.4.1

  - Fixed incorrect project path during extension activation
  - Fixed version lens failing to load when opening a package file in vscode with no workspace open
  - Fixed lower case output channel name back to the proper case "VersionLens"

# 1.4.0

## All providers

  Added ability to filter pre-release tags.

  Some authors publish many different pre-releases that are newer than the given version. This can sometimes create a long list of noise when wanting to view pre-releases.
  
  So this option is available to filter pre-release tags. `1.0.0-{pre-release-tag}.1`

  The default is an empty array `[]` which will show all the newest pre-release versions (as it did in previous versions of `version lens`).

  |Provider|Setting
  |-|-
  |**Composer**|`versionlens.composer.prereleaseTagFilter`
  |**Dotnet**|`versionlens.dotnet.prereleaseTagFilter`
  |**Dub**|`versionlens.dub.prereleaseTagFilter`
  |**Npm**|`versionlens.npm.prereleaseTagFilter`
  |**Maven**|`versionlens.maven.prereleaseTagFilter`
  |**Pub**|`versionlens.pub.prereleaseTagFilter`

  Example: `["alpha", "beta"]` will only show alpha and beta pre-releases

  Related to [issue [#315](https://gitlab.com/versionlens/vscode-versionlens/-/issues/315)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/315)

## Npm

  Fixed an issue where `.npmrc` files weren't being parsed by the `@npmcli/config`.

  This occurred because `@npmcli/config` doesn't walk up directories to find `.npmrc` files because it only searches upwards for `package.json` files.

  Version lens now

  - checks if there is an `.npmrc` file at the currently open `package.json` path
  - if it doesn't exist then it checks for an `.npmrc` at the workspace root path
  - if no `.npmrc` files exist it will provide `@npmcli/config` the package path (as it did for previous versions of `version lens`)

## DotNet

 - Fixed an issue where sometimes "non-semver"" four segment versions where 
   showing a suggestion due to a "/g" regex that kept its state 
   between calls and caused intermittent true/false values.

 - Now writes the package sources list to the debug log for diagnostics

   Related to [issue [#310](https://gitlab.com/versionlens/vscode-versionlens/-/issues/310)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/310)

## DotNet, Maven and Npm

  Functionality for the following settings were removed a long time ago but these settings were still present in `version lens` causing confusion.

  Use the `prereleaseTagFilter` setting instead (mentioned above).

  | Unused settings removed
  |-
  |`versionlens.npm.distTagFilter`
  |`versionlens.dotnet.tagFilter`
  |`versionlens.maven.tagFilter`

  Reported in [issue [#287](https://gitlab.com/versionlens/vscode-versionlens/-/issues/287)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/287)

# 1.3.0

## All providers

  - Added a check to see if the `editor.codeLens` setting is set to `true`.
    Will print a log message if it's disabled to assist troubleshooting.
    > This extension will not work if codeLens is disabled.

## Npm

  - added `overrides` support by adding the ability to match child packages using a `.*` expression at the end of json paths in the `versionlens.npm.dependencyProperties` setting

  **example**

  ```js
  "versionlens.npm.dependencyProperties": [
    "overrides",
    "overrides.*",
    "pnpm.overrides",
    "pnpm.overrides.*",
  ]
  ```

  ```js
  {
    "overrides": {
      "semver": "5.3.0",
      // "overrides.*" means that the children of "package-xyz" will be parsed
      "package-xyz": {
        "typescript": "4.9.5",
        "semver": "0.1"
      }
    }
  }
  ```

  > **NOTE**
  >
  > - This can be applied to all providers who have json file types.
  > - The default **pnpm** `dependencyProperties` has been updated with this feature update.
  > - It doesn't verify if parent package names are valid or if their child entries are actually child dependencies of the parent package.
  A package manager should pick up these types of issues upon install anyway.

# 1.2.2

  - Fixed an issue where sometimes the open flag was false when opening a document

  - Added handled error logs to the output channel to show failed fetch status codes

# 1.2.1

  **All providers**

  - The previous release (v1.2.0) was supposed to be a `preview release`. Vscode no longer recognizes previews whilst marketplace still does.

  - Fixed wrong default settings for `onSaveChanges` settings which stops the annoying task popup on save.

# 1.2.0

  **All providers**

  - Added parallism to all fetch requests for a performance boost

  - Added ability to run a custom task defined in your tasks.json when you save a package document. (runs only when there are dependency changes)

    The new contributions are:

    |Provider|Contribution
    |-|-
    |**Composer**|`versionlens.composer.onSaveChanges`
    |**Dotnet**|`versionlens.dotnet.onSaveChanges`
    |**Dub**|`versionlens.dub.onSaveChanges`
    |**Npm**|`versionlens.npm.onSaveChanges`
    |**Maven**|`versionlens.maven.onSaveChanges`
    |**Pub**|`versionlens.pub.onSaveChanges`

    See [Will this extension install packages?](#will-this-extension-install-packages) for more information and example

  - Cache is now reset each time the version lens icon "V" is turned on.

    This prevents having to wait for the cache to expire when 
    wanting the very latest updates or diagnosing issues.

    > **NOTE**
    >
    > Caching `versionlens.caching.duration` setting still defaults to 3 minutes. It's not recommended to set this to 0 unless your diagnosing issues.

  - Added the time taken (in milliseconds) for each package fetch request to the info log

  - Added overall time taken for all package fetches to the info log

# 1.1.1

  - **pnpm** added override name dependency handling. i.e `axios@<1`

    Reported in [issue [#312](https://gitlab.com/versionlens/vscode-versionlens/-/issues/312)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/312)

    Thanks to [tjx666](https://gitlab.com/tjx666) for providing an example solution

  - **npm** Fixed an issue where invalid npm package names would cause an exception.
    Will now show `Invalid entry` for invalid npm package names

# 1.1.0

- **All providers**

  You can now specify which files to register with version lenses. 
  
  You can use [minimatch](https://github.com/isaacs/minimatch) expressions to match file names. 
  
  You will need to restart vscode when changing these settings.

  The defaults are the same settings that were used internally prior to this change.

  > **NOTE** File types are fixed and cannot be changed in contributions at this time

  The new contributions are: 

  |Provider|Type|Contribution|Default
  |-|-|-|-
  |**Composer**|json|`versionlens.composer.files`|`**/composer.json`
  |**Dotnet**|xml|`versionlens.dotnet.files`|`**/*.{csproj,fsproj,targets,props}`
  |**Dub**|json|`versionlens.dub.files`|`**/{dub.json,dub.selections.json}`
  |**Npm**|json|`versionlens.npm.files`|`**/package.json`
  |**Maven**|xml|`versionlens.maven.files`|`**/pom.xml`
  |**Pub**|yaml|`versionlens.pub.files`|`**/pubspec.yaml`

  > Be aware that changing a setting to something like `**/*.json` would tell version lens to activate for all json files. So be specific like `**/filename.ext`

  Reported in [issue [#313](https://gitlab.com/versionlens/vscode-versionlens/-/issues/313)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/313)

  Thanks to [tjx666](https://gitlab.com/tjx666) for providing an example solution

- **PNpm** Added ability to view `pnpm.overrides` versions in package.json

  Reported in [issue [#312](https://gitlab.com/versionlens/vscode-versionlens/-/issues/312)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/312)

  Thanks to [tjx666](https://gitlab.com/tjx666) for providing an example solution

- **Jspm** is now part of the npm provider.

  The following entries have been added to the `versionlens.npm.dependencyProperties` contribution setting

    - "jspm.dependencies""
    - "jspm.devDependencies"
    - "jspm.peerDependencies"
    - "jspm.optionalDependencies"

- **Npm** Fixed an issue where npm config wasnt using the user config causing private registry authentication to fail.

  - reported in [issue [#314](https://gitlab.com/versionlens/vscode-versionlens/-/issues/314)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/314)
  - reported in [issue [#311](https://gitlab.com/versionlens/vscode-versionlens/-/issues/311)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/311)

# 1.0.14

- **npm** Fixed an issue where `.npmrc` was not taking variables from `.env` files

  Reported in [issue [#274](https://gitlab.com/versionlens/vscode-versionlens/-/issues/274)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/274)

  Thanks to [npappas](https://gitlab.com/npappas)

# 1.0.12

- **Dotnet** Added GlobalPackageVersion to 'versionlens.dotnet.dependencyProperties' https://learn.microsoft.com/en-us/nuget/consume-packages/central-package-management#global-package-references

  Requested in [issue [#307](https://gitlab.com/versionlens/vscode-versionlens/-/issues/307)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/307)

- **Dotnet** Added 'Sdk' node name to dependency props to allow sdk version inspection.

  `<Sdk Name="Microsoft.Build.CentralPackageVersions" Version="2.1.3" />`

  Requested in [issue [#304](https://gitlab.com/versionlens/vscode-versionlens/-/issues/304)](https://gitlab.com/versionlens/vscode-versionlens/-/issues/304)

- Added terser-webpack-plugin to minify release code without breaking the ioc containers

# 1.0.11

- **Composer** Updated packagist api to v2 https://repo.packagist.org/p2 (thanks to https://gitlab.com/Zerogiven1)

- Maintenance updates for runtime packages

- Updated nodejs dev packages (notably webpack 5 and typescript 4.8.4)

# 1.0.10

- **Dotnet** Added PackageVersion to 'versionlens.dotnet.dependencyProperties' setting for "central package versioning"

  Reported in [#278](https://gitlab.com/versionlens/vscode-versionlens/issues/278)

- **Dotnet** Fixed "package not found" where the package name case now has to be lower case whenusing the nuget autocomplete api

  Reported in [#299](https://gitlab.com/versionlens/vscode-versionlens/-/issues/299)

# 1.0.9

- Ensures config urls have end slashes.

  Reported in [#273](https://gitlab.com/versionlens/vscode-versionlens/-/issues/273)

  Part of the fix thanks to [@Yiiu](https://gitlab.com/Yiiu)

- Package dependencies updated

- Moved source code to gitlab https://gitlab.com/versionlens/vscode-versionlens

# 1.0.8

- Logging level can now be changed without restarting vscode

- Writes all caught exceptions by api clients (even when handled) to the [debug] log

- **Npm** Handles a case where pacote returns a 'Not implemented yet' error

  reported in [#254](https://github.com/vscode-contrib/vscode-versionlens/issues/254)

- **Npm** Handles bad requests preventing suggestions from appearing

  reported in [#236](https://github.com/vscode-contrib/vscode-versionlens/issues/236)

- **Dotnet** Fixes errors when nuget resource client fails

  reported in [#262](https://github.com/vscode-contrib/vscode-versionlens/issues/262)

# 1.0.7

- Added a troubleshooting section to the [README](https://github.com/vscode-contrib/vscode-versionlens/blob/master/README.md)

- **Npm:** fixed github auth token not being passed to request client

  reported in [#210](https://github.com/vscode-contrib/vscode-versionlens/issues/210)

- **Npm:** reverted pacote to 9.5.12 for private registry auth fix (#245)

  reported in [#243](https://github.com/vscode-contrib/vscode-versionlens/issues/243)

  reported in [#244](https://github.com/vscode-contrib/vscode-versionlens/issues/244)

- **Npm:** fixes a range condition where "latest" instead of "satisfies latest | latest x.x.x" was appearing

  reported in [#248](https://github.com/vscode-contrib/vscode-versionlens/issues/248)

# 1.0.6

- The vscode bug installing this plugin is now resolved [#98366](https://github.com/microsoft/vscode/issues/98366)

# 1.0.5

- Fixed case where prerelease suggestions weren't being ordered in semver order 

  ![image](https://user-images.githubusercontent.com/1727302/82839431-4023f400-9ec7-11ea-9e58-b1cde7980302.png)

- **Npm**: Indicates cases when a prerelease has been published as the latest tag in contradiction to npm documentation guidelines. (reported in [#219](https://github.com/vscode-contrib/vscode-versionlens/issues/219))

  ![image](https://user-images.githubusercontent.com/1727302/82831912-9a19bf00-9eb1-11ea-83f9-755488d26921.png)

  ![image](https://user-images.githubusercontent.com/1727302/82839527-94c76f00-9ec7-11ea-8250-96ddc3724403.png)

# 1.0.4

- **Npm**: Ensures unsupported git urls get an unsupported status (reported in [#215](https://github.com/vscode-contrib/vscode-versionlens/issues/215))

- **Npm**: Fixed an issue where orphan versions higher than the latest version would appear as a latest suggestion (reported in [#219](https://github.com/vscode-contrib/vscode-versionlens/issues/219)

- **Dotnet**: Ensures disabled sources retrieved from the dotnet cli are't used [#222](https://github.com/vscode-contrib/vscode-versionlens/pull/222)

# 1.0.3

- **Npm**: Fixes a case where prereleases were not being suggested (related to [#216](https://github.com/vscode-contrib/vscode-versionlens/issues/216))

# 1.0.1

- **Dotnet**: Fixed unsecure 'http' nuget sources not being resolved. (reported in [#200](https://github.com/vscode-contrib/vscode-versionlens/issues/200))

- **Dotnet**: Fixed suggestions breaking in a project file when the xml became invalid. (reported in [#204](https://github.com/vscode-contrib/vscode-versionlens/issues/204))

- **Dotnet**: Added a fallback url if the cli causes an error when getting sources. (reported in [#195](https://github.com/vscode-contrib/vscode-versionlens/issues/195))

- **Npm**: Gracefully handles 'unauthorized' and 'connection refused' scenarios. (reported in [#205](https://github.com/vscode-contrib/vscode-versionlens/issues/205))

  ![image](https://user-images.githubusercontent.com/1727302/82630330-488bde80-9bea-11ea-8e08-ed7ff7f83324.png) 
  
  ![image](https://user-images.githubusercontent.com/1727302/82630439-956fb500-9bea-11ea-88d2-d155e2f8b02e.png)

- **All**: Added an option to set strictSSL to `false` to allow unsigned private registries (reported in [#201](https://github.com/vscode-contrib/vscode-versionlens/issues/201)) 

  `versionlens.http.strictSSL` or `versionlens.{provider}.http.strictSSL`.

- **All**: Added an error icon that you can click to focus on the output channel to read the error.

![image](https://user-images.githubusercontent.com/1727302/82630121-b2f04f00-9be9-11ea-8bf1-dc2fb955df75.png)

# 1.0.0

- Added logging to the output channel.

  Logging level can be set using `versionlens.logging.level`.

  Currently defaults to `error` level.

- Added cache duration option `versionlens.caching.duration`.

  Specifies how long (in minutes) version suggestions will be cached.

  Default duration is 3 minutes.

  Setting the duration to 0 will disable caching.

- Version code lenses will no longer show by default on start up.

  You can use the **V** icon in the text editor toolbar to show\hide versions on demand.

  You can customize this by setting `versionlens.suggestions.showOnStartup` to `"true"`.

- **Dotnet**: Now automatically retrieves nuget source feeds using the output of `dotnet nuget list source` under the cwd of the open project file.

  You can add new sources using the dotnet cli. 

  Alternatively you can add sources using the `versionlens.dotnet.nuget.sources` setting. The default is an empty list.

  If specified, the `versionlens.dotnet.nuget.sources` takes priority for resolution of packages. Each source has to be a v3 compatible 'service index' endpoint e.g. https://api.nuget.org/v3/index.json which contains a PackageBaseAddressService entry.

  In the event a package cannot be found (404) then it will retry the next source in the list.

  Requested in [#75](https://github.com/vscode-contrib/vscode-versionlens/issues/75), [#171](https://github.com/vscode-contrib/vscode-versionlens/issues/171), [#170](https://github.com/vscode-contrib/vscode-versionlens/issues/170)

- **Dotnet**: Fixed dotnet parser crash when a PackageReference is missing a version attribute. (reported in [#195](https://github.com/vscode-contrib/vscode-versionlens/issues/195))
- **Npm**: Replaced the old npm cli api with [npm pacote api](https://github.com/npm/pacote)
- **Npm**: Added support for github semver syntax e.g. "github:repo\project#semver:x.x.x" (requested in [#156](https://github.com/vscode-contrib/vscode-versionlens/issues/156))
- **Pub**: Fixed CRLF issue when parsing YAML (reported in [#193](https://github.com/vscode-contrib/vscode-versionlens/issues/193))
- **Pub**: Fixed a bug where the wrong latest version would appear (reported in [#198](https://github.com/vscode-contrib/vscode-versionlens/issues/198))

- Some contributions have been deprecated or renamed. See contributions tab in the [marketplace](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens) or any squiggled options in your settings.json will give you more information.

- Note: Outdated information is not in this release. It shall be re-introduced in a future release if still applicable.

# 0.27.0

- All: Fixed an issue where repeatedly clicking a code lens would spawn addition numbers in the version field. (reported in [#154](https://github.com/vscode-contrib/vscode-versionlens/issues/154))
- Pub: Added ability to set the pub api url for searching packages using `versionlens.pub.apiUrl` (thanks to https://github.com/hanabi1224)
- Pub: Now inspects "version" child properties
- Pub: Fixed crash when package versions were blank (thanks to https://github.com/davidmartos96)
- Pub: Stopped "no commands" code lenses appearing when the package doesn't exist
- NPM: fixed missing latest codelenses when the version was valid but didn't exist in registry
- DotNet: Prevented invalid analysis on 4 segmented (non-semver) versions eg. 1.2.3.4 (reported in [#119](https://github.com/vscode-contrib/vscode-versionlens/issues/119) and [#169](https://github.com/vscode-contrib/vscode-versionlens/issues/169))

# 0.26.2

- NPM: Fixed issue where "npm view" would crash the plugin (Reported in [#190](https://github.com/vscode-contrib/vscode-versionlens/issues/190))

# 0.26.1

- Dart: Fixed the issue where code lenses were appearing in the wrong locations in the editor
- NPM: Fixes a "Credentials not used" error when using .npmrc (Reported in [#185](https://github.com/vscode-contrib/vscode-versionlens/issues/185))

# 0.26.0
  - NPM: Added module aliasing support e.g. "<alias>@npm:<name>" (reported in [#174](https://github.com/vscode-contrib/vscode-versionlens/issues/174))

# 0.25.0
  - Added PHP composer support (thanks to https://github.com/Cerzat43)

# 0.24.0

  - Dart+Flutter support added (thanks to https://github.com/Gorniv)
  - DotNet: Added Update attr support. Relates to [#143](https://github.com/vscode-contrib/vscode-versionlens/issues/143)
  - Bower: Removed

# 0.23.0

 - Maven: Support for repositories defined in pom.xml (not only settings and central)
 - Maven: Support for local repository (case when a package is not in a repository but only in .m2/repository)
 - Maven: Better tagged version
 - Maven: Show when a package is not found
 - Maven: Use maven binary from path to get effective settings based

 - DotNet: Adds configuration options which allow multiple custom NuGet feeds

 - Bower: Will be removed in the next release

Maven work is all thanks to https://github.com/fcrespo82

DotNet work is all thanks to https://github.com/Hoffs

# 0.22.0

  - Added Maven support for Java. (thanks to https://github.com/fcrespo82)
  - NPM: Fixed an issue where some prefixed versions were being shown as the latest version when they weren't. See https://github.com/vscode-contrib/vscode-versionlens/issues/113
  - NPM: Added .npmrc support by setting --prefix flag to the currently open package.json file working dir

# 0.21.2

  - Dotnet: Prevented unlisted versions from appearing. (thanks to https://github.com/frankyjuang) https://github.com/vscode-contrib/vscode-versionlens/issues/108
  - NPM: Fixed tagged versions showing as invalid. https://github.com/vscode-contrib/vscode-versionlens/issues/112
  - Now shows 'prerelease x.x.x' for preleases

# 0.21.1

  - NPM: Fixed an issue where the spinning progress would not stop when invalid local file paths were entered. (https://github.com/vscode-contrib/vscode-versionlens/issues/104)

# 0.21.0

  - Added support for dotnet target and prop files (thanks to https://github.com/cilerler) https://github.com/vscode-contrib/vscode-versionlens/pull/99
  - Ensured `bower info` is called from the cwd. Fixes https://github.com/vscode-contrib/vscode-versionlens/issues/102

# 0.20.1

  - Fixed an issue where codelenses would break because the npm package contained http+ssh. See https://github.com/vscode-contrib/vscode-versionlens/issues/86
  - Fixed an issue where dub.selections.json files weren't being detected

# 0.20.0

  - Fixes a bug that occurs when a package only has pre-release versions (thanks to https://github.com/jmezach) https://github.com/vscode-contrib/vscode-versionlens/issues/94

# 0.19.1

  - Fixes a case where pre releases were being treated as older versions

# 0.19.0

 - This release only supports vscode v1.13.0 onwards
 - Takes advantage of the codelens reload feature that was fixed in vscode v1.13.0 https://github.com/Microsoft/vscode/issues/26168
 - Fixed annoying jumps in the document after replacing the version text. Related to https://github.com/vscode-contrib/vscode-versionlens/issues/55

   ![smooth-fixes](https://user-images.githubusercontent.com/1727302/26998682-771cf304-4d7f-11e7-815e-3523aa83d2f5.gif)

 - Added editor icon to toggle dependency statuses.

# 0.18.1

  - Fixed unicode arrows not showing on osx and some linux dists
  - Changelogs viewed from vscode extension panel has a [markdown table bug](https://github.com/Microsoft/vscode/issues/26841).
  
    The formatted changelog for 0.18.0 is [here](https://github.com/vscode-contrib/vscode-versionlens/blob/master/CHANGELOG.md#0180)

# 0.18.0

  - Added clearer matching reasons

    |Label Shown|When the version entered|
    |-|-|
    |Prerelease|is ahead of the latest version|
    |Latest|matches the latest|
    |Satisfies latest|is a range that matches the latest|
    |Fixed to x.x.x|is fixed and not the latest|
    |No match found: x.x.x|was found in the provider registry|
    |Invalid version entered|was invalid|

  - Clearer outdated statuses

    |Colour|Text shown|Status|
    |-|-|-|
    |green|x.x.x installed|Installed at latest|
    |yellowgreen|x.x.x prerelease installed|Installed is a prerelease ahead of latest|
    |orange|x.x.x installed, npm update needed|Installed but different to the entered version|
    |orange|x.x.x installed|Older than the latest|
    |red|Missing install|Not installed|

  - Added [nuget ranges and floating versions](https://docs.microsoft.com/en-us/nuget/create-packages/dependency-versions#version-ranges) for dotnet
  - Tags are sorted in recent version order
  - Fixed git+https github urls breaking all codelenses for npm
  - Fixes invalid version entries breaking all codelens for npm

# 0.17.2
  - Dub now correctly identifies packages that are not found. Thanks to @WebFreak001
  - Dub install status decorations are now showing correctly. Thanks again to @WebFreak001
  - Jspm: Handles scenarios where no code lenses would render when an invalid registry was given. Thanks to @eamodio
  - Npm: Handles unsupported protocols which prevented code lenses from rendering.

# 0.17.1
  - Fixed issue where tagged versions shown were older than the required version entered. (NPM and DotNet)

    Old horror before this fix

    ![image](https://cloud.githubusercontent.com/assets/1727302/26019089/cff76926-376a-11e7-8a70-824861117332.png)

    Now shows as

    ![image](https://cloud.githubusercontent.com/assets/1727302/26018962/1c10c970-376a-11e7-859a-ef409dab4bc5.png)

  - Some packages in NPM have multiple tags with the same version as what 'latest' provides. When this is the case these tags are not shown.

  - Fixed edge case where many tagged versions caused install decorations to appear on wrong line

# 0.17.0
  - Added tagged version support to dotnet projects (i.e. 1.2.3-beta.1, 1.2.3-rc.1)

    ![image](https://cloud.githubusercontent.com/assets/1727302/25976984/20b32294-36b0-11e7-83b8-ede7f05c1f14.png)

    To filter out packages that have many unwanted tagged versions you can set a preferred list using `versionlens.dotnet.tagFilter` 
  - Latest version will show by default instead of being hidden behind the tagged versions option
  
    ![image](https://cloud.githubusercontent.com/assets/1727302/25977208/d4d51812-36b1-11e7-8e5d-884c09daabe9.png)

  - Fixed non-existing version detection

# 0.16.2
  - Fixes issue where dependency decorations were being stuck on the wrong line after a mutli line edit.
  - Made dependency colours configurable in user settings. Will help if the default colours are difficult to see for a specific theme (CSS colours are valid entries)
    - `versionlens.missingDependencyColour: Default 'red'`
    - `versionlens.outdatedDependencyColour: Default 'orange'`
    - `versionlens.installedDependencyColour: Default 'green'`

# 0.16.1
  - Fixes a bug where dependency decorations could leak in to wrong documents

# 0.16.0
  - Added outdated information for npm

    ![image](https://cloud.githubusercontent.com/assets/1727302/25782781/c6352e30-3348-11e7-8cbe-f056140cce8a.png)

  - Added 'latest' to the dist tags for npm and jspm. This gives the ability to always see the latest version regardless of what version is matched in the package.

    ![image](https://cloud.githubusercontent.com/assets/1727302/25782884/46d11af8-334a-11e7-9a6d-b47e6f0f5f7d.png)

  - Fixes an edge case where npm view doesn't return the list of versions in chronological order. The only edge case found so far is when "x" is sepcified as the version

  - Added fsharp project extensions for dotnet core

    ![image](https://cloud.githubusercontent.com/assets/1727302/25782857/eafb2d9a-3349-11e7-981a-5447bed61210.png)

  - Stopped editor toolbar icons showing in diff mode

# 0.15.0
  - Added two new icon tools to the the editor toolbar

    ![image](https://cloud.githubusercontent.com/assets/1727302/25782819/75ec2f86-3349-11e7-8e38-a4e3d5b7c2d7.png)

    - You can show or hide versions. 
      `versionlens.showVersionLensesAtStartup` defaults to `true`
    - You can show or hide tagged versions.
      `versionlens.showTaggedVersionsAtStartup` defaults to `false`
    - `versionlens.npm.showTaggedVersions` has been dropped in favour of this new change

  - `github.compareOptions` is now called `github.taggedCommits`. 
  
    `latest` will always be the latest `commit`. This field now only accepts ['Release', 'Tag'] which is the default filter

# 0.14.1
  - Fixed a case where npm view doesn't return latest tag as the first entry.

# 0.14.0
  - Added ability to view versions associated with dist tags for npm and jspm.

    Example:

    ![image](https://cloud.githubusercontent.com/assets/1727302/25671395/c913e674-3027-11e7-910e-51a17905215c.png)

    - To enable set `versionlens.npm.showTaggedVersions: true`
    - To filter out packages that have many unwanted dist tags you can set a preferred list using `versionlens.npm.distTagFilter`.

      Example: `versionlens.npm.distTagFilter: ['alpha', 'beta', 'legacy', 'next']` will only show and order the dist tags as 'alpha', 'beta', 'legacy' and 'next'

  - Renamed 'statisfies' to 'Matches'
  - Fixed the ordering of github versions to always be ordered as releases, tags then commits
  - Removed ability to update all packages. 
    Sometimes this feature never worked because you first had to scroll all the packages in to view.
    Will work on a better method for this feature in the future.

# 0.13.0
  - Added dotnet core csproj file support. Thanks to [@eamodio](https://github.com/eamodio)

# 0.12.2
  - Fixes an issue where ranged versions (i.e. 1.x) were showing the incorrect update verion for npm and jspm
  - Moved error messages to the console. They should no longer appear as a code lens

# 0.12.1
  - Fixes an issue where code lenses were not showing for jspm in package.json
  
# 0.12.0

  - Adds ability to provide github access token to avoid github api rate limiting

    Tokens can be provided by setting `versionlens.github.accessToken` in your user settings. To generate a token see https://help.github.com/articles/creating-an-access-token-for-command-line-use/#creating-a-token

    When no token is provided then access to the api will be rate limited to 60 requests every 10 minutes or so.

  - Adds indication for github packages that dont exist

  - Project dependency properties can now be customised via vscode settings. The default settings keep the previoussetup so nothing will break.

    ```json
    // vscode settings.json example
    {
      "versionlens.npm.dependencyProperties": [
        "dependencies",
        "devDependencies",
        "peerDependencies",
        "optionalDependencies",
        "myCustomDependencies"
      ]
    }
    ```

# 0.11.0
  - Can now choose to update all packages within a dependency section. i.e. update all beneath devDependencies.

    ![update-all-example](https://cloud.githubusercontent.com/assets/1727302/20415826/c7244f98-ad32-11e6-9c25-ada420828d8c.gif)

    **Note**

      - Because code lenses are not generated until they are viewed in the editor then only code lenses that have been viewed since opening the document can be updated. 
        If you have many dependencies that go off the screen then just scroll them all in to view once before running the update all command for maximum coverage.
      - This functionality ignores github and file package entries.

  - Now checks if an npm `file:` package path exists and provides indication when the resource does not exist.

    ![file-existence](https://cloud.githubusercontent.com/assets/1727302/20415939/7b1843d8-ad33-11e6-8444-bc4ae6d8e555.gif)

# 0.10.0
  - Added github commitish support for npm, jspm and bower. Doesn't support pre-releases yet.

    ![npm-comittish](https://cloud.githubusercontent.com/assets/1727302/20376535/69a638a8-ac7f-11e6-8408-857759c21106.gif)

    Also supports semver releases\tags 

    ![npm-comittish2](https://cloud.githubusercontent.com/assets/1727302/20376610/1669b59c-ac80-11e6-9415-94ed83066f0b.gif)

# 0.9.1
  - Fixes invalid message when using tags i.e. @next

# 0.9.0
  - Github and local file system packages are now treated as clickable links that browse to their respective destinations. (git urls are not implemented yet)

# 0.8.0
  - Added support for npm private packages and private registries

# 0.7.1
  - Replaces update arrow indicator to be a unicode charachter due to change in vscode 1.7. See https://github.com/Microsoft/vscode/issues/13714 for more info.

# 0.7.0
  - Adds support for preserving some semver operators when updating

# 0.6.0
  - Added jspm package support

# 0.5.0
  - Added npm scoped packages support

# 0.4.3
  - Fixes versionlens for dub sub packages

# 0.4.2
  - Transferred this project over to https://github.com/vscode-contrib/vscode-versionlens

# 0.4.1
  - Replaces internal json module with external
  - Replaces internal request module with external

# 0.4.0
  - Adds dotnet project.json support
  - Fixes issue when a child version entry is not present

# 0.3.0
  - Adds dub dub.json support
