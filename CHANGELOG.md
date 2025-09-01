# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.9] - 2025-09-01

### Added
- Show `related` after body
- Show summary in meta.description

### Changed
- Group blog by year

### Fixed
- Exclude lyrics and timeline from `.RegularPages`
- Sort feed items descending

## [0.2.8] - 2025-08-31

### Added
- JSON list/output for each section

## [0.2.7] - 2025-08-30

### Fixed
- Increment lyric slugs until unique

### Changed
- Group Vibrations by year

## [0.2.6] - 2025-08-27

### Added
- Configure `logoURL`, `touchURL`, `_bannerScriptURL`, `RSSFeedURLs`, `lowerLyricTitles`, `timelineSources`

### Fixed
- Show remote assets only in production

## [0.2.5] - 2025-08-26

### Added
- Link via titles using `[[title]]` or `[alternate text](official title)` formats
- Show recorded in timeline

## [0.2.4] - 2025-08-24

### Added
- Prepends image paths with `params.mediaPrefix` in `hugo.yml`

## [0.2.3] - 2025-08-24

### Added
- Source links for lyric collection files
- Search and Translate links for lyric single pages
- Bidirectional link between lyric and Vibrations pages

## [0.2.2] - 2025-08-21

### Added
- Quote lyric text in single via `lyrics` param

## [0.2.1] - 2025-08-14

### Added
- Lyrics section

### Fixed
- exclude RSS feeds for `params._disabledFeedSections` in `hugo.yml`

## [0.2.0] - 2025-08-12

### Added
- Blog section

## [0.1.0] - 2025-08-11

### Added
- Vibrations section

## [0.0.2] - 2025-08-09

### Fixed
- Multiple sections

## [0.0.1] - 2024-01-18

### Added
- Initial version
