// Define a variable in the external JavaScript file
var copy1 = "This is copy1 from external JavaScript!";
function external1(){
    alert('The Ready Status')
};

function lettersTOALPHABET(alphabet){
    var quantum_alphabet = {
        num1: ['A', 'J', 'S'],
            num2: ['B', 'K', 'T'],
            num3: ['C', 'L', 'U'],
            num4: ['D', 'M', 'V'],
            num5: ['E', 'N', 'W'],
            num6: ['F', 'O', 'X'],
            num7: ['G', 'P', 'Y'],
            num8: ['H', 'Q', 'Z'],
            num9: ['I', 'R']
        };
        
    
    alphabet = alphabet.toUpperCase();
    var replacedFullname = '';
    for (var i = 0; i < alphabet.length; i++) {
        var char = alphabet[i];
        for (var key in quantum_alphabet) {
            if (quantum_alphabet.num1.includes(char)) {
                replacedFullname += 1;
                break;
            };

            if (quantum_alphabet.num2.includes(char)) {
                replacedFullname += 2;
                break;
            };

            if (quantum_alphabet.num3.includes(char)) {
                replacedFullname += 3;
                break;
            };

            if (quantum_alphabet.num4.includes(char)) {
                replacedFullname += 4;
                break;
            };

            if (quantum_alphabet.num5.includes(char)) {
                replacedFullname += 5;
                break;
            };

            if (quantum_alphabet.num6.includes(char)) {
                replacedFullname += 6;
                break;
            };

            if (quantum_alphabet.num7.includes(char)) {
                replacedFullname += 7;
                break;
            };

            if (quantum_alphabet.num8.includes(char)) {
                replacedFullname += 8;
                break;
            };

            if (quantum_alphabet.num9.includes(char)) {
                replacedFullname += 9;
                break;
            };
        };
        // If the character is not found in any of the quantum_alphabet values, keep it as is
        if (!/[A-Z]/.test(char)) {
            replacedFullname += char;   
        };
    };
    
    console.log( replacedFullname, alphabet);
    return replacedFullname;
};

var computerwidth = {
    phonewidth : 600,
    tabletwidth :900,
   laptopwidth : 1740
};

var window_width ;
var screen = '';    
setInterval( ()=>{
    window_width = window.innerWidth || document.innerWidth|| document.body.innerWidth ||window.outerWidth
    if(window_width <= computerwidth.phonewidth){
        screen= 'For Phone Only';
    };

    if(window_width > computerwidth.phonewidth && window_width <= computerwidth.tabletwidth ){
        screen= 'For Tablet Only';
    };

    if(window_width > computerwidth.tabletwidth && window_width <= computerwidth.laptopwidth){
         screen = 'For Windows Only';
    };
    document.getElementById('display').innerText = screen
    document.querySelector('button').innerText = screen;
    
},100);

function controlscreen(){
    
    if(window_width <= computerwidth.phonewidth){
        screen= 'For Phone Only';
    };

    if(window_width > computerwidth.phonewidth && window_width <= computerwidth.tabletwidth ){
        screen= 'For Tablet Only';
    };

    if(window_width > computerwidth.tabletwidth && window_width <= computerwidth.laptopwidth){
         screen = 'For Windows Only';
    };
    
    document.querySelector('button').innerText = screen;
    return screen;
}
