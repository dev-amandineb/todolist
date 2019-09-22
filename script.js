console.log("todolist")

/* Declaration variables: */
const button = document.getElementById("enter");
const input = document.getElementById("input");
const li= document.getElementById("li");


/* Create functions */
function createNewElement(){
       const list = document.createElement('li');
       const inputvalue = document.getElementById("input").value;
       let textNode = document.createTextNode(inputvalue);
       li.appenchild(TextNode);

       if (inputvalue === ""){
              alert ("ouh lala, moi pas comprendre ce que tu veux!")
       } else {
              document.getElementById(list).appenchild(li)
       }
}

/* darkmode */


/* button print the page */
/*<script type="text/javascript">
       function imprimer_page(){
       window.print();
       }
</script>
