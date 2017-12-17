export default new Promise (function(resolve) {
    setTimeout(() => {
        let value = parseInt(Math.random() * 100);
        resolve(value);
    }, 2000);
})