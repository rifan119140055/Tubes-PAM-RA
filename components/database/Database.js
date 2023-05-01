export const COLOURS = {
  white: '#ffffff',
  black: '#000000',
  green: '#00AC76',
  red: '#C04345',
  blue: '#0043F9',
  backgroundLight: '#F0F0F3',
  backgroundMedium: '#B9B9B9',
  backgroundDark: '#777777',
};

export const Items = [
  {
    id: 1,
    category: "keyboards",
    productName:
      "GAMEN Titan Elite Mechanical Pluggable Switch Gaming Keyboard WiredRGB",
    productPrice: 259900,
    description:
      "Outemu Blue Switch, tombol yang kuat dengan ketahanan 50 juta kali | Cocok untuk gamer, pekerja kantor sekolah dan lain-lain",
    isOff: true,
    offPercentage: 10,
    productImage: require("../database/images/keyboard/ga1.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/keyboard/ga2.jpg"),
      require("../database/images/keyboard/ga3.jpg"),
      require("../database/images/keyboard/ga4.jpg"),
    ],
  },
  {
    id: 2,
    category: "keyboards",
    productName: "Rexus Keyboard Gaming Mechanical Legionare MX5.2 TKL",
    productPrice: 369000,
    description:
      "EMPAT VARIAN KEYCAPS | SWITCH CONTENT 50M LIFESPAN | KEYBOARD 87 TOMBOL DENGAN DESAIN KOMPAK",
    isOff: false,
    productImage: require("../database/images/keyboard/re1.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/keyboard/re2.jpg"),
      require("../database/images/keyboard/re3.jpg"),
      require("../database/images/keyboard/re4.jpg"),
    ],
  },
  {
    id: 3,
    category: "keyboards",
    productName: "Keyboard USB Logitech K120",
    productPrice: 104600,
    description: "KESEDERHANAAN YANG ANDAL | DESAIN YANG SEMPURNA",
    isOff: true,
    offPercentage: 18,
    productImage: require("../database/images/keyboard/lo1.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/keyboard/lo2.jpg"),
      require("../database/images/keyboard/lo3.jpg"),
      require("../database/images/keyboard/lo4.jpg"),
    ],
  },
  {
    id: 4,
    category: "keyboards",
    productName:
      "Keyboard Gaming NYK Eris K06, NYK K-06 Eris / NYK K06 Eris / NYK K 06",
    productPrice: 120000,
    description:
      "Wired Membrane Keyboard | 61-Keys Layout | Backlight Switch | Rainbow Backlight | USB Connection",
    isOff: false,
    productImage: require("../database/images/keyboard/ny1.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/keyboard/ny2.jpg"),
      require("../database/images/keyboard/ny3.jpg"),
      require("../database/images/keyboard/ny4.jpg"),
    ],
  },
  {
    id: 5,
    category: "mouse",
    productName: "HP Z3700 Silver Wireless Mouse",
    productPrice: 166000,
    description:
      "Designed with flair | Wireless convenience | Battery life that lasts.",
    isOff: false,
    productImage: require("../database/images/mouse/ri2.jpg"),
    isAvailable: false,
    productImageList: [
      require("../database/images/mouse/ri1.jpg"),
      require("../database/images/mouse/ri3.jpg"),
      require("../database/images/mouse/ri4.jpg"),
    ],
  },
  {
    id: 6,
    category: "mouse",
    productName: "Rexus Mouse Wireless Gaming Arka II RX-107 Dual Connection",
    productPrice: 329000,
    description:
      "OIC Sensor : PMW3325 | Switch : Huano, 20 juta klik | Tingkat Polling : 1000 Hz | Tombol : 8 Tombol | LED : RGB",
    isOff: false,
    productImage: require("../database/images/mouse/mu1.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/mouse/mu2.jpg"),
      require("../database/images/mouse/mu3.jpg"),
      require("../database/images/mouse/mu4.jpg"),
    ],
  },
  {
    id: 7,
    category: "mouse",
    productName: "Fantech VENOM II WGC2 Wireless Mouse Gaming Rechargeable",
    productPrice: 156900,
    description:
      "PIXART 3212 Gaming Optical Sensor | Dpi 800-2400 | 30 ips speed | Huano 20 Million Clicks | 10g Acceleration",
    isOff: false,
    productImage: require("../database/images/mouse/tu1.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/mouse/tu2.jpg"),
      require("../database/images/mouse/tu3.jpg"),
      require("../database/images/mouse/tu4.jpg"),
    ],
  },
  {
    id: 8,
    category: "mouse",
    productName: "Logitech G502 HERO High Performance Mouse Gaming Wired RGB",
    productPrice: 649000,
    description:
      "G502 HERO HIGH PERFORMANCE GAMING MOUSE | Dpi 100 - 25,600 | KENDALI DI UJUNG JEMARI ANDA 11 TOMBOL YANG DAPAT DIPROGRAM",
    isOff: false,
    productImage: require("../database/images/mouse/log1.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/mouse/log2.jpg"),
      require("../database/images/mouse/log3.jpg"),
      require("../database/images/mouse/log4.jpg"),
    ],
  },
  {
    id: 9,
    category: "headphones",
    productName: "Samsung Galaxy A34 5G",
    productPrice: 4435000,
    description:
      "Processor : Dimensity 920+ | CPU : Octa Core Prosesor 5G0 | Size : 6.5 Inch | Technology : Super AMOLED+, 90Hz Refresh Rate",
    isOff: false,
    productImage: require("../database/images/handphone/hp1.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/handphone/hp2.jpg"),
      require("../database/images/handphone/hp3.jpg"),
      require("../database/images/handphone/hp4.jpg"),
    ],
  },
  {
    id: 10,
    category: "headphones",
    productName: "realmi 10 pro plus",
    productPrice: 4435000,
    description:
      "Sistem Operasi : Android 13 | Prosesor : MediaTek Dimensity 920 | Size : 6.7 inch | Technology : AMOLED, 1B colors, HDR10+, 120Hz, 800 nits",
    isOff: false,
    productImage: require("../database/images/handphone/ph1.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/handphone/ph2.jpg"),
      require("../database/images/handphone/ph3.jpg"),
      require("../database/images/handphone/ph4.jpg"),
    ],
  },
  {
    id: 11,
    category: "headphones",
    productName: "OPPO RENO 8T ",
    productPrice: 4173000,
    description:
      "Display : AMOLED, 90Hz, 430 nits (typ), 800 nits (peak)| Dimensions : 160.8 x 73.8 x 7.8 mm | Size : 6.43 inch | Weight : 180 g",
    isOff: false,
    productImage: require("../database/images/handphone/php1.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/handphone/php2.jpg"),
      require("../database/images/handphone/php3.jpg"),
      require("../database/images/handphone/php4.jpg"),
    ],
  },
  {
    id: 12,
    category: "headphones",
    productName: "vivo V27 ",
    productPrice: 5999000,
    description:
      "Prosesor : MediaTek Dimensity 7200| Dimensions : 164.1 × 74.8 × 7.36 mm | Size : 6.78 inch | Resolusi:2400 × 1080 (FHD+)",
    isOff: false,
    productImage: require("../database/images/handphone/phq1.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/handphone/phq2.jpg"),
      require("../database/images/handphone/phq3.jpg"),
      require("../database/images/handphone/phq4.jpg"),
    ],
  },
];
