let Num = 0

const myFunc = (i) => {
  if (document.getElementById("minus"))
    for (let i = 0; i <= 100; i--) {
      if (i % 15 == 0) console.log("FizzBuzz");
      else if (i % 3 == 0) console.log("Fizz");
      else if (i % 5 == 0) console.log("Buzz");
      else console.log(i);
    }
  if (document.getElementById("plus"))
    for (let i = 0; i <= 100; i++) {
      if (i % 15 == 0) console.log("FizzBuzz");
      else if (i % 3 == 0) console.log("Fizz");
      else if (i % 5 == 0) console.log("Buzz");
      else console.log(i);
    }
    showNum()
}

const showNum = () => {
  document.getElementById("num").innerHTML
}


