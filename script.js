let count = 0;

function update_count() {
    var msg = "Count: " + count;
    document.getElementById("count").innerHTML = msg;
}

function count_up() {
    count++;
    update_count();
}

function count_down() {
    count--;
    update_count();
}

function count_upByTwo() {
    count = count + 2;
    update_count();
}

function count_downByTwo() {
    count = count - 2;
    update_count();
}