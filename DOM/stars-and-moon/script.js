const starTemplate = document.querySelector('.star').cloneNode();

// add (append) ten stars to random coordinates
for (let i = 0; i < 10; i++) {
  const randX = randBetween();
  const randY = randBetween();
  if (noStarsIn50px(randX, randY)) {
    const newStar = starTemplate.cloneNode();
    newStar.style.left = randX + '%';
    newStar.style.top = randY + '%';
    document.querySelector('.world').appendChild(newStar);
  } else {
    index -= 1;
  }
}

function randBetween(min = 1, max = 99) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// On click anywhere on section.world, add a star beneath the cursor.
document
  .querySelector('.world')
  .addEventListener('click', addStarOnClick, true);
function addStarOnClick(e) {
  if (e.clientY < 800 && !e.target.classList.contains('moon')) {
    const newStar = starTemplate.cloneNode();

    if (noStarsIn50px(e.clientX, e.clientY)) {
      newStar.style.left = e.clientX + 'px';
      newStar.style.top = e.clientY + 'px';
      document.querySelector('.world').appendChild(newStar);
    }
  }
}

// Add a rule that a new star cannot be added within 50px radius of any other.
function noStarsIn50px(newX, newY) {
  const stars = document.querySelectorAll('.star:not(.fallen)');
  if (stars.length != 0) {
    return Array.from(stars).every((star) => {
      const oldX = star.getBoundingClientRect().x;
      const oldY = star.getBoundingClientRect().y;
      const distance = Math.sqrt(
        Math.pow(newY - oldY, 2) + Math.pow(newX - oldX, 2)
      );
      if (distance <= 50) {
        return false;
      }
      return true;
    });
  } else {
    return true;
  }
}

// random interval, a star should fall.
(function randomFall() {
  const random = randBetween(500, 2000);
  setTimeout(function () {
    const fallen = document.querySelector('.star:is(.fallen)');
    if (fallen) {
      fallen.remove();
    }
    const stars = document.querySelectorAll('.star:not(.fallen)');

    const randomStar = stars[randBetween(0, stars.length - 1)];
    randomStar.classList.add('fallen');
    randomFall();
  }, random);
})();

function AddTreePart(tree) {
  tree.addEventListener('click', (event) => {
    let treePart = document.createElement('span');
    tree.append(treePart);
    const adjustment = tree.offsetTop - 7;
    tree.style.top = adjustment + 'px';
  });
}
const treeOne = document.getElementsByClassName('tree one')[0];
const treeTwo = document.getElementsByClassName('tree two')[0];
AddTreePart(treeOne);
AddTreePart(treeTwo);

// Move moon around by dragging it with mouse.
const moon = document.querySelector('.moon');
moon.onmousedown = function (event) {
  let shiftX = event.clientX - moon.getBoundingClientRect().left;
  let shiftY = event.clientY - moon.getBoundingClientRect().top;
  moon.style.position = 'absolute';
  moon.style.zIndex = 1000;
  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    moon.style.left = pageX - shiftX + 'px';
    moon.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  moon.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    moon.onmouseup = null;
  };
};

moon.ondragstart = function () {
  return false;
};
