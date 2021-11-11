let number = 0

const myFunc = (i) => {
  if (document.getElementById("minus"))
    for (let i = 100; i >= 0; i--) {
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

const plus = () => {
  number += 1

  let value = number

  if (number % 15 == 0) value = "FizzBuzz"
  else if (number % 3 == 0) value = "Fizz"
  else if (number % 5 == 0) value = "Buzz"

  document.getElementById("num").innerHTML = value
}

const minus = () => {
  number -= 1

  let value = number
  
  if (number % 15 == 0) value = "FizzBuzz"
  else if (number % 3 == 0) value = "Fizz"
  else if (number % 5 == 0) value = "Buzz"

  document.getElementById("num").innerHTML = value
}


