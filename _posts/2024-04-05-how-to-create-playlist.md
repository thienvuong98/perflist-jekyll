---
layout: post
title:  "How to Create/Update Playlist - 2024"
date:   2024-04-05 11:02:37 -0700
categories: playlist
---
## Steps to create a playlist and make available for others

This just put up a quick note on how to create/update the playlist from the shared excel sheet

* Get the URL of the sheet (from browser) - open up the shared spreadsheet for song and copy the URL

* Create a local playlist .yml file - named it playlist/_playlist_.yml, with the following content. These are just guidelines - there are no restriction on the field names. Those will be printed on the playlist.

   ```
   ---
   title: Some title for your playlist
   date: 03/30/2024
   location: 
   ```

* Populate the data from the spreadsheet to the playlist file
	```
  hav.rb load-sheet playlist/<playlist>.yml
  ```
    * This will download the sheet, parse for the useful information. Then for each song, will search for the lyrics source from hopamhay, hopamchuan, or hopamviet and fill in the key to the playlist. This is a best guest attempts (but is quite good) so you may need to verify the afterward
    * This could be run incrementally. It would ignore any entries already processed previously.  Also, if this step discover new song, the next step to fetch lyrics must follow.
	
* Fetch lyric to a temporary file 

  ```
  hav.rb find-missing playlist/<playlist>.yml | tee store-new.yml
  ```

    * This searches and downloads the lyrics from the sites if any are missing from local song_store

* Add the file content to song_store.yml (manually).  Edit, go to end of file, and read in store-new.yml

* Edit song_store.yml for the new song perf_url (video from youtube). If these are pulled from hopamchuan, there is a list of perf_links that you may pull from. Only choose the youtube links. 

    * *The video selected should be embeddable - but there is no indication at youtube, so you'll have to try. Mostly, vietnamese videos are embeddable, foreign are not*

* [If you want loops] Last step is to play the video, and extract the info for intro/mid/out to add in the loop parts, and add that into *playlist*.yml

* [Optiona] If have time and song is good, may want to re-chord again with personal version in hopamchuan. Versions on public site are generic and may not work well for all videos.

* Build site and deploy

  ```
  hav.rb build-site --deploy
  ```
