const keywords = ["public", "private", "protected", "class", "extends", "this", "return", "static", "void", "try", "catch", "throws", "final", "if", "else", "new", "abstract", "true", "false", "continue", "break"];

const seperators = [' ', '.', "(", ")", "\n"];

function syntaxHighlight() {
    let elements = document.getElementsByClassName("java-code");
    for (element of elements) {
        let words = seperate(element.innerHTML);
        let modText = "";
        for (word of words) {
            color = getColor(word.trim().replace(/[^A-Za-z]/g), "");
            modText += "<span style=\"color: " + color + ";\">" + word + "</span>";
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

    if (word.startsWith("@")) {
        return "#FFFFFF";
    }

    return "#000000";
}

function seperate(toSep) {
    let sep = [];
    let builder = "";
    for (let i = 0; i < toSep.length; i++) {
        c = toSep.charAt(i);
        let reset = false;
        for (char of seperators) {
            if (c == char) {
                sep.push(builder);
                sep.push(c);
                builder = "";
                reset = true;
                break;
            }
        }
        if (!reset) builder += c;
    }
    return sep;
}
