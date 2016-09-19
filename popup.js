/*document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');

  checkPageButton.addEventListener('click', function() {
    var rs = document.getElementsByTagName('tbody')[0];
    window.alert("haha " + rs);
    var rs = $('tbody').children();

    var d = {};
    var da = {};

    function getWR(r) { return parseFloat(r.children[3].attributes["data-value"].value); }
    function getHero(r) { return r.children[1].children[0].innerHTML; }

    total = 0.0;
    for (var i = 0; i < rs.length; i++) {
      h = getHero(rs[i]);
      w = getWR(rs[i]);
      total += w;
      d[getHero(rs[i])]  = w;
      da[getHero(rs[i])] = total;
    }

    function randomHero() {
      var n = Math.random() * total;
      console.log("Randomed: " + n);

      var hero = "None";

      for (var h in da) {

        if (n <= da[h]) { hero = h; console.log(n + " is less than " + da[h]); break; }
      }
      console.log("Chosen hero <" + hero + "> with win rate <" + d[hero] + ">." );
    }
  });
});
*/
