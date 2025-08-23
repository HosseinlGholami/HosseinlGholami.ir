import { Globe, Database, Smartphone, Zap } from 'lucide-react';

export const skills = [
  { 
    name: 'Embedded & IoT Development', 
    icon: Smartphone, 
    description: 'ESP32, STM32, MediaTek, Quectel, AiThinker', 
    level: 90 
  },
  { 
    name: 'Backend Development', 
    icon: Database, 
    description: 'Django, FastAPI, Flask, RabbitMQ, Redis, SQL/NoSQL', 
    level: 80 
  },
  { 
    name: 'Frontend Development', 
    icon: Globe, 
    description: 'React, HTML5, CSS3, JavaScript', 
    level: 65 
  },
  { 
    name: 'DevOps & Tools', 
    icon: Zap, 
    description: 'Docker, Git, Linux, Jira, CI/CD', 
    level: 70 
  }
];
