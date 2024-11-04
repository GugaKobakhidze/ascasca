// const numbers = [10, 25, 20, 15, 58];
// const myTitles = document.querySelectorAll(".myTitle");

// function interval(nums, titles) {
//   titles.forEach((title, index) => {
//     let startTime = nums[index];

//     const myInterval = setInterval(() => {
//       title.textContent = startTime;
//       startTime--;

//       if (startTime < 0) {
//         clearInterval(myInterval);
//       }
//     }, 1000);
//   });
// }

// interval(numbers, myTitles);

function myMultiFun(n1, n2, ...args) {
  if ([n1, n2, ...args].length <= 2) {
    console.log("you must give more then 2 arguments");
    return;
  }

  let sum = n1 + n2;
  let sum2 = args.reduce((a, b) => a * b, 1);

  return [sum, sum2];
}

const variant1 = myMultiFun(5, 10, 50);

console.log("sum", variant1[0]);
console.log("sum2", variant1[1]);

const obj = {
  name: "giorgi",
  lastName: "giorgadze",
  user: {
    banks: [
      { address: { city: "Tbilisi" } },
      { address: { city: "Batumi" } },
      { address: { city: "Xelvachauri" } },
    ],
  },
};

function myDestObj(obj) {
  const {
    name = "",
    lastName = "",
    user: {
      banks: [{}, {}, { address: { city } = {} } = {}],
    },
  } = obj;

  return { name, lastName, city };
}

const { name, lastName, city } = myDestObj(obj);
console.log(city);

const obj2 = {
  name: "gela",
  lastName: "beridze",
  age: 25,
  height: 1.8,
  size: 25,
  address: {
    street: "Tbilisi",
  },
  cars: ["BMW", "MERCEDES", "OPEL", "FERRARI"],
};

function deepCopy(obj) {
  return {
    ...obj,
    address: { ...obj.address },
    cars: [...obj.cars],
  };
}

const {
  name: name2,
  lastName: lastName2,
  address: { street },
  cars,
} = deepCopy(obj2);
