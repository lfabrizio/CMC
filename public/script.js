<script>
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
</script>
function search() {
    const input = document.getElementById("search").value;
    console.log(search)
    axios.get("/showprofile/" + input)
    .then(response => {
        document.getElementById("searchInfo").innerHTML = response.data
    })
 
   }

// need to switch variables
   function handleSubmit() {
    const searchName = document.getElementById("search-name").value;
    const userId = document.getElementById("user-id").value;
    const message = document.getElementById("message").value;
    console.log(userName, userId, message);
    const payload = {
        username: userName,
        id: userId,
        message
      }
      axios.post("/api/", payload)
        .then(response => {
          console.log(response)
        })
     
   }
   


   
