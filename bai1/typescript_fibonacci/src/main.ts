function fibonacci(n: number): number {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciAndSum(count: number): void {
    let sum = 0;
    console.log(`Dãy ${count} số Fibonacci đầu tiên:`);

    for (let i = 0; i < count; i++) {
        const fib = fibonacci(i);
        console.log(`F(${i}) = ${fib}`);
        sum += fib;
    }

    console.log(`Tổng của ${count} số Fibonacci đầu tiên là: ${sum}`);
}

const numberOfTerms = 10;
printFibonacciAndSum(numberOfTerms);
