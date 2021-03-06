/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/

let blue = false;

function taskOne() {
  const elementId = document.getElementById("answer-one");
  if (blue === false) {
    elementId.style.backgroundColor = "blue";
    blue = true;
  } else {
    elementId.style.backgroundColor = "white";
    blue = false;
  };
};

/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

const numbers = [234, 986, 784];

function taskTwo() {
  const newValue = Math.round(Math.random() * 1000 + 1);
  numbers.push(newValue);
  document.getElementById("answer-two").innerHTML = `<p>${numbers}</p>`;
  console.log(numbers);
};

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/

function taskThree() {
  const dateDay = new Date().getDay();
  // dateDay = 0; /* Testar funtionen */
  switch (dateDay) {
    case 1: // Monday
    case 2: // Tuesday
    case 3: // Wednesday
    case 4: // Thursday
    case 5: // Friday
      alert("FML");
      break;
    case 6: // Saturday
    case 0: // Sunday
      alert("Woohooo it's weekend");
      break;
  } 
};

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/

function multiplier(valueOne, valueTwo) {
  if (typeof(valueOne) === "number" && typeof(valueTwo) === "number") {
    // console.log("Värde 1: " + valueOne + ", Värde 2: " + valueTwo);
    console.log(`Värde 1: ${valueOne}, Värde 2: ${valueTwo}`);
    alert("Produkten är: [" + valueOne * valueTwo +"]");
  } else {
    alert("Jag kan bara multiplicera nummer");
  }
};

function taskFour() {
  multiplier(Math.round(Math.random() * 10 + 1), Math.round(Math.random() * 10 + 1));
};

/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {
  fruits.forEach((fruit) => {
    if(fruit.toLowerCase() === "apelsin" || fruit.toLowerCase() === "päron") {
      trash.push(fruit);
    } else {
      eatable.push(fruit);
    }
  });
  const elementId = document.getElementById("answer-five");
  elementId.innerHTML = `<p><strong>Ätligt: </strong>${eatable}</p><p><strong>Skräp: </strong>${trash}</p>`;
/*   console.log(fruits);
  console.log(eatable);
  console.log(trash); */
};

/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {
  persons.forEach((person) => {
    if (person.age > 30) {overThirty.push(person.name)}
    else {underThirty.push(person.name)};
    if (person.married === true) {married.push(person.name)}
    else {notMarried.push(person.name)};
  });
  const elementId = document.getElementById("answer-six");
  elementId.innerHTML = `
    <p><strong>Över 30: </strong> ${overThirty}</p>
    <p><strong>Under 30: </strong> ${underThirty}</p>
    <p><strong>Gift: </strong> ${married}</p>
    <p><strong>Ogift: </strong> ${notMarried}</p>`;
/*   console.log(persons);
  console.log(overThirty);
  console.log(underThirty);
  console.log(married);
  console.log(notMarried); */
};

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
  const stringArray = addMeSomeLineBreaks.split(", ").join(", <br/>");
  document.getElementById("answer-seven").innerHTML = `${stringArray}`;
};

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/

function taskEight() {
  const elementId = document.getElementById("card-eight");
  elementId.style.visibility = "hidden";
  const interval = setTimeout(() => {elementId.style.visibility = "initial";}, 3000);
  /* Här går att utnyttja både display och visibility i CSS. Jag valde visibility då det stod dölj. Display: none; tar även bort diven ur flödet. vilket inte visibility gör. */
};

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

function taskNine() {
  let dateHour = new Date().getHours();
  /* console.log(dateHour); */
  /* dateHour = 0; */ // Ändrar tiden, för att testa funktionen.
  const elementsId = document.querySelectorAll(".answer-container");
  elementsId.forEach((classElement) => {
  if (dateHour >= 17 && dateHour <= 23) {classElement.style.backgroundColor = "blue"}
  else {classElement.style.backgroundColor = "red"};
})};

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator) {
  const checkValues = (valueOne, valueTwo) => {
    if (typeof(valueOne) !== "number" || typeof(valueTwo) !== "number") {
      alert("Något är fel!\n\nVärdena är inte angivna som nummer.");
      return false;
    } else {
      return true;
    };
  };

  switch (operator) {
    case "add":
      if (checkValues(valueOne, valueTwo)) {
        alert(`Resultatet blev: [${valueOne + valueTwo}]`)
      };
      break;
    case "subtract":
      if (checkValues(valueOne, valueTwo)) {
        alert(`Resultatet blev: [${valueOne - valueTwo}]`)
      };
      break;
    case "multiply":
      if (checkValues(valueOne, valueTwo)) {
        alert(`Resultatet blev: [${valueOne * valueTwo}]`)
      };
      break;
    case "divide":
      if (checkValues(valueOne, valueTwo)) {
        alert(`Resultatet blev: [${valueOne / valueTwo}]`)
      };
      break;
    default:
      alert("Något är fel!\n\nDu har inte angett en korrekt beräkningsmetod.\nAnge antingen: add, subtract, multiply eller divide.");
  }
  
}

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  calculator(6, 6, "add");
};
