let clicks = 0

const myFunc = (i) => {
  if (document.getElementById("minus"))
    for (let i = 0; i <= 100; i--) {
      if (i % 15 == 0) console.log("FizzBuzz");
      else if (i % 3 == 0) console.log("Fizz");
      else if (i % 5 == 0) console.log("Buzz");
      else console.log(i);
      i--
    }
  if (document.getElementById("plus"))
    for (let i = 0; i <= 100; i++) {
      if (i % 15 == 0) console.log("FizzBuzz");
      else if (i % 3 == 0) console.log("Fizz");
      else if (i % 5 == 0) console.log("Buzz");
      else console.log(i);
      i++
    }
    showNum()
}

const showNum = () => {
  let newNum = document.getElementsByClassName("operation").value
  console.log(newNum)
  let num = document.getElementById("num")
  const p = document.createElement("p")
p.innerHTML(newNum)
}


