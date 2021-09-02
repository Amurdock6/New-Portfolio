window.onscroll = function () {
    let windowScroll = document.documentElement.scrollTop;
    let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollAmount = (windowScroll / windowHeight) * 100;
    document.getElementById("mybar").style.width = scrollAmount + "%";
  };

var whatPage = document.title;