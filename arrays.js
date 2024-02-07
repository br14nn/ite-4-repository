let x = [0, 1, 2, 3, 4];
let y = ["Hello", "world", "it", "is", "me"];
let z = [
  [3, 4],
  [5, 6],
];

z.map((a) => {
  console.log(a);
  a.map((b) => {
    console.log(b);
  });
});

let a = "Brian Vitualla";
for (let x = 0; x < a.length; x++) {
  if (a[x] !== " ") console.log(a[x]);
}
