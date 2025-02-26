const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
  showAgeAndLangs: function (plan) {
    const { age } = plan;
    const { languages } = plan.skills;
    let str = `Мне ${age} и я владею языками: `;

    languages.forEach(function (lang) {
      str += `${lang.toUpperCase()} `;
    });

    return str;
  },
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
  const { exp } = plan.skills;
  return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
  let str = "";
  const { programmingLangs } = plan.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }

  return str;
}

showProgrammingLangs(personalPlanPeter);

// ============================================
const family = ["Peter", "Ann", "Alex", "Linda", "Maksym"];

function showFamily(arr) {
  if (family.length === 0) {
    return "Семья пуста";
  } else {
    return "Семья состоит из: " + family.join(" ");
  }
}
console.log(showFamily(family));

// =============================================
const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach((city) => {
    console.log(city.toLowerCase());
  });
}

standardizeStrings(favoriteCities);

// ====================================================
const someString = "This is some strange string";

function reverse(str) {
  if (typeof str !== "string") {
    return "Ошибка!";
  }
  // Самый оптимальный вариант решения
  return str.split("").reverse().join("");
}
console.log(reverse(someString));

// ======================================================
const baseCurrencies = ["USD", "EUR"];
const additionalCurrencies = ["UAH", "RUB", "CNY"];

function availableCurr(arr, missingCurr) {
  let str = "";
  arr.length === 0
    ? (str = "Нет доступных валют")
    : (str = "Доступные валюты:\n");

  arr.forEach(function (curr, i) {
    if (curr !== missingCurr) {
      str += `${curr}\n`;
    }
  });

  // Или
  // for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] === missingCurr) {
  //         continue;
  //     }
  //     str += `${arr[i]}\n`;
  // }

  return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY");

// ====================================================
const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
  "Yana"
];

function sortStudentsByGroups(arr) {
  arr.sort();
  const a = [],
    b = [],
    c = [],
    rest = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      a.push(arr[i]);
    } else if (i < 6) {
      b.push(arr[i]);
    } else if (i < 9) {
      c.push(arr[i]);
    } else {
      rest.push(arr[i]);
    }
  }
  return [
    a,
    b,
    c,
    `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")}`,
  ];
}
console.log(sortStudentsByGroups(students));
