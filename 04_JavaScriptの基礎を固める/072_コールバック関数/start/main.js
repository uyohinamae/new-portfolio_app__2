function hello(callback) {
      console.log(callback);
      console.log('hello ' + callback());
}


function getName() {
    return 'Code Mafia';
}
function getFirstName() {
    return 'Code';
}

hello(function () {
    return 'Code';
});