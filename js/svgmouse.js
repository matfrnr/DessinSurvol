const WIDTH = window.innerWidth - 10;
const HEIGHT = window.innerHeight - 10;

const mysvg = SVG().addTo("body").size(WIDTH, HEIGHT);

// Ecrit les instructions
mysvg.text("Bouge la souris!").font("size", 30).move(30, 30).fill("white");

// Gestion de l'évènement "le curseur bouge"
mysvg.on("mousemove", function (ev) {
  console.log("Curseur en x:", ev.pageX, ' y:', ev.pageY);

  // Position du curseur
  let x = ev.pageX;
  let y = ev.pageY;

  // Déterminer le rayon (nombre aléatoire entre 10 et 30)
  let randomRadius = Math.random() * 20 + 10; // Un nombre aléatoire entre 10 et 30

  // Choisir une couleur au hasard
  let randomColor = SVG.Color.random();

  // Dessiner le cercle positionné au même endroit que le curseur avec la couleur et le rayon choisi ci-dessus
  mysvg.circle(randomRadius * 2) // Le diamètre est le double du rayon
      .center(x, y) // Position du cercle
      .fill(randomColor); // Couleur du cercle
});
