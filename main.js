array1=[];
function submit(){
  array2=[];  
  for(var fish=1; fish<=4; fish++){

  var  crab =document.getElementById("name_of_the_student_"+fish).value;
  console.log(crab);
  array1.push(crab);

  }
  console.log(array1);
  var sea=array1.length;
  console.log(sea);
  for(var blobfish=0; blobfish<sea;blobfish++){
      array2.push("<h4>name-"+array1[blobfish]+"</h4>");
      console.log(array2);
  }
  console.log(array2);
  document.getElementById("display_name_with_commas").innerHTML=array2;
  var puffin=array2.join(" ");
  console.log(puffin);
  document.getElementById("display_name_without_commas").innerHTML=puffin;
  document.getElementById("submit_button").style.display="none";
  document.getElementById("sort_button"),style.display="inline-block";
}

function sorting(){
    array1.sort();
    console.log(array1);
    var length=array1.length;
    console.log(length);
    array3=[];
    for(var blobfish=0; blobfish<length;blobfish++){
        array3.push("<h4>name-"+array1[blobfish]+"</h4>");
        console.log(array3);
    }
    var beach=array3.join(" ");
    console.log(beach);
    document.getElementById("display_name_without_commas").innerHTML=beach;
    
}