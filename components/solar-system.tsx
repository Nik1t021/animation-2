"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { planets, sun, type Planet } from "@/lib/planets-data"
import { PlanetModal } from "./planet-modal"
import { Stars } from "./stars"

export function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null)
  const [hoveredPlanet, setHoveredPlanet] = useState<string | null>(null)

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <Stars />
      
      {/* Title */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground tracking-wider">
          Солнечная Система
        </h1>
        <p className="text-muted-foreground mt-2 text-sm md:text-base">
          Нажмите на планету, чтобы узнать о её жителях
        </p>
      </div>

      {/* Solar System Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative" style={{ width: "1100px", height: "1100px" }}>
          
          {/* Orbital Paths */}
          {planets.map((planet) => (
            <div
              key={`orbit-${planet.id}`}
              className="absolute rounded-full border border-border/30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: planet.orbitRadius * 2,
                height: planet.orbitRadius * 2,
              }}
            />
          ))}

          {/* Sun */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer z-10"
            style={{
              width: sun.size,
              height: sun.size,
              background: `radial-gradient(circle at 30% 30%, #FFF5C3, ${sun.color}, #E67E00)`,
              boxShadow: `0 0 60px ${sun.glowColor}, 0 0 120px ${sun.glowColor}, 0 0 180px rgba(253, 184, 19, 0.3)`,
            }}
            animate={{
              boxShadow: [
                `0 0 60px ${sun.glowColor}, 0 0 120px ${sun.glowColor}, 0 0 180px rgba(253, 184, 19, 0.3)`,
                `0 0 80px ${sun.glowColor}, 0 0 140px ${sun.glowColor}, 0 0 200px rgba(253, 184, 19, 0.4)`,
                `0 0 60px ${sun.glowColor}, 0 0 120px ${sun.glowColor}, 0 0 180px rgba(253, 184, 19, 0.3)`,
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Planets */}
          {planets.map((planet) => (
            <motion.div
              key={planet.id}
              className="absolute left-1/2 top-1/2"
              style={{
                width: planet.orbitRadius * 2,
                height: planet.orbitRadius * 2,
                marginLeft: -planet.orbitRadius,
                marginTop: -planet.orbitRadius,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: planet.orbitDuration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <motion.button
                className="absolute rounded-full cursor-pointer transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{
                  width: planet.size,
                  height: planet.size,
                  top: -planet.size / 2,
                  left: `calc(50% - ${planet.size / 2}px)`,
                  background: planet.id === "saturn" 
                    ? `radial-gradient(circle at 30% 30%, #FFF8DC, ${planet.color}, #C9A227)`
                    : planet.id === "jupiter"
                    ? `radial-gradient(circle at 30% 30%, #F5E6C8, ${planet.color}, #A67C52)`
                    : planet.id === "earth"
                    ? `radial-gradient(circle at 30% 30%, #9BC5E0, ${planet.color}, #2E5A3C)`
                    : `radial-gradient(circle at 30% 30%, white, ${planet.color}, ${planet.color})`,
                  boxShadow: hoveredPlanet === planet.id
                    ? `0 0 30px ${planet.glowColor}, 0 0 60px ${planet.glowColor}`
                    : `0 0 15px ${planet.glowColor}`,
                }}
                onClick={() => setSelectedPlanet(planet)}
                onMouseEnter={() => setHoveredPlanet(planet.id)}
                onMouseLeave={() => setHoveredPlanet(null)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
                animate={{ rotate: -360 }}
                transition={{
                  rotate: {
                    duration: planet.orbitDuration,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
                aria-label={`Планета ${planet.nameRu}`}
              >
                {/* Saturn Rings */}
                {planet.id === "saturn" && (
                  <div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                    style={{
                      width: planet.size * 2,
                      height: planet.size * 0.5,
                      border: "3px solid rgba(244, 213, 158, 0.6)",
                      background: "transparent",
                    }}
                  />
                )}
              </motion.button>

              {/* Planet Label */}
              <AnimatePresence>
                {hoveredPlanet === planet.id && (
                  <motion.div
                    className="absolute text-foreground text-xs font-medium whitespace-nowrap pointer-events-none"
                    style={{
                      top: -planet.size / 2 - 25,
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0, rotate: -360 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{
                      rotate: {
                        duration: planet.orbitDuration,
                        repeat: Infinity,
                        ease: "linear",
                      },
                    }}
                  >
                    {planet.nameRu}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Planet Modal */}
      <PlanetModal 
        planet={selectedPlanet} 
        onClose={() => setSelectedPlanet(null)} 
      />
    </div>
  )
}
