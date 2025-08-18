export const workExperience = [
  {
    id: 1,
    company: 'Digikala (Automation & Robotics Team)',
    position: 'Software Engineer Tech Lead • formerly Electronics Engineer',
    duration: '2022 - Present',
    location: 'Tehran, Iran',
    description: 'Leading the design and implementation of embedded automation devices and backend services for the largest e-commerce company in Iran.',
    achievements: [
      'Led firmware and backend integration for warehouse devices (Wheel Sorter, Put-to-Light, Smart Scale, Dimension Detection, Noise Detector)',
      'Implemented MQTT-based orchestration with Django/FastAPI backends and MySQL/Redis',
      'Enhanced device reliability with OTA updates, observability, and metrics dashboards',
      'Collaborated cross-functionally with mechanical, electronic, and operations teams to move prototypes to production'
    ],
    technologies: ['ESP32', 'STM32', 'C/C++', 'Python', 'Django', 'FastAPI', 'MQTT', 'RabbitMQ', 'Redis', 'MySQL/PostgreSQL'],
    projects: [
      {
        name: 'Wheel Sorter',
        description: 'Real-time sorter integrating CAN bus drivers and barcode readers for accurate package routing.',
        impact: 'Increased throughput and reduced manual handling errors across warehouse shifts'
      },
      {
        name: 'Smart Scale',
        description: 'IoT-enabled scale (100g–50kg) with ESP32 + HX711, integrated with WMS via Django APIs.',
        impact: 'Improved accuracy and reduced manual workload in logistics weight-check processes'
      },
      {
        name: 'Put-to-Light System (V2)',
        description: 'Cloud-backed ESP32 LED strip system guiding warehouse operators.',
        impact: 'Cut operator errors and improved picking speed during peak hours'
      }
    ]
  },
  {
    id: 2,
    company: 'Basir Andishan Bina Tadbir (BABT)',
    position: 'Embedded Software Engineer',
    duration: '2021 - 2022 (1 year 3 months)',
    location: 'Tehran, Iran',
    description: 'Developed a multifunctional vehicle tracker with GSM/GNSS capabilities using MediaTek SoCs.',
    achievements: [
      'Extended vendor firmware (MT2503/MT6261) for tracking and anti-theft features',
      'Integrated accelerometer/gyroscope sensors for harsh-event detection',
      'Optimized I/O, storage, SMS, GPRS, MIDI (voice over call), and DTMF (over call) for commercial readiness'
    ],
    technologies: ['C', 'Assembly', 'Python', 'MediaTek MT2503', 'MT6261', 'Quectel', 'Simcom', 'Holtek', 'New-Mobie', 'GNSS', 'GSM/GPRS', 'I2C/SPI/UART', 'Nucleus RTOS', 'OpenCPU'],
    projects: [
      {
        name: 'Vehicle Tracker & Anti-Theft',
        description: 'Low-power GSM/GNSS tracker with motion events and OTA provisioning.',
        impact: 'Transitioned from prototype to commercial-scale production'
      }
    ]
  },
  {
    id: 3,
    company: 'Andishe Fartak AmirKabir (Atrovan)',
    position: 'Embedded Developer (IoT)',
    duration: '2018 - 2019 (8 months)',
    location: 'Tehran, Iran',
    description: 'Developed AtRemote, an IoT IR repeater that consolidated home device remotes into a single mobile app.',
    achievements: [
      'Implemented STM32F103 firmware to capture, store, and regenerate IR frames',
      'Designed a UART command interface for learning and transmit modes'
    ],
    technologies: ['STM32F103', 'C', 'FreeRTOS', 'IR Protocols', 'UART', 'Embedded Flash'],
    projects: [
      {
        name: 'AtRemote (Smart IR Hub)',
        description: 'IoT IR hub enabling mobile-based control of TVs, ACs, and receivers.',
        impact: 'Simplified user experience by replacing multiple remotes with one mobile app'
      }
    ]
  },
  {
    id: 4,
    company: 'Geektori.ir',
    position: 'Co-Founder / Automation Engineer (Side Project)',
    duration: '2019 - 2021',
    location: 'Tehran, Iran',
    description: 'Launched a sticker e-commerce startup and built automation tools for routine workflows.',
    achievements: [
      'Developed Photoshop JS scripts to batch-generate cut-lines and mockups',
      'Automated Sazito admin tasks with Python + Selenium (uploads, sales reports, order updates)'
    ],
    technologies: ['JavaScript (Photoshop Scripting)', 'Python', 'Selenium', 'Excel/CSV automation'],
    projects: [
      {
        name: 'Ops Automation Suite',
        description: 'Scripts automating design and admin tasks for e-commerce operations.',
        impact: 'Reduced manual workload and accelerated product listing cycle'
      }
    ]
  },
  {
    id: 5,
    company: 'Telecommunication Company of Iran (TCI)',
    position: 'Intern (Fiber Optic Systems)',
    duration: '2018 (6 months)',
    location: 'Tehran, Iran',
    description: 'Assisted in maintenance and documentation of FiberHome telecom systems.',
    achievements: [
      'Reviewed configuration and maintenance documentation for FiberHome devices',
      'Supported routine system checks and troubleshooting workflows'
    ],
    technologies: ['FiberHome', 'Optical Networks'],
    projects: [
      {
        name: 'FiberHome Documentation',
        description: 'Supported field teams by studying and summarizing system maintenance docs.',
        impact: 'Improved readiness and reduced response time for network operations'
      }
    ]
  },
  {
    id: 6,
    company: 'Freelance (Scrap Battery Trading)',
    position: 'Independent Trader',
    duration: '2015 - 2018',
    location: 'Tehran, Iran',
    description: 'Bought scrap batteries via auctions and resold them to Saba Battery.',
    achievements: [
      'Managed sourcing, auction participation, pricing, and B2B sales independently',
      'Gained early experience in negotiation, operations, and business finance'
    ],
    technologies: ['Auctions', 'B2B Sales', 'Logistics'],
    projects: [
      {
        name: 'Scrap Battery Resale Loop',
        description: 'Created a repeatable buy-resell workflow between Kerman Motor and Saba Battery.',
        impact: 'Generated steady cashflow to self-fund undergraduate studies'
      }
    ]
  }
];
