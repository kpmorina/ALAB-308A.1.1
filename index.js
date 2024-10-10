// Stack Overflow

let counter= 0;
function recursiveFunction() {
    counter += 2
    recursiveFunction();
}

try {
    recursiveFunction();
} catch (error){
console.error("error:", error);   
console.log(2,0)
}

//Trampolines

const factorial = (m) => {
    if (m === 0) return 1; 
    return m * factorial(m - 1); 
  }

  const facto = (m, b = 1) => {
    if (m === 0) return b;
    return () => facto(m - 1, m * b);
  } 

  const trampoline = (f, ...args) => {
    let result = f(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  }

  console.log(trampoline(facto(10000)))