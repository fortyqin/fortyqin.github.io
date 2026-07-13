var posts=["2026/07/13/hello-world/","2026/07/12/树状数组/","2026/07/12/代码/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };