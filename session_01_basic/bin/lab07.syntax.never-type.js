"use strict";
const show_error = (message) => {
    console.log('--- start show error');
    throw new Error(message);
};
const calculate = () => {
    try {
        console.log('---- start calculation');
        show_error('Something is failed');
        console.log('---- end calculation');
    }
    catch (e) {
        console.log('--- start catch');
        console.error(e);
    }
};
calculate();
//# sourceMappingURL=lab07.syntax.never-type.js.map