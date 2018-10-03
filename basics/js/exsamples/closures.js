function wellcomeVisitor(name) {
    var welcome = "Welcome " + name + " in our Hospital"
    function saySentance() {
        alert(welcome)
    }
    return saySentance();
}

wellcomeVisitor("al-Kaddafi");