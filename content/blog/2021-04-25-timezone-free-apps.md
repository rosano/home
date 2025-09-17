---
date: 2021-04-25T21:37:32.000Z
slug: timezone-free-apps
title: Timezone-free apps
tags:
  - Apps
wiki_id: 01f45fep7czqkpgt1cfzk5pg06
---
The traditional approach to storing time information in software is to convert to a machine-centered timezone such as [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated%5FUniversal%5FTime) (or UTC), and then convert it back to local time for the interface.

This approach is precise but at the cost of some mental dissonance when the timezone changes: you did something at 8pm yesterday, then the timezone changed (because you travelled somewhere far away, or because of daylight savings time), and now your late evening activity shows as 3pm or something else.

When there needs to be coordination between multiple entities, the precise method is necessary, but when the record is personal—only relevant to the one person that creates it—it may make more sense to register time with a more human-centered approach. Applications for this could be journal entries or voice recordings: looking back, it can be more meaningful in these use cases to know in which part of the day the events occured, rather than in machine time.

In place of storing timezone information, local time can be translated to a fixed representation (using UTC, for example): 8pm local time is stored as 8pm UTC, and it is translated back for the interface as 8pm local time. Timezone information is effectively stripped, which is 'wrong' from a precision perspective, but it means that if you did something at 8pm and then changed timezones, you could look back on that event and it would still be displayed as 8pm, which is more personally meaningful than the equivalent in machine time.

An issue with this alternative representation is that when you 'gain time' by traveling, you may have events out of order—you did something at 8pm, then you changed timezones and did something subsequent at 7pm _the same day_—but it may still be worthwhile depending on how often you change timezones and how much precision you need. This method aims to center the representation of time to reflect one's perception of night and day.
