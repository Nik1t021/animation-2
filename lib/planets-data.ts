export interface Inhabitant {
  name: string
  description: string
  emoji: string
}

export interface Weather {
  condition: string
  temperature: string
  wind: string
  special: string
}

export interface Planet {
  id: string
  name: string
  nameRu: string
  color: string
  glowColor: string
  size: number
  orbitRadius: number
  orbitDuration: number
  inhabitants: Inhabitant[]
  weather: Weather
  description: string
}

export const planets: Planet[] = [
  {
    id: "mercury",
    name: "Mercury",
    nameRu: "Меркурий",
    color: "#B5B5B5",
    glowColor: "rgba(181, 181, 181, 0.5)",
    size: 12,
    orbitRadius: 80,
    orbitDuration: 8,
    inhabitants: [
      { name: "Теплоходы", description: "Кремниевые существа, питающиеся солнечным теплом", emoji: "🔥" },
      { name: "Тенелюбы", description: "Живут только в вечной тени кратеров", emoji: "🌑" },
    ],
    weather: {
      condition: "Экстремальные перепады",
      temperature: "От -180°C до +430°C",
      wind: "Практически отсутствует",
      special: "Солнечные бури каждые 88 земных дней",
    },
    description: "Ближайшая к Солнцу планета с экстремальными температурами",
  },
  {
    id: "venus",
    name: "Venus",
    nameRu: "Венера",
    color: "#E6C87B",
    glowColor: "rgba(230, 200, 123, 0.5)",
    size: 18,
    orbitRadius: 120,
    orbitDuration: 12,
    inhabitants: [
      { name: "Облачники", description: "Парящие медузы в верхних слоях атмосферы", emoji: "🪼" },
      { name: "Кислотники", description: "Бактерии, процветающие в серной кислоте", emoji: "🧪" },
    ],
    weather: {
      condition: "Кислотные облака",
      temperature: "+465°C постоянно",
      wind: "Ураганы до 360 км/ч",
      special: "Дождь из серной кислоты",
    },
    description: "Самая горячая планета с плотной токсичной атмосферой",
  },
  {
    id: "earth",
    name: "Earth",
    nameRu: "Земля",
    color: "#6B93D6",
    glowColor: "rgba(107, 147, 214, 0.5)",
    size: 20,
    orbitRadius: 160,
    orbitDuration: 16,
    inhabitants: [
      { name: "Люди", description: "Разумные существа, исследующие космос", emoji: "👨‍🚀" },
      { name: "Дельфины", description: "Умные морские обитатели", emoji: "🐬" },
      { name: "Деревья", description: "Молчаливые хранители планеты", emoji: "🌳" },
    ],
    weather: {
      condition: "Умеренный климат",
      temperature: "От -89°C до +57°C",
      wind: "Переменный, до 408 км/ч (торнадо)",
      special: "Четыре сезона, дождь, снег",
    },
    description: "Единственная известная планета с развитой жизнью",
  },
  {
    id: "mars",
    name: "Mars",
    nameRu: "Марс",
    color: "#C1440E",
    glowColor: "rgba(193, 68, 14, 0.5)",
    size: 16,
    orbitRadius: 200,
    orbitDuration: 22,
    inhabitants: [
      { name: "Красные черви", description: "Подземные существа в пещерах", emoji: "🪱" },
      { name: "Пылевики", description: "Живут внутри пылевых бурь", emoji: "🌪️" },
      { name: "Ледяные кристаллиды", description: "Обитают на полярных шапках", emoji: "❄️" },
    ],
    weather: {
      condition: "Пылевые бури",
      temperature: "От -125°C до +20°C",
      wind: "До 100 км/ч в бурю",
      special: "Глобальные пылевые штормы",
    },
    description: "Красная планета с древними руслами рек",
  },
  {
    id: "jupiter",
    name: "Jupiter",
    nameRu: "Юпитер",
    color: "#D8CA9D",
    glowColor: "rgba(216, 202, 157, 0.5)",
    size: 45,
    orbitRadius: 280,
    orbitDuration: 35,
    inhabitants: [
      { name: "Газовые левиафаны", description: "Километровые существа в атмосфере", emoji: "🐋" },
      { name: "Штормовые духи", description: "Энергетические сущности в Большом Красном Пятне", emoji: "👻" },
      { name: "Молниевики", description: "Питаются электрическими разрядами", emoji: "⚡" },
    ],
    weather: {
      condition: "Вечные штормы",
      temperature: "-145°C в облаках",
      wind: "До 620 км/ч",
      special: "Большое Красное Пятно - шторм размером с 2 Земли",
    },
    description: "Газовый гигант с мощнейшими штормами",
  },
  {
    id: "saturn",
    name: "Saturn",
    nameRu: "Сатурн",
    color: "#F4D59E",
    glowColor: "rgba(244, 213, 158, 0.5)",
    size: 38,
    orbitRadius: 360,
    orbitDuration: 50,
    inhabitants: [
      { name: "Кольцевые странники", description: "Живут в ледяных кольцах планеты", emoji: "💫" },
      { name: "Гексагоналы", description: "Обитают в шестиугольном шторме на полюсе", emoji: "🔷" },
    ],
    weather: {
      condition: "Сверхзвуковые ветра",
      temperature: "-178°C",
      wind: "До 1800 км/ч на экваторе",
      special: "Гексагональный шторм на северном полюсе",
    },
    description: "Планета с великолепными кольцами из льда",
  },
  {
    id: "uranus",
    name: "Uranus",
    nameRu: "Уран",
    color: "#9FE2E8",
    glowColor: "rgba(159, 226, 232, 0.5)",
    size: 28,
    orbitRadius: 430,
    orbitDuration: 70,
    inhabitants: [
      { name: "Боковые скользуны", description: "Адаптировались к наклону планеты", emoji: "🦑" },
      { name: "Метановые медузы", description: "Плавают в метановых облаках", emoji: "🪼" },
    ],
    weather: {
      condition: "Метановый туман",
      temperature: "-224°C",
      wind: "До 900 км/ч",
      special: "42-летние сезоны из-за наклона оси",
    },
    description: "Ледяной гигант, вращающийся на боку",
  },
  {
    id: "neptune",
    name: "Neptune",
    nameRu: "Нептун",
    color: "#5B5DDF",
    glowColor: "rgba(91, 93, 223, 0.5)",
    size: 26,
    orbitRadius: 500,
    orbitDuration: 90,
    inhabitants: [
      { name: "Глубинные титаны", description: "Живут в алмазных океанах под облаками", emoji: "💎" },
      { name: "Ультраветровики", description: "Летают в сверхзвуковых потоках", emoji: "🌬️" },
    ],
    weather: {
      condition: "Сверхштормы",
      temperature: "-214°C",
      wind: "До 2100 км/ч (самые быстрые в системе)",
      special: "Тёмные пятна - гигантские антициклоны",
    },
    description: "Самая ветреная планета Солнечной системы",
  },
]

export const sun = {
  name: "Солнце",
  color: "#FDB813",
  glowColor: "rgba(253, 184, 19, 0.8)",
  size: 60,
}
