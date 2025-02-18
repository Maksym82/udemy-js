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
