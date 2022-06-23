// like button
var like = document.querySelectorAll("svg");
for (i = 0; i < like.length; i++) {
  like[i].addEventListener("click", changecolor);
}
function changecolor() {
  // console.log(this);
  this.classList.toggle("active");
}

// delete items
var del = document.getElementsByClassName("remove");
for (i = 0; i < del.length; i++) {
  del[i].addEventListener("click", delrow);
}
var ncount = 4;
function delrow() {
  document
    .getElementById("table")
    .deleteRow(this.parentElement.parentElement.rowIndex);
  ncount--;
  document.getElementById("cart-count").innerHTML = ncount;
  var itemprice = this.parentElement.parentElement.querySelector(
    ".totalitemprice span"
  ).innerText;
  var delsup = document.getElementById("total");

  if (delsup.disabled == "true") {
    delsup.innerText = Number(delsup.innerText) - (Number(itemprice)/2);
  } else {
    delsup.innerText = Number(delsup.innerText) - Number(itemprice);
  }

  if (ncount == 0) {
    document.getElementById("table").deleteRow(0);
    var tag = document.createElement("h3");
    var text = document.createTextNode(
      "There are no more items in your cart..."
    );
    tag.appendChild(text);
    var element = document.querySelector("h1");
    element.appendChild(tag);

    document.getElementById("total").innerText = "0";
  }
}

// increase & decrease items
var totalsub = document.getElementById("total").innerText;
var itemprice = document.getElementsByClassName("itemprice");
var decbtn = document.getElementsByClassName("down");
var incbtn = document.getElementsByClassName("up");
var itemcount = document.getElementsByClassName("itemcount");

for (let i = 0; i < itemcount.length; i++) {
  incbtn[i].addEventListener("click", increasePrise);
  decbtn[i].addEventListener("click", decrisePrise);
}

// decreace function
function decrisePrise() {
  // var itemcountdown = el.target;
  var counttag = this.parentElement.querySelector("span").innerHTML;
  // console.log(counttag);
  var resdec = Number(counttag);
  resdec--;

  this.parentElement.querySelector("span").innerHTML = resdec;
  var inctotal = this.parentElement.parentElement.querySelector(
    ".totalitemprice span"
  ).innerText;

  //  console.log(inctotal);
  var itempriceel =
    this.parentElement.parentElement.querySelector(".itemprice span").innerText;
  // console.log(itempriceel);

  this.parentElement.parentElement.querySelector(
    ".totalitemprice span"
  ).innerText = Number(itempriceel) * Number(resdec);

  if (resdec <= 1) {
    this.parentElement.querySelector(".down").disabled = true;

    this.parentElement.querySelector(".itemcount").innerText = "1";

    this.parentElement.parentElement.querySelector(
      ".totalitemprice span"
    ).innerText = Number(itempriceel);
  }

  console.log(this.parentElement.querySelector("span").innerHTML);
  if (resdec > 1) {
    totalsub = document.getElementById("total").innerText =
      Number(totalsub) - Number(itempriceel);
  }
}
function increasePrise() {
  // console.log(this);
  //  var itemcountplus = e.target;
  var counttag = this.parentElement.querySelector("span").innerHTML;
  // console.log(counttag);
  var resinc = Number(counttag);
  resinc++;
  this.parentElement.querySelector("span").innerHTML = resinc;
  var inctotal = this.parentElement.parentElement.querySelector(
    ".totalitemprice span"
  ).innerText;
  //  console.log(inctotal);
  var itempriceel =
    this.parentElement.parentElement.querySelector(".itemprice span").innerText;
  // console.log(itempriceel);
  this.parentElement.parentElement.querySelector(
    ".totalitemprice span"
  ).innerText = Number(itempriceel) * Number(resinc);
  console.log(totalsub);

  totalsub = document.getElementById("total").innerText =
    Number(totalsub) + Number(itempriceel);
  this.parentElement.querySelector(".down").disabled = false;
}

// 50% discount
var apcode = document.getElementById("apcode");
apcode.addEventListener("click", applydiscount);
function applydiscount() {
  var total = document.getElementById("total").innerText;

  if (document.getElementById("code").value.toUpperCase() == "GOMYCODE") {
    document.getElementById("total").innerText = Number(total) / 2;
    apcode.disabled = true;
  }
}

// filre by item name
function filtert() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("Input");
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
