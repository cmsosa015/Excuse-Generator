console.log("Hello World")

function newQuote() {
    // let randomNumber = Math.floor(Math.random())

    let who = [ "my cat", "my dog", "my sheep", "my peacock",];
    let action = [ "fell in", "bit", "ran away from", "ruined"];
    let what = [" my jewelry box", " my computer stand", " my television", " my trophy collection" ];
    let when = ['before the class!', 'when I was eating!','yesterday!','while I was praying!'];

   let whoIndex = Math.floor(Math.random() * who.length);
   let actionIndex = Math.floor(Math.random() * action.length);
   let whatIndex = Math.floor(Math.random() * what.length);
   let whenIndex = Math.floor(Math.random() * when.length);

   let quote = who[whoIndex] + ' ' + action[actionIndex]  + ' ' + what[whatIndex] + ' ' + when[whenIndex]; 
   
    document.querySelector(".excuse").innerHTML = quote ; 
}