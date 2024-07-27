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
   perflist.py create-list <list-name> <google-sheet-url>
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
    perflist.py load-sheet --reorder --search-lyrics share/<playlist>.yml
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
  (if needed), and add a field **updating**: true to the yaml lyrics. Then
  run ```perflist.rb update-lyrics```. It will check for any file needing
  update and download a fresh copy of lyrics from the specified URL.

### Enhancing content of lyrics data

Source lyric only contains the lyric/accompaniment without much else.
You should post edit the stored file under share/lyrics for additional data

* Getting youtube video matching play and adding the vido performance section (video, loops, style, tempo, ....)

* The video selected should be embeddable. There is no indication looking at
  youtube, so you'll have to try. Mostly, vietnamese videos are embeddable,
  foreign are not

* If you want video loops - Play the video, and extract the info for intro/mid/out to add in the loop parts,

* Build site and deploy

  ```bash
  perflist.rb build-site --deploy

* Validate content at site

>
