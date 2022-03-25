const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let mortyGame;
let flag;
//캔버스 구성
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight * (45 / 100);
//이미지 만들기
function makeObject(src) {
  const temp = new Image();
  temp.src = src;
  return temp;
}

const runnerImage1 = makeObject("img/morty.jpg");
const runnerImage2 = makeObject("img/mortySit.jpg");
const ufo = makeObject("img/UFO.jpg");
const landImage = makeObject("img/terrain.png");
const skyImage = makeObject("img/cloud.png");
const moonImage = makeObject("img/moon.png");
const gameoverImage = makeObject("img/gameover.png");

const imgArr = [];
function makeObstacle(src, type, w, h) {
  const image = new Image();
  image.src = src;
  image.appearType = type;
  image.WHsize = [w, h];
  imgArr.push(image);
}
makeObstacle("img/carcass1.png", 0, 150, 80);
makeObstacle("img/carcass2.png", 0, 150, 80);
makeObstacle("img/dino.png", 2, 100, 60);
makeObstacle("img/pickleRick.jpg", 0, 80, 80);
makeObstacle("img/birdperson.png", 0, 80, 100);
makeObstacle("img/friends.png", 1, 200, 100);

//state
let obstacles = [];
let sky = [];
let player;
let cloud;
let moon;
let terrain;
let keys = [];
let gravity = 1;
let gameSpeed = 5;
let jumpForce;

let score;
let scoreText;
let highscore;
let highscoreText;

document.addEventListener("keydown", (e) => {
  if (flag === 0 && e.code === "Space") start();
  keys[e.code] = true;
});
document.addEventListener("keyup", (e) => {
  keys[e.code] = false;
});

////////////////
//플레이어//////
////////////////
class Player {
  constructor(image, x, y, w, h) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.dy = 0;
    this.grounded = false; //처음에 땅에 없으니깐 우주선에서부터 내려와진다
    this.jumpForce = jumpForce;
    this.jumpTimer = 0;
    this.originalHeight = h;
  }
  jump() {
    //땅에 있는 경우
    if (this.grounded && this.jumpTimer === 0) {
      this.jumpTimer++; //jumpTimer 작동하기 시작
      this.dy -= this.jumpForce;
      this.grounded = false;
      //체공하고 있는 경우
    } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
      this.jumpTimer++;
      this.dy = -this.jumpForce - this.jumpTimer / 50; // 0.3정도의 힘을 더 가함
    }
  }

  animate() {
    //점프기능
    if (keys["Space"] || keys["ArrowUp"]) {
      this.jump();
    } else {
      this.jumpTimer = 0;
    }

    //주저앉는기능
    if (keys["ShiftLeft"] || keys["ArrowDown"]) {
      this.image = runnerImage2;
      this.h = this.originalHeight * (2 / 3);
    } else {
      this.image = runnerImage1;
      this.h = this.originalHeight;
    }

    this.y += this.dy; // 변화 반영 (일부로 중간에 둠- 속도조절)

    //중력기능
    if (!this.grounded && this.y + this.h < canvas.height) {
      this.grounded = false; //아직은 땅에 안닿았다
      this.dy += gravity;
    } else {
      this.grounded = true; //이제 땅에 닿았다
      this.dy = 0;
      this.y = canvas.height - this.h;
    }
    this.draw();
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  }
}

//////////////////
//장애물//////////
/////////////////
let testOffset = 0;
class Obstacle {
  constructor(image, x, y, w, h) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.sw = false;
    this.dx = gameSpeed;
  }

  animate() {
    this.x += this.dx;
    this.draw();
    this.dx = gameSpeed;
  }

  //err
  draw() {
    testOffset++;
    if (this.image.appearType === 2) {
      if (testOffset > 30) {
        ctx.drawImage(
          this.image,
          0,
          0,
          91,
          110,
          this.x,
          this.y,
          this.w,
          this.h
        );
        testOffset > 60 && (testOffset = 0);
      } else {
        ctx.drawImage(
          this.image,
          91,
          0,
          91,
          110,
          this.x,
          this.y,
          this.w,
          this.h
        );
      }
    } else ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  }
}

let offset = 0;
class Land extends Obstacle {
  constructor(image, x, y, w, h) {
    super(image, x, y, w, h);
  }

  animate() {
    this.x += this.dx;
    this.draw();
    this.dx = gameSpeed;
    //그림의 최대길이는 2380 * 23 (px)
    if (offset > 2300) offset = 0;
    else offset += this.dx;
  }

