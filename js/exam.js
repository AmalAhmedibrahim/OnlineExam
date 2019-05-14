class Question {
    constructor(id, QHeader, A1, A2, A3, A4, CA,num) {
        this.id = id;
        this.QHeader = QHeader;
        this.A1 = A1;
        this.A2 = A2;
        this.A3 = A3;
        this.A4 = A4;
        this.CA = CA;
        this.num=num
    }
}
/*-------------------------Exam Question----------------*/
var QArray = new Array(10);
QArray[0] = new Question('1', "I ..... tennis every Sunday morning.", 'playing', 'play', 'am playing', 'am play', 'play',-1);
QArray[1] = new Question('2', "Don't make so much noise. Noriko ..... to study for her ESL test!", 'try', 'tries', 'tried', 'is trying', 'is trying',-1);
QArray[2] = new Question('3', 'Jun-Sik ..... his teeth before breakfast every morning.', 'will cleaned', 'is cleaning', 'cleans', 'clean', 'cleans',-1);
QArray[3] = new Question('4', "Sorry, she can't come to the phone. She ..... a bath!", 'is having', 'having', 'have', 'has', 'is having',-1)
QArray[4] = new Question('5', '..... many times every winter in Frankfurt.', 'It snows', 'It snowed', 'It is snowing', 'It is snow', 'It snows',-1)
QArray[5] = new Question('6', 'How many students in your class ..... from Korea?', 'comes', 'come', 'came', 'are coming', 'come',-1)
QArray[6] = new Question('7', "Weather report: It's seven o'clock in Frankfurt and ..... .", 'there is snow', "it`s snowing", 'it snows', 'it snowed', 'it`s snowing',-1)
QArray[7] = new Question('8', 'Babies ..... when they are hungry.', 'cry', 'cries', 'cried', 'are crying', 'cry',-1)
QArray[8] = new Question('9', 'Jane ..... her blue jeans today, but usually she wears a skirt or a dress.', 'wears', 'wearing', 'wear', 'is wearing', '	is wearing',-1)
QArray[9] = new Question('10', 'I think I ..... a new calculator. This one does not work properly any more.', 'needs', 'needed', 'need', 'am needing', 'need',-1);
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
var RA1 = document.querySelector('#RA1');
var RA2 = document.querySelector('#RA2');
var RA3 = document.querySelector('#RA3');
var RA4 = document.querySelector('#RA4');
var skipDiv=document.querySelector('.skipped');

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
/**----------------------- add Questions to html ---------------------------------*/
function addQuestionToHtml(htmlQuestion) {
    QId.textContent = htmlQuestion.num;
    qHeader.textContent = htmlQuestion.QHeader;
    A1.innerHTML = htmlQuestion.A1;
    A2.innerHTML = htmlQuestion.A2;
    A3.innerHTML = htmlQuestion.A3;
    A4.innerHTML = htmlQuestion.A4;
    ResetAnswer();
}
/*---------------------------------------------------------------------------- */
function GenerateQuestion() {
    if (watingQuestion.length <= 0 && Exam.length < 5) {
        let Qid = getrandomQuestion();
        QArray[Qid].num=Exam.length;
        addQuestionToHtml(QArray[Qid]);
        currentQuestion++;
    }
    else if (watingQuestion.length > 0 ) {
        let qid = watingQuestion.shift();
        addQuestionToHtml(QArray[qid]);
    }
    else if (Exam.length >= 5) {
        if (skipedQuestions.length > 0 && finish==false) {
            var ans = confirm('Do you want to answer skipped Questions?')
            finish=true;
            if (ans == true) {
                // addQuestionToHtml(QArray[skipedQuestions.shift()]);
                let sQID=skipedQuestions.shift();
                addQuestionToHtml(QArray[sQID]);
                var ids="#Q"+sQID;
                var q =document.querySelector(ids);
                q.style.display = "none"
            }
            else {

              var stdscore=calcScore();
                ShowResult()
            }
        }
        else if (Answers.length >= 5 && skipedQuestions.length == 0 ) {
            ShowResult();
        }
        else
        {
           AnswerSkippedQ();
        }
        // else
        // {
        //    // AnswerSkippedQ();
        // }

    }
    // else if (watingQuestion.length > 0) {
    //     currentQuestion++;
    //     let qid = watingQuestion.shift();
    //     addQuestionToHtml(QArray[qid]);
    // }
    // else if (skipedQuestions.length > 0) {
    //     let qid = skipedQuestions.shift();
    //     addQuestionToHtml(QArray[qid]);
    // }
}

 function AnswerSkippedQ() {
//     debugger;
//    while (skipedQuestions.length != 0) {
    // if(Exam.length <= 5)
    // {
    //     let qid = Exam[currentQuestion - 1];
    //     watingQuestion.push(qid);
    // }
    let sQID=skipedQuestions.shift();
    addQuestionToHtml(QArray[sQID]);
    var ids="#Q"+sQID;
    var q =document.querySelector(ids);
    q.style.display = "none";
         //addQuestionToHtml(QArray[skipedQuestions.pop()]);
         //GetAnswer();
//     //}
}

