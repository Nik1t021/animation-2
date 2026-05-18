"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Thermometer, Wind, Sparkles, Users } from "lucide-react"
import type { Planet } from "@/lib/planets-data"

interface PlanetModalProps {
  planet: Planet | null
  onClose: () => void
}

export function PlanetModal({ planet, onClose }: PlanetModalProps) {
  if (!planet) return null

  return (
    <AnimatePresence>
      {planet && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-2xl max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
            animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div 
              className="rounded-2xl border border-border overflow-hidden"
              style={{
                background: `linear-gradient(135deg, rgba(20, 20, 35, 0.95) 0%, rgba(10, 10, 20, 0.98) 100%)`,
                boxShadow: `0 0 40px ${planet.glowColor}, inset 0 1px 0 rgba(255,255,255,0.1)`,
              }}
            >
              {/* Header */}
              <div 
                className="relative p-6 pb-4"
                style={{
                  background: `linear-gradient(180deg, ${planet.color}15 0%, transparent 100%)`,
                }}
              >
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors text-foreground"
                  aria-label="Закрыть"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-4">
                  {/* Planet Preview */}
                  <motion.div
                    className="rounded-full flex-shrink-0"
                    style={{
                      width: 80,
                      height: 80,
                      background: planet.id === "earth"
                        ? `radial-gradient(circle at 30% 30%, #9BC5E0, ${planet.color}, #2E5A3C)`
                        : `radial-gradient(circle at 30% 30%, white, ${planet.color}, ${planet.color})`,
                      boxShadow: `0 0 30px ${planet.glowColor}`,
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 30px ${planet.glowColor}`,
                        `0 0 50px ${planet.glowColor}`,
                        `0 0 30px ${planet.glowColor}`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <div>
                    <h2 className="text-3xl font-bold text-foreground">{planet.nameRu}</h2>
                    <p className="text-muted-foreground text-sm mt-1">{planet.name}</p>
                    <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                      {planet.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-2 space-y-6">
                {/* Weather Section */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Sparkles size={20} style={{ color: planet.color }} />
                    Погодные условия
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <WeatherCard
                      icon={<Thermometer size={18} />}
                      label="Температура"
                      value={planet.weather.temperature}
                      color={planet.color}
                    />
                    <WeatherCard
                      icon={<Wind size={18} />}
                      label="Ветер"
                      value={planet.weather.wind}
                      color={planet.color}
                    />
                    <div className="sm:col-span-2">
                      <WeatherCard
                        icon={<Sparkles size={18} />}
                        label="Особенности"
                        value={planet.weather.special}
                        color={planet.color}
                      />
                    </div>
                  </div>
                </div>

                {/* Inhabitants Section */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users size={20} style={{ color: planet.color }} />
                    Жители планеты
                  </h3>
                  <div className="space-y-3">
                    {planet.inhabitants.map((inhabitant, index) => (
                      <motion.div
                        key={inhabitant.name}
                        className="p-4 rounded-xl bg-secondary/30 border border-border/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">{inhabitant.emoji}</span>
                          <div>
                            <h4 className="font-medium text-foreground">{inhabitant.name}</h4>
                            <p className="text-sm text-muted-foreground mt-1">
                              {inhabitant.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

function WeatherCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: string
}) {
  return (
    <div 
      className="p-3 rounded-lg bg-secondary/20 border border-border/30"
      style={{
        boxShadow: `inset 0 0 20px ${color}10`,
      }}
    >
      <div className="flex items-center gap-2 text-muted-foreground text-xs mb-1">
        {icon}
        {label}
      </div>
      <p className="text-foreground text-sm font-medium">{value}</p>
    </div>
  )
}
