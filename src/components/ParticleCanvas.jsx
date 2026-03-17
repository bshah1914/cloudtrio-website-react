import { useEffect, useRef } from 'react'

export default function ParticleCanvas() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    if (!c) return
    const ctx = c.getContext('2d')
    let id, particles = []

    function resize() { c.width = c.parentElement.offsetWidth; c.height = c.parentElement.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    class P {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * c.width; this.y = Math.random() * c.height
        this.vx = (Math.random() - 0.5) * 0.25; this.vy = (Math.random() - 0.5) * 0.25
        this.r = Math.random() * 1.2 + 0.4; this.o = Math.random() * 0.25 + 0.05
        this.hue = Math.random() > 0.5 ? '99,102,241' : '168,85,247'
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > c.width) this.vx *= -1
        if (this.y < 0 || this.y > c.height) this.vy *= -1
      }
      draw() {
        ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.hue},${this.o})`; ctx.fill()
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new P())

    function loop() {
      ctx.clearRect(0, 0, c.width, c.height)
      particles.forEach(p => { p.update(); p.draw() })
      for (let i = 0; i < particles.length; i++)
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y); ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(99,102,241,${0.04 * (1 - d / 120)})`; ctx.lineWidth = 0.5; ctx.stroke()
          }
        }
      id = requestAnimationFrame(loop)
    }
    loop()
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />
}
