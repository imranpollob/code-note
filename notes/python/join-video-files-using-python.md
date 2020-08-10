---
title: Join / Merge video files using python
tags:
  - python
---

We will use `moviepy` package that is very convenient to merge video files.

Here's the script

```python
from moviepy.editor import VideoFileClip, concatenate_videoclips

clip1 = VideoFileClip("first.mp4")
clip2 = VideoFileClip("second.mp4")

final_clip = concatenate_videoclips([clip1, clip2])

final_clip.write_videofile("joined_file.mp4")
```