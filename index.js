console.log(`Students Annual Charges:`);

var student = {
    name: "Faiza",
    fname:"Inam",
    fees: 2000,
     transfer: 1000,
     discountMonths: [3 ,6],
     calcAnnual: function(percentIfDisc) {
     var bestPrice = student.fees;
     var currDate = new Date();
     var stud = currDate.getMonth();
  
     for (var i = 0; i < student.discountMonths.length; i++) {
     if (student.discountMonths[i] === stud) {
     bestPrice = student.fees * percentIfDisc;
     break;
     }
     }
     return bestPrice * 12;
        }
      };
    
      var calcAnnual=student.calcAnnual()
  console.log(`${student.name} ${student.fname} annual charges are ${calcAnnual}` );


  var student = {
    name: "Raima",
    fname:"Muneer",
    fees: 3000,
     transfer: 1000,
     discountMonths: [3 ,6],
     calcAnnual: function(percentIfDisc) {
     var bestPrice = student.fees;
     var currDate = new Date();
     var stud = currDate.getMonth();
  
     for (var i = 0; i < student.discountMonths.length; i++) {
     if (student.discountMonths[i] === stud) {
     bestPrice = student.fees * percentIfDisc;
     break;
     }
     }
     return bestPrice * 12;
        }
      };
    
      var calcAnnual=student.calcAnnual()
  console.log(`${student.name} ${student.fname} annual charges are ${calcAnnual}` );

var student = {
    name: "Aleeha",
    fname:"Aslam",
    fees: 4000,
     transfer: 1000,
     discountMonths: [3 ,6],
     calcAnnual: function(percentIfDisc) {
     var bestPrice = student.fees;
     var currDate = new Date();
     var stud = currDate.getMonth();
  
     for (var i = 0; i < student.discountMonths.length; i++) {
     if (student.discountMonths[i] === stud) {
     bestPrice = student.fees * percentIfDisc;
     break;
     }
     }
     return bestPrice * 12;
        }
      };
    
      var calcAnnual=student.calcAnnual()
  console.log(`${student.name} ${student.fname} annual charges are ${calcAnnual}` );

  
var student = {
    name: "Dua",
    fname:"Islam",
    fees: 4000,
     transfer: 1000,
     discountMonths: [3 ,6],
     calcAnnual: function(percentIfDisc) {
     var bestPrice = student.fees;
     var currDate = new Date();
     var stud = currDate.getMonth();
  
     for (var i = 0; i < student.discountMonths.length; i++) {
     if (student.discountMonths[i] === stud) {
     bestPrice = student.fees * percentIfDisc;
     break;
     }
     }
     return bestPrice * 12;
        }
      };
    
      var calcAnnual=student.calcAnnual()
  console.log(`${student.name} ${student.fname} annual charges are ${calcAnnual}` );

  
var student = {
    name: "Ayesha",
    fname:"Sarwar",
    fees: 4000,
     transfer: 1000,
     discountMonths: [3 ,6],
     calcAnnual: function(percentIfDisc) {
     var bestPrice = student.fees;
     var currDate = new Date();
     var stud = currDate.getMonth();
  
     for (var i = 0; i < student.discountMonths.length; i++) {
     if (student.discountMonths[i] === stud) {
     bestPrice = student.fees * percentIfDisc;
     break;
     }
     }
     return bestPrice * 12;
        }
      };
    
      var calcAnnual=student.calcAnnual()
  console.log(`${student.name} ${student.fname} annual charges are ${calcAnnual}` );