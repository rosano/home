# Home

_Where my online world lives_

An attempt to collect my online publishing across various platforms into one 'home'.

# Features
- local time and place on all posts site-wide based on post date (add to [`assets/departures.csv`](https://github.com/rosano/home/blob/master/assets/departures.csv) in destination timezone)
- [syndication links](https://rosano.ca/vibrations/m4879q4m/) for crossposts on other platforms (`youtube_id`, `mastodon_id`, `bluesky_id`, `twitter_id`, `facebook_id`, `nostr_id`, `threads_id`)
- 'Source' links on every post to direct edit via GitHub (`params.sourcePrefix` in `hugo.yaml`)

## [Journal](https://rosano.ca/log)
- list mixing various sections together, grouped by day and filterable by location or `tags`
- browse [by year](https://rosano.ca/log/2024), [by month](https://rosano.ca/log/2023/06), [by day](https://rosano.ca/log/2024/03/12), [by place](https://rosano.ca/log/place/oxford), [by country](https://rosano.ca/log/country/united-arab-emirates) (based on `date`)
- [embed rendering](https://rosano.ca/log/01k208ka0ffjawrw9aq479t8te/) (when setting `link`)

## [Video posts](https://rosano.ca/vibrations)
- list without pagination, grouped by month, focused on thumbnails (`duration`)
- [recording date](https://rosano.ca/vibrations/m3sj7h9a/) separate from publish date (`around`)
- [previous / next as thumbnails](https://rosano.ca/vibrations/m1n63wm7/)

## [Blog](https://rosano.ca/blog)
- list without pagination and grouped by month
- [summary callout](https://rosano.ca/blog/bringing-vibrations-home) (`summary`)

# Powered by [Hugo](https://gohugo.io)

Notable aspects include:
- [content adapter](https://github.com/rosano/home/blob/master/content/timeline/_content.gotmpl) to generate pages dynamically from journal entries. Normally you’d use this for external data, but here it’s my solution for to create time taxonomy for the journal content.
- [monorepo](https://github.com/rosano/home) that merges the theme and content. Probably wouldn’t make sense to swap this theme with another as the content is intended to be laid out and paginated in specific ways.
- special pagination by ‘number of days’ rather than ‘number of posts’, and [corresponding feed](https://rosano.ca/log/feed).

## Run it locally

First [install Hugo](https://gohugo.io/installation/) extended edition; I prefer the [pre-built binary](https://github.com/gohugoio/hugo/releases/latest).

Then start the web server which reloads on any change:

```
hugo server
```
