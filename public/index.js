let $red = document.querySelector(".red-team");
let $blue = document.querySelector(".blue-team");

let redScore;
let blueScore;

db.doc("battle/1").onSnapshot((doc) => {
  redScore = doc.data().red;
  blueScore = doc.data().blue;

  document.querySelector(".score-1").innerHTML = redScore;
  document.querySelector(".score-2").innerHTML = blueScore;

  $red.style.width = (redScore * 100) / (redScore + blueScore) + "%";
  $blue.style.width = (blueScore * 100) / (redScore + blueScore) + "%";
});

function clickButton() {
  location.reload();
}

function clickField(score) {
  score == "red"
    ? db.doc("battle/1").update({
        red: firebase.firestore.FieldValue.increment(1),
      })
    : db.doc("battle/1").update({
        blue: firebase.firestore.FieldValue.increment(1),
      });


}
