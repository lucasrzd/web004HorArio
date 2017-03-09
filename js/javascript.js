/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
 function Turma() {
    document.getElementById('turmas').style.display = "block";
    document.getElementById('professores').style.display = "none";
  }
  function Professor() {
      document.getElementById('professores').style.display = "block";
      document.getElementById('turmas').style.display = "none";
  }
  function myFunction(n) {
    if(document.getElementById(n).style.display == "block"){
      document.getElementById(n).style.display = "none";
    }else{
      document.getElementById(n).style.display = "block";
    }
  }

  function filterFunction(n,m) {
      var input, filter, a, i;
      input = document.getElementById(n);
      filter = input.value.toUpperCase();
      div = document.getElementById(m);
      a = div.getElementsByTagName("a");
      for (i = 0; i < a.length; i++) {
            if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
       }
      document.getElementById(m).style.display = "none";
  }
