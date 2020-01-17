let numberOflines = 8;
let numberOfCharacters = 8;//holds size of board
let character = '';//represents characters on board

for(let i = 1; i <= numberOflines; i++){
    for(let j = 1; j <= numberOflines; j++) {
        if( (i + j) % 2 == 0) {
            character+=' ';//triggers an empty space on the board
        }
        else {
            character+='#';
        }
    }
    character +='\n';
}
console.log(character);