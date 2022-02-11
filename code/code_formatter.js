const keywords = ["public", "private", "protected", "class", "extends", "this", "return"];
const seperators = [' ', '.']

function syntaxHighlight() {
    let elements = document.getElementsByClassName("java-code");
    for (element of elements) {
        let words = element.innerHTML.split(" ");
        let modText = "";
        for (word of words) {
            color = getColor(word.trim());
            modText += "<span style=\"color: " + color + ";\">" + word + "</span> ";
        }
        element.innerHTML = modText;
    }
}

function getColor(word) {
    for (keyword of keywords) {
        if (keyword == word) {
            return "#0000FF";
        }
    }

    return "#000000";
}

function seperate(text) {
    let sep = [];
    let builder = "";
    for (let i = 0; i < text.lenth; i++) {
        c = text.charAt(i);
        for (char of seperators) {
            if (c == char) {
                sep.push(builder);
                builder = "";
                break;
            }
            builder += c;
        }
    }
    return sep;
}
