const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = (e.clientX - 5) + 'px';
  cursor.style.top = (e.clientY - 5) + 'px';
});
document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
document.addEventListener('mouseleave', () => cursor.style.opacity = '0');

const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');
let W, H, pts = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  pts = Array.from({length: 18}, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 130 + 50,
    hue: [55, 195, 275, 10, 145][Math.floor(Math.random() * 5)]
  }));
}

function draw() {
  ctx.clearRect(0, 0, W, H);
  pts.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < -p.r) p.x = W + p.r;
    if (p.x > W + p.r) p.x = -p.r;
    if (p.y < -p.r) p.y = H + p.r;
    if (p.y > H + p.r) p.y = -p.r;
    const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
    g.addColorStop(0, `hsla(${p.hue},65%,55%,0.13)`);
    g.addColorStop(1, `hsla(${p.hue},65%,55%,0)`);
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = g;
    ctx.fill();
  });
  requestAnimationFrame(draw);
}

resize();
draw();
window.addEventListener('resize', resize);
