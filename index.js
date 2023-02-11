let musics = [
  {
    name: "konsta:bilmaydi",
    price: 235439.99,
  },
  {
    name: "bekcore:bahorlarda",
    price: 34530.99,
  },
  {
    name: "konsta:poyga",
    price: 43539.99,
  },
  {
    name: "bellie elish",
    price: 254599.99,
  },
  {
    name: "java:tog`angmas",
    price: 343269.99,
  },
  {
    name: "java:gaz yo`q",
    price: 33419.99,
  },
  {
    name: "j.ahmadaliyev",
    price: 33329.99,
  },
  {
    name: "another love",
    price: 5549.99,
  },
  {
    name: "auf",
    price: 9939.99,
  },
  {
    name: "Music name1",
    price: 139.99,
  },
  {
    name: "muzika",
    price: 2222.99,
  },
  {
    name: "muzkia2",
    price: 439.99,
  },
  {
    name: "muzika4",
    price: 339.99,
  },
];
let narxi = document.querySelector(".price");
let musicnamehtml = document.querySelector(".name");
let change = document.querySelector(".charge");
function chargemusic() {
  let random = Math.floor(Math.random() * musics.length);
  let musiqa = musics[random];
  //   let musicName = musics.name[random];
  musicnamehtml.innerHTML = musiqa.name;
  narxi.innerHTML = `$${musiqa.price}/year`;
  console.log(musiqa.name);
}

change.addEventListener("click", () => {
  console.log("1");
  chargemusic();
});
