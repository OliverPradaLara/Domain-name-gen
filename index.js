var pronoun = ['the','our'];
var adj = ['great', 'big' ]; 
var noun = ['jogger','racoon'];
let string = "";
for (let i = 0; i < pronoun.length; i++) {
    for (let  j= 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            string = pronoun[i]+adj[j]+noun[k]; 
        }
        
    }
    
}
console.log(string);