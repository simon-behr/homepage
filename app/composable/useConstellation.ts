interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export function useConstellation(canvas: Ref<HTMLCanvasElement | null>) {
  let raf: number;
  let nodes: Node[] = [];
  let W = 0,
    H = 0;
  let mouseX = 0,
    mouseY = 0;
  let targetMX = 0,
    targetMY = 0;

  function initNodes() {
    nodes = Array.from({ length: 160 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.2 + 0.4,
    }));
  }

  function resize() {
    if (!canvas.value) return;
    W = canvas.value.width = window.innerWidth;
    H = canvas.value.height = window.innerHeight;
    initNodes();
  }

  function draw() {
    if (!canvas.value) return;
    const ctx = canvas.value.getContext("2d")!;
    ctx.clearRect(0, 0, W, H);

    mouseX += (targetMX - mouseX) * 0.04;
    mouseY += (targetMY - mouseY) * 0.04;

    nodes.forEach((n) => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i++) {
      const node1 = nodes[i];
      if (!node1) continue;
      for (let j = i + 1; j < nodes.length; j++) {
        const node2 = nodes[j];
        if (!node2) continue;
        const dx = node1.x - node2.x;
        const dy = node1.y - node2.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 130) {
          ctx.strokeStyle = `rgba(168,255,120,${(1 - d / 130) * 0.2})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(node1.x, node1.y);
          ctx.lineTo(node2.x, node2.y);
          ctx.stroke();
        }
      }

      const mdx = node1.x - mouseX;
      const mdy = node1.y - mouseY;
      const md = Math.sqrt(mdx * mdx + mdy * mdy);
      if (md < 160) {
        ctx.strokeStyle = `rgba(168,255,120,${(1 - md / 160) * 0.55})`;
        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(node1.x, node1.y);
        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
      }
    }

    nodes.forEach((n) => {
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(168,255,120,0.55)";
      ctx.fill();
    });

    raf = requestAnimationFrame(draw);
  }

  function onMouseMove(e: MouseEvent) {
    targetMX = e.clientX;
    targetMY = e.clientY;
  }

  onMounted(() => {
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    draw();
  });

  onUnmounted(() => {
    cancelAnimationFrame(raf);
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", onMouseMove);
  });
}
