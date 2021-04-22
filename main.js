var names=[
    "Family:Family book",
    "Appa:Murli",
    "Amma:Shubha",
    "Sister:Aadya",
    "Myself:Shreya"
];
var images=[
  "Family.jpg",
    "https://comps.gograph.com/father-and-baby-kiss_gg66829244.jpg",
    "https://i.pinimg.com/736x/5b/75/26/5b75264812ae75bdb521f3e6a941f397.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6q9QoG4J5V9IUVk590a4Xv_-seUGQZrM2Q&usqp=CAU",
    "https://i.pinimg.com/originals/a1/39/3f/a1393f844157d448ce64b2fb277f6ecc.jpg"
];
var i=0;
function next()
{i++;
  var fam=4;
  if(i>fam)
  {
    i=0;
  }
    document.getElementById("family_name").innerHTML=
    names[i];
  document.getElementById("family_image").src=
    images[i];
  
   
}