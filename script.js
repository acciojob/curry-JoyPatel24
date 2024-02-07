function curry(callback) {
            function curriedFn(...args) {
                if (args.length >= callback.length) {
                    return callback(...args);
                } else {
                    return (...moreArgs) => curriedFn(...args, ...moreArgs);
                }
            }
            return curriedFn;
        }

        // Sample usage
        const sum = (...numbers) => numbers.reduce((total, number) => total + number, 0);
        const curriedSum = curry(sum);

        document.getElementById('btn').addEventListener('click', function() {
            const result = curriedSum(1)(2)(3)();
            document.getElementById('output').textContent = `Result: ${result}`;
        });