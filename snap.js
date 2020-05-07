function sleep(ms) {
   return new Promise((resolve) => setTimeout(resolve, ms));
}

function delay(operation, ms) {
    return async () => {
        await sleep(ms);
        return operation();
    };
}
