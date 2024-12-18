import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="container flex flex-col lg:flex-row items-center justify-between gap-8 py-12 md:py-24">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 flex-1">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Creative Design Solutions
        </h1>
        <p className="max-w-[700px] text-base sm:text-lg text-muted-foreground">
          Transforming ideas into visually stunning realities. Elevate your brand with professional graphic design.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <a href="#portfolio">View Portfolio</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/skills">Explore Skills</a>
          </Button>
        </div>
      </div>
      <div className="relative w-full max-w-[300px] lg:max-w-[400px] aspect-square">
        <Image
          src="https://i.pinimg.com/1200x/d6/a9/a2/d6a9a2018da406947f6ed377d302b628.jpg"
          alt="Designer Profile"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-full"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </section>
  )
}

