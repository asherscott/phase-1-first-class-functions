function receivesAFunction(spy) {
    return spy();
}

function returnsANamedFunction() {
    return function dummyFunction() {};
}

function returnsAnAnonymousFunction() {
    return () => [];
}