  draw() {
    // left
    ctx.drawImage(
      this.image,
      2380 - offset,
      0,
      offset,
      23,
      0,
      canvas.height - this.h,
      offset,
      this.h
    );
    // right
    ctx.drawImage(
      this.image,
      0,
      0,
      2380 - offset,
      23,
      offset,
      canvas.height - this.h,
      2380 - offset,
      this.h
    );
  }
}

//score 기록
class Text {
  constructor(t, x, y, a, c, s) {
    this.t = t;
    this.x = x;
    this.y = y;
    this.a = a;
    this.c = c;
    this.s = s;
  }

  draw() {
    ctx.fillStyle = this.c;
    ctx.font = this.s + "px sans-serif";
    ctx.textAlign = this.a;
    ctx.fillText(this.t, this.x, this.y);
  }
}

function spawnObstacle() {
  const r = Math.round(Math.random() * 5);
  const obs = new Obstacle(
    imgArr[r],
    imgArr[r].WHsize[0],
    canvas.height - imgArr[r].WHsize[1],
    imgArr[r].WHsize[0],
    imgArr[r].WHsize[1]
  );
  // 날아가는 유형의 장애물이면
  if (imgArr[r].appearType === 1) {
    obs.y -= player.originalHeight - 20;
  }
  obstacles.push(obs);
}

let skyCnt = 0;
function spawnCloud() {
  if (skyCnt >= 8) {
    sky.push(new Obstacle(moonImage, 0, 20, 50, 50));
    skyCnt = 0;
    return;
  }
  const position = Math.round(Math.random() * (canvas.height / 2 - 50) + 20);
  sky.push(new Obstacle(skyImage, 0, position, 100, 100));
  skyCnt++;
}

///////////////////////
///구동////////////////
//////////////////////
let spawnTimer = 160;
let cloudTimer = 100;
let ufoTimer = 0;
let initialSpawnTimer = spawnTimer;
let initialCloudTimer = cloudTimer;

function update() {
  mortyGame = requestAnimationFrame(update);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //3초동안만
  ufoTimer++;
  if (ufoTimer < 20) {
    ctx.drawImage(ufo, 210, 78, 340, 179, canvas.width - 180, 5, 150, 80);
  }

  //장애물생성
  spawnTimer--;
  if (spawnTimer <= 0) {
    spawnObstacle();
    spawnTimer = initialSpawnTimer;
  }

  //구름생성
  cloudTimer--;
  if (cloudTimer <= 0) {
    spawnCloud();
    cloudTimer = initialCloudTimer;
  }

  //장애물 그리기
  for (let i = 0; i < obstacles.length; i++) {
    //성공
    const obs = obstacles[i];
    /* 이걸해줘야지
    뒤에서 obstacles.splice(i,1)
    obstacles[i]. animate 가 연속해서 나와도 이상하지 않다 */
    if (obs.x + obs.w > canvas.width) {
      obstacles.splice(i, 1);
    }

    //실패
    if (
      //
      player.x < obs.x + obs.w &&
      // player.x + player.w > obs.x &&
      player.y < obs.y + obs.h &&
      player.y + player.h > obs.y
    ) {
      obstacles = [];
      sky = [];
      spawnTimer = initialSpawnTimer;
      score = 0;
      window.localStorage.setItem("highscore", highscore);
      gameSpeed = 5;
      cancelAnimationFrame(mortyGame);
      ctx.drawImage(
        gameoverImage,
        canvas.width / 2 - 250,
        canvas.height / 2 - 20,
        500,
        40
      );

      flag = 0;
    }

    obs.animate();
  }

  //구름그리기
  for (const cld of sky) {
    if (cld.x + cld.w > canvas.width) {
      sky.shift();
    }
    cld.animate();
  }

  //text그리기
  score++;
  scoreText.t = "Score: " + score;
  scoreText.draw();

  if (score > highscore) {
    highscore = score;
    highscoreText.t = "Highscore: " + highscore;
  }

  highscoreText.draw();
  player.animate();
  terrain.animate();
  gameSpeed += 0.003; //속도 점점빨라진다
}

function start() {
  ufoTimer = 0;
  flag = 1;
  gameSpeed = 5;
  jumpForce = 15;

  ctx.font = "20px sans-serif";
  score = 0;
  highscore = 0;
  if (localStorage.getItem("highscore"))
    highscore = localStorage.getItem("highscore");

  scoreText = new Text("Score: " + score, 25, 25, "left", "#212121", "20");
  highscoreText = new Text(
    "Highscore: " + highscore,
    canvas.width - 25,
    25,
    "right",
    "#212121",
    "20"
  );
  player = new Player(runnerImage1, canvas.width - 140, 20, 100, 100);
  terrain = new Land(landImage, 0, canvas.height - 20, canvas.width, 20);

  // update();
  requestAnimationFrame(update);
}
start();