function ShowResult() {
    calcScore();
    window.location.pathname = "E:\\ITI\\js\\Project\\result.html";
}

function GetAnswer() {
    if (RA1.checked == true) {

        Answers.push( { eid: Exam[currentQuestion - 1] , ans: A1.textContent,ansID:1});
    }
    else if (RA2.checked == true) {
        Answers.push({ eid: Exam[currentQuestion - 1],ans: A2.textContent,ansID:2});

    }
    else if (RA3.checked == true) {
        Answers.push({ eid: Exam[currentQuestion - 1], ans: A3.textContent,ansID:3});

    }
    else if (RA4.checked == true) {
        Answers.push({ eid: Exam[currentQuestion - 1],ans: A4.textContent,ansID:4});

    }
    else {
        let ans = confirm('Do you want add this question to skipped questions?');
        if (ans == true) {
            skipDiv.style.visibility="visible";
            skipedQuestions.push(Exam[currentQuestion - 1]);
            var qid=Exam[currentQuestion - 1];
            divSkipedQuestions.innerHTML += '<div id=Q'+qid +'>' + "Question"+  (currentQuestion) + '</div>'
            var q = document.querySelector('#Q'+qid);
            q.addEventListener('click',clickedQuestion);
            q.style.cursor="pointer";
        }
        else {
            Answers.push({ eid: Exam[currentQuestion - 1],ans: '0'});

        }
    }
}


function ResetAnswer() {
    RA1.checked = false;
    RA2.checked = false;
    RA3.checked = false;
    RA4.checked = false;

}

function clickedQuestion()
{
    debugger
    if(Exam.length <= 5)
    {
         let qid = Exam[currentQuestion - 1];
         watingQuestion.push(qid);
    }
     var sqID=this.id;
     var arrid=sqID.split('Q');
     let sQID= arrid[1];
     addQuestionToHtml(QArray[sQID]);
     var q =document.querySelector('#'+this.id);
     q.style.display = "none";
     skipedQuestions=remove(skipedQuestions,sQID);



    // let sQID=skipedQuestions.shift();
    // addQuestionToHtml(QArray[sQID]);
    // var ids="#Q"+sQID;
    // var q =document.querySelector(ids);
    // q.style.display = "none";

}
function remove(array, element) {
    var arr=new Array();
    for (let index = 0; index < array.length; index++) {
        if(array[index]!=element)
        {
            arr.push(array[index]);
        }

    }
    return arr;
  }

//*---------------------main ----------------------------- */
var Exam = new Array(0);
var Answers = new Array(0);
var finish=false;
var randomQuestion;
var skipedQuestions = new Array(0);
var watingQuestion = new Array(0);
var currentQuestion = 0;
window.addEventListener("load", GenerateQuestion);
next.addEventListener('click', function () {
    debugger
    GetAnswer();
    GenerateQuestion();
});

prev.addEventListener('click', function () {
    let qid = Exam[currentQuestion - 1];
    watingQuestion.push(qid);
    currentQuestion--;
    if(currentQuestion>=0)
    {
        qid = Exam[currentQuestion - 1];
        addQuestionToHtml(QArray[qid]);
    }
});

skip.addEventListener('click', function () {
    let qid = Exam[currentQuestion - 1];
    skipedQuestions.push(qid);
    skipDiv.style.visibility="visible";
    divSkipedQuestions.innerHTML += '<div id=Q'+qid +'>' + "Question"+  (currentQuestion) + '</div>'
    var q = document.querySelector('#Q'+qid);
    q.style.cursor="pointer";
    q.addEventListener('click',clickedQuestion);
    GenerateQuestion();


});
///////////////////////////////////////////////////////////////////////////////////////

function calcScore()
{
    let correctAns;
    let stdAns;
    var sscore=0;
   for (let i = 0; i < Answers.length; i++) {
    correctAns =QArray[Answers[i].eid];
    stdAns=Answers[i].ans;
    if(correctAns.CA==stdAns)
    {
        sscore+=1;
    }
   }
   localStorage.setItem('result',sscore);
}