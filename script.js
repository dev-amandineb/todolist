const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li= document.createElement("li");

function inputlength () {
       return input.value.length;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
    }

    