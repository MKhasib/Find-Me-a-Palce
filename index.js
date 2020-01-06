var doc;

function getDataAsHTML(url, course) {
  $.get(url, function(data) {
    console.log("In getData:");

    // console.log(data);
    doc = data;
    getIndexOf(course);

  });
}

function findStatus(course) {
  var aTags = $(doc).find('td');
  var searchText = course;
  var found = false;

  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == searchText) {
      found = aTags[i];
      break;
    }
  }
  var head = $($(found).parent()[0]).parent()[0];
  // console.log("head:");
  // console.log(head);
  var child1 = $(head).children()[1];
  // console.log(child1);
  // console.log("Child:");
  // console.log(child1);

  child1 = $(child1).children()[0];
  // console.log("Child:");
  // console.log(child1);
  child1 = $(child1).children()[0];
  // console.log("Child:");
  // console.log(child1);
  child1 = $(child1).children()[0];
  // console.log("Child:");
  // console.log(child1);
  var children = $(child1).children();
  console.log(children.length);
  for (var i = 1; i < children.length; i++) {
    var data=$(children[i]).children()
     console.log(data[1]);
    // console.log(data[2]);
    // console.log(data[3]);
    // console.log(data[4]);
    switch(i){

      case 1:
var element=$("#one").children();
console.log(element[0].innerHTML=data[1].textContent);
console.log(element[1].innerHTML=data[1].textContent);
      console.log(element[2].innerHTML=data[2].textContent);
      console.log(element[3].innerHTML=data[3].textContent);
      console.log(element[4].innerHTML=data[4].textContent);



      break;
      case 2:
      var element=$("#two").children();
      console.log(element[0].innerHTML=data[1].textContent);
      console.log(element[1].innerHTML=data[1].textContent);
            console.log(element[2].innerHTML=data[2].textContent);
            console.log(element[3].innerHTML=data[3].textContent);
            console.log(element[4].innerHTML=data[4].textContent);


      break;
      case 3:
      var element=$("#three").children();
      console.log(element[0].innerHTML=data[1].textContent);
      console.log(element[1].innerHTML=data[1].textContent);
            console.log(element[2].innerHTML=data[2].textContent);
            console.log(element[3].innerHTML=data[3].textContent);
            console.log(element[4].innerHTML=data[4].textContent);


      break;
      case 4:
      var element=$("#four").children();
      console.log(element[0].innerHTML=data[1].textContent);
      console.log(element[1].innerHTML=data[1].textContent);
            console.log(element[2].innerHTML=data[2].textContent);
            console.log(element[3].innerHTML=data[3].textContent);
            console.log(element[4].innerHTML=data[4].textContent);


      break;
      case 5:
      var element=$("#five").children();
      console.log(element[0].innerHTML=data[1].textContent);
      console.log(element[1].innerHTML=data[1].textContent);
            console.log(element[2].innerHTML=data[2].textContent);
            console.log(element[3].innerHTML=data[3].textContent);
            console.log(element[4].innerHTML=data[4].textContent);


      break;
      case 6:
      var element=$("#six").children();
      console.log(element[0].innerHTML=data[1].textContent);
      console.log(element[1].innerHTML=data[1].textContent);
            console.log(element[2].innerHTML=data[2].textContent);
            console.log(element[3].innerHTML=data[3].textContent);
            console.log(element[4].innerHTML=data[4].textContent);


      break;
      case 7:
      var element=$("#seven").children();
      console.log(element[0].innerHTML=data[1].textContent);
      console.log(element[1].innerHTML=data[1].textContent);
            console.log(element[2].innerHTML=data[2].textContent);
            console.log(element[3].innerHTML=data[3].textContent);
            console.log(element[4].innerHTML=data[4].textContent);


      break;
      case 8:
      var element=$("#eight").children();
      console.log(element[0].innerHTML=data[1].textContent);
      console.log(element[1].innerHTML=data[1].textContent);
            console.log(element[2].innerHTML=data[2].textContent);
            console.log(element[3].innerHTML=data[3].textContent);
            console.log(element[4].innerHTML=data[4].textContent);


      break;
      case 9:
      var element=$("#nine").children();
      console.log(element[0].innerHTML=data[1].textContent);
      console.log(element[1].innerHTML=data[1].textContent);
            console.log(element[2].innerHTML=data[2].textContent);
            console.log(element[3].innerHTML=data[3].textContent);
            console.log(element[4].innerHTML=data[4].textContent);


      break;
    }
     }


  // console.log(doc);
  // console.log( found.parent().parent().getElementsByTagName("table")[0].getElementsByTagName("tr")[1].getElementsByTagName("td")[3].innerHTML);

}

function getIndexOf(course) {
  console.log("In getCourse:");

  var index = -1;
  findStatus(course);
  console.log("done:");

}
$("#button").click(function() {
  var url = $("#URL").val();
  var course = $("#Course").val();
  console.log("clicked:");


  console.log(  localStorage.setItem("URL", url));
  console.log(  localStorage.setItem("Course", course));
  getDataAsHTML(url, course);

});
if (typeof(Storage) !== "undefined") {
  // Store
  // Retrieve
  console.log("data:");
  console.log(localStorage.getItem("URL"));
  console.log(localStorage.getItem("Course"));
  $("#URL").val(localStorage.getItem("URL"));

$("#Course").val( localStorage.getItem("Course"));
}
