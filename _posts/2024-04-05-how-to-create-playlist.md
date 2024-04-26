---
layout: post
title:  "How to Create/Update Playlist - 2024"
date:   2024-04-05 11:02:37 -0700
categories: playlist
---
## Steps to create a playlist and make available for others

This just put up a quick note on how to create/update the playlist from the shared excel sheet

* Open up the shared spreadsheet for song (the one shared from Google Drive)

* Select download to 'CSV'

* Run conversion of CSV to yaml output 

   ```hav.rb csv-to-list <download-csv-file> | tee csv.yml```

* Edit the playlist.yml file and read csv.yml in at the end.  For the new content,  fill in field **play_url**.  This could be filled by searching hopamchuan (prefer) or hopamviet of the link to song lyric.

* Fetch lyric to a temporary file using command

  ```hav.rb find-missing playlist/<playlist>.yml | tee store-new.yml```

  * *This is a pain now.  We like to use hopamviet, but it puts up a bot blocking so can no longer pull the page by script.   If you really want to use hopamviet, you need to go to the page there, and manually cut/paste lyrics and other info and add into song_store*.

* Add the file content to song_store.yml (manually)

* Edit song_store.yml for the new song perf_url.   If these are pulled from hopamchuan, there is a list of perf_links that you may pull from.  Only choose the youtube links. 

  * *The video selected should be embeddable - but there is no indication at youtube, so you'll have to try.   Mostly, vietnamese videos are embeddable, foreign are not*

* [If you want loops] Last step is to play the video, and extract the info for intro/mid/out to add in the loop parts, and add that into *playlist*.yml

* [Optiona] If have time and song is good, may want to re-chord again with personal version in hopamchuan.   Version on either hopamviet/hopamchuan is generic and may not work well for all videos.

