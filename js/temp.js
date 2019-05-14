class Question {
  constructor(id, QHeader, A1, A2, A3, A4, CA) {
      this.id = id;
      this.QHeader = QHeader;
      this.A1 = A1;
      this.A2 = A2;
      this.A3 = A3;
      this.A4 = A4;
      this.CA = CA;
  }
  // create(question) {
  //     return new Question(question.id, question.QHeader, question.A1, question.A2, question.A3, question.A4, question.CA)
  // }
}
///
/*-------------------------generate random Question----------------*/
function getrandomQuestion() {
  let id;
  let flag = true;
  do {

      id = Math.trunc(Math.random() * 10);
      if (Exam.indexOf(id) == -1) {
          Exam.push(id);
          flag = false;
      }
  } while (flag);

  return id;
}
//
/**--------------- *generate new question ad push to exam--------------- */
function GenerateQuestion() {
  if (watingQuestion.length <= 0 && Exam.length <= 5) {
      let Qid = getrandomQuestion();
      addQuestionToHtml(QArray[Qid]);
      currentQuestion++;
      if (Exam.length > 5) {
          if (skipedQuestions.length > 0) {
              var ans = confirm('Do you want to answer skipped Questions?')
              if (ans == true) {
                  addQuestionToHtml(QArray[skipedQuestions.shift()]);

              }
              else {
                  ShowResult()
              }
          }
          else {
              ShowResult()
          }

      }
  }
  else if (watingQuestion.length > 0) {
      currentQuestion++;
      let qid = watingQuestion.shift();
      addQuestionToHtml(QArray[qid]);
  }
  else if (skipedQuestions.length > 0) {
      let qid = skipedQuestions.shift();
      addQuestionToHtml(QArray[qid]);
  }
}
function addQuestionToHtml(htmlQuestion) {
  QId.textContent = currentQuestion+1;
  qHeader.textContent = htmlQuestion.QHeader;
  A1.innerHTML = htmlQuestion.A1;
  A2.innerHTML = htmlQuestion.A2;
  A3.innerHTML = htmlQuestion.A3;
  A4.innerHTML = htmlQuestion.A4;
}
function ShowResult() {
  window.location.pathname = "E:\\ITI\\js\\Project\\result.html";
}
///
/*-------------------------exam question----------------*/
var QArray = new Array(10);
QArray[0] = new Question('1', "I ..... tennis every Sunday morning.", 'playing', 'play', 'am playing', 'am play', 'play');
QArray[1] = new Question('2', "Don't make so much noise. Noriko ..... to study for her ESL test!", 'try', 'tries', 'tried', 'is trying', 'is trying');
QArray[2] = new Question('3', 'Jun-Sik ..... his teeth before breakfast every morning.', 'will cleaned', 'is cleaning', 'cleans', 'clean', 'cleans');
QArray[3] = new Question('4', "Sorry, she can't come to the phone. She ..... a bath!", 'is having', 'having', 'have', 'has', 'is having')
QArray[4] = new Question('5', '..... many times every winter in Frankfurt.', 'It snows', 'It snowed', 'It is snowing', 'It is snow', 'It snows')
QArray[5] = new Question('6', 'How many students in your class ..... from Korea?', 'comes', 'come', 'came', 'are coming', 'come')
QArray[6] = new Question('7', "Weather report: It's seven o'clock in Frankfurt and ..... .", 'there is snow', "it`s snowing", 'it snows', 'it snowed', 'it`s snowing')
QArray[7] = new Question('8', 'Babies ..... when they are hungry.', 'cry', 'cries', 'cried', 'are crying', 'cry')
QArray[8] = new Question('9', 'Jane ..... her blue jeans today, but usually she wears a skirt or a dress.', 'wears', 'wearing', 'wear', 'is wearing', '	is wearing')
QArray[9] = new Question('10', 'I think I ..... a new calculator. This one does not work properly any more.', 'needs', 'needed', 'need', 'am needing', 'need')

//
/*-------------select html elements-------------------------------- */
var QId = document.querySelector('#QId');
var qHeader = document.querySelector('#Q-header');
var A1 = document.querySelector('#A1');
var A2 = document.querySelector('#A2');
var A3 = document.querySelector('#A3');
var A4 = document.querySelector('#A4');
var next = document.querySelector('#next');
var prev = document.querySelector('#previous');
var skip = document.querySelector('#skip');
var divSkipedQuestions = document.querySelector('#skiped-Questions');
//*---------------------main ----------------------------- */
var Exam = new Array(0);
var randomQuestion;
var skipedQuestions = new Array(0);
var watingQuestion = new Array(0);
var currentQuestion = 0;
window.addEventListener("load", GenerateQuestion);
next.addEventListener('click', GenerateQuestion);

prev.addEventListener('click', function () {
  debugger;
  let qid = Exam[currentQuestion - 1];
  watingQuestion.push(qid);
  currentQuestion--;
  qid = Exam[currentQuestion - 1];
  addQuestionToHtml(QArray[qid]);


});

skip.addEventListener('click', function () {
  debugger;
  let qid = Exam[currentQuestion - 1];
  skipedQuestions.push(qid)
  divSkipedQuestions.innerHTML+='<a>'+(currentQuestion)+'</a>'
  GenerateQuestion();


});
///////////////////////////////////////////////////////////////////////////////////////



















































class user {
    constructor(firstName, lastName, email, password, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.gender = gender;
    }
  }
  var firstName = document.getElementById('first-name');
  firstName.addEventListener('oninput',function(){
  debugger;
    validateName(firstName.value)
  })
  
  
  var btnLogin = document.getElementById("login");
  btnLogin.addEventListener("click", function(e){
    e.preventDefault();
    var firstName = document.getElementById('first-name').value;
    var lastName = document.getElementById('last-name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var userName = document.getElementById('user-name').value;
    if (document.getElementById('male').checked) {
      var gender = 'Male';
    }
    else {
      var gender = 'Female';
    }
  
    if(!validateName(firstName))
    {
    }
    if(!validateName(lastName))
    {
  
    }
    if(!validateEmail(email))
    {
  
    }
    if(!validatePassword(password))
    {
  
    }
    if(!validateUserName(userName))
    {
  
    }
  
  
  
  
  
    var student=new user(firstName, lastName, email, password, gender);
    validateData(student);
    // get data and create user
    // validate user
    // if true form.submit();
    // else validation error
  })
  
  function validatePassword(password) {
    if (password == null || password == '' || password.length < 8) {
      return false;
    }
    else
      return true;
  }
  
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function validateUserName(userName, length) {
    if (userName == null || userName == '' || userName.length < length) {
      return false;
    }
    else
      return true;
  }
  function validateName(name) {
    var regex = /^[a-zA-Z ]{2,30}$/;
    if (name == null || name == '' || !regex.test(name)) {
      return false;
    }
    else
      return true;
  }
  
  
  
  
  
  
  

  



