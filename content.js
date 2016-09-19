
function getWR(r) { return parseFloat(r.children[3].attributes["data-value"].value); }
function getHero(r) { return r.children[1].children[0].innerHTML; }

/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  /* If the received message has the expected format... */
  if (msg.text && (msg.text == "report_back")) {
    /* Call the specified callback, passing 
     * the web-pages DOM content as argument */
    var rs = document.getElementsByTagName('tbody')[0].children;
    var d = {};
    var da = {};
    var total = 0.0;

    //debugger; 

    for (var i = 0; i < rs.length; i++) {
      h = getHero(rs[i]);
      w = getWR(rs[i]);
      total += w;
      d[getHero(rs[i])]  = w;
      da[getHero(rs[i])] = total;
    }

    var n = Math.random() * total;
    var hero = "None";

    for (var h in da) {
      if (n <= da[h]) { hero = h; break; }
    }
    sendResponse("Chosen hero < " + hero + " > with win rate < " + d[hero] + "% >.")
  }
});
