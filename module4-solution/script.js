/*
Solution of assignment 4:
Expected output:
Hello Yaakov
GoodBye Joshua
GoodBye Jessica
Hello Rishi
Hello Tushar
Hello Kunal
GoodBye Jennifer
Hello Diana
Hello Lauren
GoodBye Janvi
*/

(function() {
    var names = ["Yaakov", "Joshua", "Jessica", "Rishi", "Tushar", "Kunal", "Jennifer", "Diana", "Lauren", "Janvi"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();