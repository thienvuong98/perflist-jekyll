---
layout: post
title: Creating Music Finder File
categories: playlist
---
## General

### Problem

We would like to prepare list of song/styles to be played for a performance.
Normally, we prepare some folder, copy the needed styles into it, and
optionally rename to the song name - sometimes also adding key to play and
other into the filename.

Selecting styles from folders requires multiple key presses. Each display
page could contain only 10 style entries (with short name), so would require
lots of paging to locate the style.

Then tempo needs to be set (most of the times, it is not the same as the
style), then current variation needs to be reset, and intro section needs
to be enabled, ... Lots of things to be done to get ready for next song.
All the while get distracted by various communication/signals during live play.

So I look at Music Finder file to simplify this process.

### Music Finder File

Yamaha keyboards (PSR) supports Music Finder files.  When loaded, it allows
you to quickly scroll through songs, enter key and have it ready to play.
The music finder screen contains much more info, easy to read and scroll
through quickly.

Once a song is selected, it setups

* Style to play
* Tempo to use
* Intro section to use, and get it ready at the 1st chord press
* Songs are automatically alphabetically

It is probably the fastest and most convenient setup to quickly select a
song to play.  This would be ideal to support gig list, where all songs to
be played in a performance is loaded into the music finder and is available
using 2-3 keypress with music already setup to play.

In addition, you could modify the song name to add additinal info (most
.often key to play).

A music finder file (extension .mfd) could be loaded and replace the current
list, or just append to it.  That's make it possible to have a base complete
music finder set, and the gig list would be marked as as favorites.  So it's
possible to have a gig list, but still keep our complete music finder intact
(in case you need to play some requests that are not preset on gig list)

In fact, MF has three separate tab pages - favorites, search_1, and search_2 so you
potentially could setup 3 different gig lists on there and just use tab to
switch (I don't though - simpler is better for live play)

Another use is you could also load your whole style library into music finder.
This is possible because

* Scrolling to search in sorted list is very fast there compared to folder selection
* MF has limit of 2500 entries, where as folder have limit of 500 (which make sense
  because at 500 it takes 50 clicks to go throug that max size folder - where as
  scrolling through MF with 2500 files is reasonably fast)

### My process

1. Have everything prepared and loaded from USB.  No dependencies on internal styles.
  You still needs to depend on internal sounds though.  Build and checkout workspace
  all on computer and sync to USB.
1. Use ```psr build-list``` to build the list of styles into a performance folder.
  I wrote this to simply selecting styles.  It uses fzf for interactive fuzzy
  search of styles and allow copy/rename to performance folder.  It also include
  tools to listen to styles, bring up OTS editor (for PSR Tutorial) to update OTS.
2. Once its in the folder, run PSR Style Database (from PSR Tutorial) on the
  performance folder.   This quickly scan the folder and generate style info
  into a datafile
3. Use an external db to track song/tempo for the style
4. Run ```psr gen-mfd``` to generate a MusicFinder file for that folder.
  This utilizes the output of PSR Style Database and external db to collect
  needed info.  I also have it look up data from my lyrics performance list
  (a separate component). Tell it to also mark the list with 'favorites' flag.
  I wrote this using info provided from PSR tutorial (only the missing part
  from info is to have style loaded from USB rather than using internal styles)
5. Copy the folder content to USB
6. Insert USB to keyboard, and press MusicFinder/Files load to load the
  generated MFD content.

### Preparation

* Copy all styles, sounds, pads, registration, etc, ... from PSR to computer
  so we could use it there

### Tools

* PSR Style Database - To scan style and generate text db.
* OTS Editor (sound and pad) - To edit/add OTS into style for live play
* Midi and Style Player - To preview style/intro during selection
* PSR script - my integration and building of MFD files

### Q&A

Q. Why don't I use Music Finder Manager (from PSR Tutorial).

A. This is excellent software with good functionality.  But with
  thousands of styles, the searching interface in MFM (windows based) is
  pretty primitive.  Also I would like to persist all the previous choices
  (thus external db), so ever new gig list does not have to be done from
  scratch. There is no preview of styles (I have to do it separately),
  which break the workflow and cause errors.  Plus, I'm a Unix/Linux
  command line person :).

