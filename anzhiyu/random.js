var posts=["2026/07/17/2026暑假Round9/","2026/07/15/2026暑假Round8/","2026/07/16/图匹配/","2026/07/14/welcome/","2026/07/18/2026暑假Round10/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };