
let string = "";

let buttons = document.querySelectorAll(".button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let key = this.innerHTML;
        let inp = document.querySelector(".form");
        if (key == "AC") {
            string = "";
            inp.innerHTML = "0";
        }
        else if (key == "Back") {
            string = string.slice(0,-1);
            inp.innerHTML= string;
        }
        else if (key == "=") {
            try {
                eval(string)
            } catch (err) {
                if(err instanceof SyntaxError)
                inp.innerHTML = "Invalid Input";
            }
            finally{
                let num = eval(string);
                inp.innerHTML = num;
                string = num.toString();
            }
        }
        else if(key == "+/-")
        {
            string = string.concat("*-1");
            inp.innerHTML = string;
        }
        else {
            string = string.concat(key);
            inp.innerHTML = string;
        }
    });
}

