const Branch = (len, angle, multiplier, shortestBranch) => {
  console.log(len)
  line(0, 0, 0, -len)
  if (len > shortestBranch) {
    push()
    translate(0, -len)
    rotate(angle * random(angle - 0.4, angle + 0.4))
    Branch(
      len * multiplier,
      random(angle - 0.2, angle + 0.2),
      multiplier,
      shortestBranch
    )
    rotate(-1 * random(angle - 0.4, angle + 0.4))
    Branch(len * multiplier, angle, multiplier, shortestBranch)
    pop()
  }
}

function generateTree() {
  push()
  translate(random(100, width - 100), height)
  Branch(random(170, 190), random(0.3, 0.5), random(0.6, 0.75), random(1, 2))
  pop()
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  generateTree()
  generateTree()
  generateTree()
  generateTree()
  generateTree()
  generateTree()
  generateTree()
}
