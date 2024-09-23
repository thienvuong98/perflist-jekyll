---
layout: post
title:  "How to Create/Update Playlist - 2024"
categories: playlist
---
This just put up a quick note on how to create/update the playlist from the shared excel sheet

### Create performance list and download of lyrics

* You need a source google sheet. This could be shared by a friend, or you
  could create one using this
  [template](https://docs.google.com/spreadsheets/d/119yKYdejJG2rrk3LOxUufepnzM80_PtLTHQm3VUm94M).
  It must have the following columns: Singer, Song, Genre, Key.  Make that
  sheet globally sharable (should also be editable if you allow others
  to edit).  Fill in as much data as you have (mininum is the song and singer)

* Get the URL of the sheet (from browser) - open up the shared spreadsheet
  for song and copy the URL

* Run the following to create the local performance list

   ```plaintext
   perflist create-list <list-name> <google-sheet-url>
   ```

* Create a local playlist .yml file - named it playlist/_playlist_.yml, with
  the following content. Only the source field is required, the rest are
  just going to be printed on the playlist.

   ```plaintext
   ---
   title: Some title for your playlist
   date: 03/30/2024
   location: 
   source: <URL of Google Sheet>
   ```

* Populate the data from the spreadsheet to the playlist file

  ```bash
    perflist load-sheet --search-lyrics share/<playlist>.yml
    ```

* This will download the sheet, parse for the useful information. Then for
  each song, will search for the lyrics source from supported lyric sites
  and fill in the key to the playlist. This is a best guest attempt relying
  on the site search capability so you'll need to verify the content.

* Lyrics will be kept locally after initial download under share/lyrics/_song_name_.yml.
  After that, the source URL would not be touched, and you could post edit
  and change as much as you wanted.

* ```load-sheet``` could be run incrementally if you update the source sheet (add/change entries).
  However, entries will NOT be removed if you remove from the source. This need
  to be taken care manually.

* If you wanted to reload a lyric from the source, update the **url** field
  (if needed), and add a field **updating**: true to the yaml lyrics. The
  next time perflist load-sheet is run, it will check for any file
  needing update and download a fresh copy of lyrics from the specified
  URL.

### Enhancing content of lyrics data

The source lyric file only includes the basic lyrics and accompaniment. You’ll need to edit the stored file located under share/lyrics to add more details.

Next, find a matching YouTube video to play alongside the lyrics, and add the video performance section (video, loops, style, tempo, etc.).

Make sure the video you choose is embeddable. Unfortunately, YouTube doesn’t provide clear indicators for this, so you’ll have to try embedding it to check. Vietnamese videos are often embeddable, while foreign ones might not be.

If you want to create video loops, play the video and identify the sections (intro, mid, outro) to extract the timing and add them to the loop sections.

Once everything’s set, build and deploy the site using the following command:

```bash
perflist.rb build-site --deploy
```

Finally, verify the content on the site to ensure everything looks good.
