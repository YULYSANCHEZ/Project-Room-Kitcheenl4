// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

function Modalshow() {
  document.getElementById("myModal").style.display = "flex";
  document.getElementById("LockSound").play();
}
function Modalhide() {
  document.getElementById("LockSound").play();
  document.getElementById("myModal").style.display = "none";
}
function Modalshow2() {
  document.getElementById("myModal2").style.display = "flex";
  document.getElementById("LockSound").play();
}
function Modalhide2() {
  document.getElementById("LockSound").play();
  document.getElementById("myModal2").style.display = "none";
}
function Modalshow3() {
  document.getElementById("myModal3").style.display = "flex";
  document.getElementById("papersound").play();
}
function Modalhide3() {
  document.getElementById("papersound").play();
  document.getElementById("myModal3").style.display = "none";
}
function Modalshow4() {
  document.getElementById("myModal4").style.display = "flex";
  document.getElementById("papersound").play();
}
function Modalhide4() {
  document.getElementById("papersound").play();

  document.getElementById("myModal4").style.display = "none"; //on clicking "x", hide modal, display is "none"
}

function changeNumber1(img) {
  console.log(img);
  if (img.src.includes("images/one.png")) {
    img.src = "images/3-b.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("3-b.png")) {
    img.src = "images/6-b.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("6-b.png")) {
    img.src = "images/2-b.png";
    document.getElementById("Type").play();
    document.getElementById("square1").classList.add("non_clickable");
  } else {
    img.src = "images/one.png";
    document.getElementById("Type").play();
  }
  CorrectGold();
}

function changeNumber2(img) {
  console.log(img);
  if (img.src.includes("images/one.png")) {
    img.src = "images/2-b.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("2-b.png")) {
    img.src = "images/8-b.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("8-b.png")) {
    img.src = "images/3-b.png";
    document.getElementById("Type").play();
    document.getElementById("square2").classList.add("non_clickable");
  } else {
    img.src = "images/one.png";
    document.getElementById("Type").play();
  }
  CorrectGold();
}

function changeNumber3(img) {
  console.log(img);
  if (img.src.includes("images/one.png")) {
    img.src = "images/6-b.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("6-b.png")) {
    img.src = "images/5-b.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("5-b.png")) {
    img.src = "images/2-b.png";
    document.getElementById("Type").play();
    document.getElementById("square3").classList.add("non_clickable");
  } else {
    img.src = "images/one.png";
    document.getElementById("Type").play();
  }
  CorrectGold();
}

function changeNumber4(img) {
  console.log(img);
  if (img.src.includes("images/one.png")) {
    img.src = "images/5-b.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("5-b.png")) {
    img.src = "images/2-b.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("2-b.png")) {
    img.src = "images/8-b.png";
    document.getElementById("Type").play();
    document.getElementById("square4").classList.add("non_clickable");
  } else {
    img.src = "images/one.png";
    document.getElementById("Type").play();
  }
  CorrectGold();
}

function CorrectGold() {
  if (
    square1.src.includes("6-b.png") &&
    square2.src.includes("2-b.png") &&
    square3.src.includes("5-b.png") &&
    square4.src.includes("8-b.png") &&
    goldheart.src.includes("images/gold.png")
  ) {
    console.log();
    goldheart.src = "images/pigpen.png";
    lock.src = "images/pigpen.png";

    document.getElementById("win1").play();
  }
}

function changeLetters1(img) {
  console.log(img);
  if (img.src.includes("images/f.png")) {
    img.src = "images/e.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("e.png")) {
    img.src = "images/a.png";
    document.getElementById("Type").play();
    document.getElementById("face1").classList.add("non_clickable");
  } else {
    img.src = "images/f.png";
    document.getElementById("Type").play();
  }
}

function changeLetters2(img) {
  console.log(img);
  if (img.src.includes("images/r.png")) {
    img.src = "images/c.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("c.png")) {
    img.src = "images/s.png";
    document.getElementById("Type").play();
    document.getElementById("face1").classList.add("non_clickable");
  } else {
    img.src = "images/r.png";
    document.getElementById("Type").play();
  }
  Correctletters();
}

function changeLetters2(img) {
  console.log(img);
  if (img.src.includes("images/r.png")) {
    img.src = "images/c.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("c.png")) {
    img.src = "images/s.png";
    document.getElementById("Type").play();
    document.getElementById("face2").classList.add("non_clickable");
  } else {
    img.src = "images/r.png";
    document.getElementById("Type").play();
  }
  Correctletters();
}

function changeLetters3(img) {
  console.log(img);
  if (img.src.includes("images/a.png")) {
    img.src = "images/e.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("e.png")) {
    img.src = "images/c.png";
    document.getElementById("Type").play();
    document.getElementById("face3").classList.add("non_clickable");
  } else {
    img.src = "images/a.png";
    document.getElementById("Type").play();
  }
  Correctletters();
}

function changeLetters4(img) {
  console.log(img);
  if (img.src.includes("images/p.png")) {
    img.src = "images/a.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("a.png")) {
    img.src = "images/r.png";
    document.getElementById("Type").play();
    document.getElementById("face4").classList.add("non_clickable");
  } else {
    img.src = "images/p.png";
    document.getElementById("Type").play();
  }
  Correctletters();
}

function changeLetters5(img) {
  console.log(img);
  if (img.src.includes("images/e.png")) {
    img.src = "images/p.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("p.png")) {
    img.src = "images/r.png";
    document.getElementById("Type").play();
    document.getElementById("face5").classList.add("non_clickable");
  } else {
    img.src = "images/e.png";
    document.getElementById("Type").play();
  }
  Correctletters();
}

function changeLetters6(img) {
  console.log(img);
  if (img.src.includes("images/s.png")) {
    img.src = "images/f.png";
    document.getElementById("Type").play();
  } else if (img.src.includes("f.png")) {
    img.src = "images/e.png";
    document.getElementById("Type").play();
    document.getElementById("face6").classList.add("non_clickable");
  } else {
    img.src = "images/s.png";
    document.getElementById("Type").play();
  }
  Correctletters();
}

function Correctletters() {
  if (
    face1.src.includes("e.png") &&
    face2.src.includes("s.png") &&
    face3.src.includes("c.png") &&
    face4.src.includes("a.png") &&
    face5.src.includes("p.png") &&
    face6.src.includes("e.png")
  ) {
    window.location.href = "https://qlhy3p.csb.app/ ";
  }
}

function BlackBox(img) {
  console.log(img);
  if (img.src.includes("images/blackBox.png")) {
    img.src = "images/5.png";
    document.getElementById("Box").play();
    document.getElementById("one").classList.add("non_clickable");
  }
}

function BlackBox2(img) {
  console.log(img);
  if (img.src.includes("images/blackBox2.png")) {
    img.src = "images/2.png";
    document.getElementById("Box").play();
    document.getElementById("two").classList.add("non_clickable");
  }
}

function BlackBox3(img) {
  console.log(img);
  if (img.src.includes("images/blackBox3.png")) {
    img.src = "images/8.png";
    document.getElementById("Box").play();
    document.getElementById("three").classList.add("non_clickable");
  }
}
function BlackBox4(img) {
  console.log(img);
  if (img.src.includes("images/blackBox4.png")) {
    img.src = "images/6.png";
    document.getElementById("Box").play();
    document.getElementById("four").classList.add("non_clickable");
  }
}
