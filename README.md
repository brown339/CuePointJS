# CuePointJS
HTML5 video cue point creator.

## Use
**1. Add an HTML5 video element to your page.**
```
<video id="myVideo">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>
```

**2. Add an empty block element to your page.**
``` 
<div id="cueCards"></div>
```

**3. Call cuePoint(card_container, options) on the video element.**
```
var options = [
  points : [
    {
      time : "00:16",
      text : "Opening sequence."
    },
    {
      time : "03:14",
      text : "Some other descriptive caption.",
      playback : "pause"
    }
  ],
  
  hover : "hover",
  active : "active",
  inactive : "inactive"
  
];

$("#myVideo").cuePoint ("#cueCards", options);
```

**Options**
- points : **(object[ ])**
  - time : **(string)** The time at which to add a cue point.
  - text : **(string)** The descriptive caption.
  - playback : **(optional string) ["pause" / "play" (Default)]** Play or pause video on click.
  
- hover : **(string)** Class to use when hovering over cue cards.
- active : **(string)** Class to use for all cue points that lie before the current video time.
- inactive : **(string)** Class to use for all cue points that lie after the current video time.

## Styling
Cue points will be dynamically created as divs and appended to your card container. To style these simply add styling to the card container children.
```
#cueCards div {border:1px solid #333; border-radius:3px; padding:15px;}
````
