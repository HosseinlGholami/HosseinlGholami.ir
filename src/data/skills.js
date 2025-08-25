import { Globe, Database, Smartphone, Zap } from 'lucide-react';

export const skills = [
  { 
    name: 'Embedded & IoT Development', 
    icon: Smartphone, 
    description: 'ESP32, STM32, MediaTek, RTOS', 
    level: 90 
  },
  { 
    name: 'Backend Development', 
    icon: Database, 
    description: 'Django, FastAPI, Celery, RabbitMQ, Redis, SQL/NoSQL', 
    level: 75 
  },
  { 
    name: 'Frontend Development', 
    icon: Globe, 
    description: 'React, HTML5, CSS3, JavaScript', 
    level: 50 
  },
  { 
    name: 'DevOps & Tools', 
    icon: Zap, 
    description: 'Docker, Git, Linux', 
    level: 75 
  }
];
