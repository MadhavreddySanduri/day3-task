//Return all the prime numbers in an array

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const primes = getPrimes(numbers);

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
    }
    return true;
    }
    
    function getPrimes(arr) {
    return arr.filter(isPrime);
    }
    
    console.log(primes); // Output: [2, 3, 5, 7]

