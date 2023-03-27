# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

When console.log(x) is called on line 5 inside f1, it prints the value of the local variable x, which is 2.
Then console.log(x) is called on line 7 and it prints the value of global variable x, which is 1.
This is because the local variable x inside f1 has no effect on the value of the global variable 

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

Output will be:
  1. When console.log(f1()) is called on line 36, it calls the function f1(), function works and calls console.log(x) on line 32 inside f1, it prints the value of the global variable x, which is 10.
  2. When console.log(y) is called on line 37, it causes error because y variable is not defined in global scope.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

Output will be:
1. When console.log(x) is called on line 59, it prints the value of the global variable x, which is 9.
2. When console.log(y) is called on line 69, it prints the value of the global variable y, which is 10, 
after function changes the values of object y.