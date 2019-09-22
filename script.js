/* Declaration variables: */
const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const li= document.createElement("li");

/* Commit for input value */
function inputlength () {
       return input.value.length;
}
/* Commit js */
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
    }

/* button print the page */
/*<script type="text/javascript">
       function imprimer_page(){
       window.print();
       }
</script>
