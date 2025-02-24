import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="h-screen container flex flex-col lg:flex-row items-center justify-center py-12 md:py-24">
      <div className="flex flex-col items-center lg:items-center text-center lg:text-left space-y-4 flex-1 mt-8">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Next+ Tailwindcss + ShadcnUI  
        </h1>
        <p className="max-w-[700px] text-base sm:text-lg items-center text-muted-foreground">
          A modern front-end template for building fast, accessible websites.
        </p>
        <Button className="flex items-center justify-center  gap-2 " size="lg">
        Get started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 010-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>

      </div>
    </section>
  )
}

