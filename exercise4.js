const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
let newlist = [];
newlist.push(grades.slice(grades.length / 2, grades.length).sort());
let halfRange = newlist[0][newlist[0].length - 1] - newlist[0][0];

let range = grades.sort()[grades.length - 1] - grades.sort()[0];
let median = 0;
if (grades.length % 2 === 0) {
  median =
    grades.sort()[
      (Math.ceil(grades.length / 2) + Math.floor(grades.length / 2)) / 2
    ];
} else {
  median = grades.sort()[(grades.length - 1) / 2];
}

console.log(range, median, halfRange);
