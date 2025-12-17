// Mock data for Lion Eye Protection Services

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  pricing: {
    unit: string;
    rate: number;
    currency: string;
  };
  features: string[];
}

export interface MonitoringStatus {
  id: string;
  location: string;
  type: 'camera' | 'drone' | 'sensor';
  status: 'active' | 'warning' | 'offline';
  lastUpdate: string;
}

export interface Alert {
  id: string;
  type: 'resolved' | 'pending' | 'scheduled';
  message: string;
  timestamp: string;
  severity: 'info' | 'warning' | 'critical';
}

export interface Personnel {
  id: string;
  name: string;
  role: string;
  experience: string;
  certification: string;
  imageUrl?: string;
}

export interface TrainingCourse {
  id: string;
  title: string;
  duration: string;
  level: 'Basic' | 'Intermediate' | 'Advanced';
  startDate: string;
  availableSlots: number;
  description: string;
}

// Service offerings
export const services: Service[] = [
  {
    id: 'security-guard',
    name: 'Security Guard Services',
    description: 'Professional security personnel for your premises',
    icon: 'Shield',
    pricing: {
      unit: 'hourly',
      rate: 150,
      currency: 'R',
    },
    features: [
      '24/7 availability',
      'Trained professionals',
      'Rapid response',
      'Incident reporting',
    ],
  },
  {
    id: 'drone-surveillance',
    name: 'Drone Surveillance',
    description: 'Advanced aerial monitoring and patrol services',
    icon: 'Drone',
    pricing: {
      unit: 'daily',
      rate: 2500,
      currency: 'R',
    },
    features: [
      'Real-time video feed',
      'Thermal imaging',
      'Large area coverage',
      'Night vision capability',
    ],
  },
  {
    id: 'camera-installation',
    name: 'CCTV Installation',
    description: 'Professional camera and surveillance system setup',
    icon: 'Camera',
    pricing: {
      unit: 'quote',
      rate: 15000,
      currency: 'R',
    },
    features: [
      'HD cameras',
      'Remote monitoring',
      'Cloud storage',
      '1-year warranty',
    ],
  },
  {
    id: 'security-fence',
    name: 'Security Fencing',
    description: 'High-quality perimeter security fencing installation',
    icon: 'Fence',
    pricing: {
      unit: 'per meter',
      rate: 450,
      currency: 'R',
    },
    features: [
      'Electric fencing',
      'Anti-climb design',
      'Professional installation',
      'Maintenance included',
    ],
  },
];

// Live monitoring data
export const monitoringStatuses: MonitoringStatus[] = [
  {
    id: 'cam-001',
    location: 'Main Entrance',
    type: 'camera',
    status: 'active',
    lastUpdate: '2 minutes ago',
  },
  {
    id: 'fence-001',
    location: 'Perimeter Fence - North',
    type: 'sensor',
    status: 'active',
    lastUpdate: '5 minutes ago',
  },
  {
    id: 'drone-001',
    location: 'Sector 3 Patrol',
    type: 'drone',
    status: 'active',
    lastUpdate: '1 minute ago',
  },
  {
    id: 'cam-004',
    location: 'Parking Area',
    type: 'camera',
    status: 'warning',
    lastUpdate: '10 minutes ago',
  },
];

// Alert notifications
export const alerts: Alert[] = [
  {
    id: 'alert-001',
    type: 'resolved',
    message: 'Motion detected at south entrance - False alarm resolved',
    timestamp: '2 hours ago',
    severity: 'info',
  },
  {
    id: 'alert-002',
    type: 'scheduled',
    message: 'Scheduled maintenance for Camera 4 tomorrow at 10:00 AM',
    timestamp: 'Tomorrow',
    severity: 'info',
  },
  {
    id: 'alert-003',
    type: 'resolved',
    message: 'Perimeter breach attempt detected and handled',
    timestamp: '5 hours ago',
    severity: 'warning',
  },
];

// Personnel database
export const personnel: Personnel[] = [
  {
    id: 'pers-001',
    name: 'John Smith',
    role: 'Certified Security Guard',
    experience: '5 years experience',
    certification: 'PSIRA Grade A',
  },
  {
    id: 'pers-002',
    name: 'Sarah Jones',
    role: 'Drone Operator',
    experience: '3 years experience',
    certification: 'Advanced Drone License',
  },
  {
    id: 'pers-003',
    name: 'Mike Wilson',
    role: 'Training Instructor',
    experience: '15 years in security',
    certification: 'Master Instructor',
  },
  {
    id: 'pers-004',
    name: 'Linda Brown',
    role: 'Security Supervisor',
    experience: '8 years experience',
    certification: 'PSIRA Grade A, Site Management',
  },
];

// Training courses
export const trainingCourses: TrainingCourse[] = [
  {
    id: 'course-001',
    title: 'Basic Security Training',
    duration: '2 weeks',
    level: 'Basic',
    startDate: 'Monday, Dec 23',
    availableSlots: 12,
    description:
      'Fundamental security principles, access control, and emergency response procedures.',
  },
  {
    id: 'course-002',
    title: 'Advanced Surveillance Technology',
    duration: '1 week',
    level: 'Advanced',
    startDate: 'Friday, Dec 27',
    availableSlots: 8,
    description:
      'Master CCTV systems, drone operation, and modern surveillance techniques.',
  },
  {
    id: 'course-003',
    title: 'Executive Protection Specialist',
    duration: '3 weeks',
    level: 'Advanced',
    startDate: 'Monday, Jan 6',
    availableSlots: 6,
    description:
      'VIP protection, threat assessment, and close protection strategies.',
  },
  {
    id: 'course-004',
    title: 'First Responder & Medical Training',
    duration: '1 week',
    level: 'Intermediate',
    startDate: 'Wednesday, Jan 8',
    availableSlots: 15,
    description:
      'Emergency medical response, CPR, and first aid for security personnel.',
  },
];

// Booking time slots
export const generateTimeSlots = (): string[] => {
  const slots: string[] = [];
  for (let hour = 8; hour <= 20; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
  }
  return slots;
};

// Generate available dates for next 7 days
export const generateAvailableDates = (): string[] => {
  const dates: string[] = [];
  const today = new Date();
  for (let i = 1; i <= 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }
  return dates;
};
