// Bước 1: Khai báo hàm đệ quy tính số Fibonacci tại vị trí n
function fibonacci(n) {
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Bước 2, 3, 4: In dãy Fibonacci và tính tổng
function printFibonacciAndSum(count) {
    var sum = 0;
    console.log("D\u00E3y ".concat(count, " s\u1ED1 Fibonacci \u0111\u1EA7u ti\u00EAn:"));
    for (var i = 0; i < count; i++) {
        var fib = fibonacci(i);
        console.log("F(".concat(i, ") = ").concat(fib));
        sum += fib;
    }
    console.log("T\u1ED5ng c\u1EE7a ".concat(count, " s\u1ED1 Fibonacci \u0111\u1EA7u ti\u00EAn l\u00E0: ").concat(sum));
}
// Ví dụ chạy với 10 số Fibonacci đầu tiên
var numberOfTerms = 10;
printFibonacciAndSum(numberOfTerms);
