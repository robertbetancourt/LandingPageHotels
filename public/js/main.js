(() => {
    const hours = Selector(".hours");
    const minutes = Selector(".minutes");
    const seconds = Selector(".seconds");
    const container = Selector(".container");
    const checkbox = document.getElementById("switch");
    const img = document.getElementById("shops");
    // inteval
    setInterval(() => {
        const time = new Date();
        hours.textContent = time.getHours() < 10 ? `0${time.getHours()} :` : time.getHours();
        minutes.textContent = time.getMinutes() < 10 ? `0${time.getMinutes()} :` : time.getMinutes() + " :";
        seconds.textContent = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
    }, 1000);

    // checkbox
    checkbox.onchange = (e) => {
        if (e.target.checked) {
            img.src = "./assets/Night_5.png" 
        } else {
            img.src = "./assets/Night_4.png"
        }
    }


})()

function Selector(elem) {
    return document.querySelector(elem)
};