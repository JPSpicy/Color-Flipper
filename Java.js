// set the inital value to zero
let count = 0;
// select the value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count-=10;
    } else if (styles.contains("increase")) {
      count+=10;
      //I also added a new else if with myArray function
    } else if (styles.contains("anything")) {
      count-=looksmaxing();
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

//made an array for the function
const array = ["19", "13", "69", "420", "125", "6 ", "79", "82", "99", "101"];

//randomize number function
function looksmaxing() {
  return Math.floor(Math.random() * array.length);
}