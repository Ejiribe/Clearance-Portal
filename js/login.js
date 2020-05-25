function validateUser(regNo) {

  const students = ["2015/199864", "2015/199869", "2015/200147"];

  if (!/\d{4}\/\d{6}/.test(regNo)) {
    document.getElementById("demo").innerHTML = 'Invalid Reg Number!!';
  }
  else if (!students.includes(regNo)) {
    document.getElementById("demo").innerHTML = `No Student Found With Reg Number <b>${regNo}</b>`;
  }
  else {
    window.localStorage.setItem('currentUser', regNo);
    window.location = 'index.html'; 
  }
}