function printNumber(from, to) {
    const timer = setInterval(() => {
        if (from <= to) {
            document.getElementById("Number").innerHTML = from++;
        }
        else
            clearTimeout(timer);      
    }, 1000);
}
