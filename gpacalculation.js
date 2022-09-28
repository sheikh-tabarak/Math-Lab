function FindPoint(grade) {
  var CR;

  // var select = document.getElementById('subject-1-grade');
  // var text = select.options[select.selectedIndex].text;

  console.log(grade);

  var text = grade;
  if (text == "1") {
    CR = 4;
  } else if (text == "2") {
    CR = 3.7;
  } else if (text == "3") {
    CR = 3.4;
  } else if (text == "4") {
    CR = 3.0;
  } else if (text == "5") {
    CR = 2.5;
  } else if (text == "6") {
    CR = 2.0;
  } else if (text == "7") {
    CR = 1.5;
  } else if (text == "8") {
    CR = 1.0;
  } else if (text == "9") {
    CR = 0.0;
    // document.getElementById('subject-1-points').value=CR;
  } else {
    document.getElementById("subject-1-points").value = "Select";
  }

  return CR;
}

function FindTotalPoints() {
  var totalPoints, totalGP;
  var S1, S2, S3, S4, S5, S6, S7;
  var GP1, GP2, GP3, GP4, GP5, GP6, GP7;
  var SGPA, CGPA;


 


  console.log(GP1 = document.getElementById("subject-1-cr").value);

  GP1 = document.getElementById("subject-1-gp").value;
  GP2 = document.getElementById("subject-2-gp").value;
  GP3 = document.getElementById("subject-3-gp").value;
  GP4 = document.getElementById("subject-4-gp").value;
  GP5 = document.getElementById("subject-5-gp").value;
  GP6 = document.getElementById("subject-6-gp").value;
  GP7 = document.getElementById("subject-7-gp").value;

  S1 = document.getElementById("subject-1-cr").value;
  S2 = document.getElementById("subject-2-cr").value;
  S3 = document.getElementById("subject-3-cr").value;
  S4 = document.getElementById("subject-4-cr").value;
  S5 = document.getElementById("subject-5-cr").value;
  S6 = document.getElementById("subject-6-cr").value;
  S7 = document.getElementById("subject-7-cr").value;

  if (S1 == undefined || S1 == 'Select' || S1== NaN) {
    S1 = 0;
  } 
  if (S2 == undefined || S2 =='Select' || S1== NaN) {
    S2 = 0;
  } 
   if (S3 == undefined || S3 =='Select' || S1== NaN) {
    S3 = 0;
  } 
   if (S4 == undefined ||S4 =='Select' || S1== NaN) {
    S4 = 0;
  }  if (S5 == undefined || S5 =='Select' || S1== NaN) {
    S5 = 0;
  }  if (S6 == undefined || S6 =='Select' || S1== NaN) {
    S6 = 0;
  }  if (S7 == undefined || S7 == 'Select' || S1== NaN) {
    S7 = 0;
  }

  var totalPoints =
    S1 / 1 +
    S2 / 1 +
    S3 / 1 +
    S4 / 1 +
    S5 / 1 +
    S6/ 1 +
    S7 / 1;

    console.log(S1);
    console.log(S4);
    console.log(S7);


  document.getElementById("total-points").value = totalPoints;
  console.log(totalPoints);


  if (GP1 ==  undefined || GP1=='NaN') {
    GP1 = 0;
  } if (GP2 == undefined || GP2=='NaN') {
    GP2 = 0;
  }  if (GP3 == undefined || GP3=='NaN') {
    GP3 = 0;
  }  if (GP4 == undefined || GP4=='NaN') {
    GP4 = 0;
  }  if (GP5 == undefined || GP5=='NaN') {
    GP5 = 0;
  }  if (GP6 == undefined || GP6=='NaN' ) {
    GP6 = 0;
  }  if (GP7 == undefined || GP7=='NaN') {
    GP7 = 0;
  }


  console.log(GP1+GP2+GP3+GP4+GP5+GP6+GP7);

  var totalGP =
   GP1 / 1+ GP2 / 1 + GP3 / 1 + GP4 / 1 + GP5 / 1 + GP6 / 1 + GP7 / 1;
   
    console.log('Total GP :'+totalGP);
  document.getElementById("total-gp").value = totalGP;

  SGPA = totalGP / totalPoints;
  document.getElementById("total-gpa").value = SGPA;



  var CurrentCGPA,CurrentCH;



  CurrentCGPA=document.getElementById('current-cgpa').value;

  CurrentCH=document.getElementById('current-cr').value;



var aggrigate;
aggrigate= ((totalPoints/1)+(CurrentCH/1));


[(totalPoints/aggrigate)*SGPA] + [(CurrentCH/aggrigate)*CurrentCGPA]

console.log('Total Point :'+totalPoints);
console.log('Agrigate :'+aggrigate);
console.log('Current Credit Hours :'+CurrentCH);
console.log('Current CGPA :'+CurrentCGPA);
console.log('Current SGPA :'+SGPA);



CGPA=((((totalPoints/aggrigate)*SGPA)/1) + (((CurrentCH/aggrigate)*CurrentCGPA)/1))


document.getElementById('total-cgpa').value = CGPA;

console.log(CGPA);
}


