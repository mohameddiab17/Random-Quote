var Qoutes =[
    "Live as if you were to die tomorrow. Learn as if you were to live forever. --Mahatma Gandhi",
    "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle. --Albert Einstein",
    "If you tell the truth, you don't have to remember anything. --Mark Twain",
    "Be yourself; everyone else is already taken. --Oscar Wilde",
    "So many books, so little time. --Frank Zappa" 
];

var randomQoute = document.getElementById("randomQuote");

function getRandomQuote() {
    var randomIndex = Math.floor( Math.random() *Qoutes.length );
    randomQoute.innerHTML=Qoutes[randomIndex];
}

