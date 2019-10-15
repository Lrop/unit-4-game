// Setting players names and values
let attackPower;
let opponent;
let healthPoints;
var players = {
  player1: {
    name: "OBI -WAN- KENOBI",
    attackPower: Math.random() * 50,
    healthPoints: 140,
    counterattackPower: Math.random() * 40
  },

  player2: {
    name: "DARTH MAUL",
    attackPower: Math.random() * 50,
    healthPoints: 130,
    counterattackPower: Math.random() * 40
  },

  player3: {
    name: "COUNT DUKU",
    attackPower: Math.random() * 50,
    healthPoints: 150,
    counterattackPower: Math.random() * 40
  },

  player4: {
    name: "PALPATINE",
    attackPower: Math.random() * 50,
    healthPoints: 120,
    counterattackPower: Math.random() * 40
  }
};
console.log(players);

//Moving players into correct postion after being selected

$(document).ready(function() {
  $(".player1").click(function() {
    $(".player1").appendTo(".p3");
  });
});

$(document).ready(function() {
  $(".player2").click(function() {
    $(".player2").appendTo(".p3");
  });
});

$(document).ready(function() {
  $(".player3").click(function() {
    $(".player3").appendTo(".p3");
  });
});

$(document).ready(function() {
  $(".player4").click(function() {
    $(".player4").appendTo(".p3");
  });
});
//Defender area/Moving player when selected
//<---------------------------------------------->

$(document).ready(function() {
  $(".player1").click(function() {
    $(".player1").appendTo("#defenderArea");
    $(".p1").text("OPPONENTS");
  });
});

$(document).ready(function() {
  $(".player2").click(function() {
    $(".player2").appendTo("#defenderArea");
  });
});

$(document).ready(function() {
  $(".player3").click(function() {
    $(".player3").appendTo("#defenderArea");
  });
});

//<---------------------------------------------->
//Botton Section

function reloadPage() {
  location.reload(true);
}

function attackFunction(player1, player2) {
  player1.healthPoints -= player2.counterattackPower;
  player2.healthPoints -= player1.attackPower;
}
