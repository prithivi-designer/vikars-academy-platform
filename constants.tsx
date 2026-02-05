import { Testimonial, StatItem, FeatureItem, ProgramItem, FAQItem } from './types';
import { Users, BookOpen, Trophy, Activity, Map, Cpu, CheckCircle } from 'lucide-react';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    country: "India",
    flag: "🇮🇳",
    role: "Parent (Class 10 CBSE)",
    content: "The GPS Learning Path™ helped us understand exactly where my son was struggling. His Science score jumped by 30% in just 3 months.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Arun Patel",
    country: "India",
    flag: "🇮🇳",
    role: "Parent (Class 12 NEET)",
    content: "We tried group coaching but the 1:1 attention at Vikar's made all the difference for Physics. The teachers clarify doubts instantly.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Sarah John",
    country: "India",
    flag: "🇮🇳",
    role: "Parent (IB Board)",
    content: "Finally found tutors who understand the IB inquiry-based approach. The guidance for Internal Assessments was exceptional.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=3"
  },
  {
    id: 4,
    name: "Vikram Singh",
    country: "India",
    flag: "🇮🇳",
    role: "Student (Class 9)",
    content: "I used to hate Maths, but the gamified approach and the logic puzzles actually made it fun. I feel much more confident now.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=4"
  },
  {
    id: 5,
    name: "Meera Reddy",
    country: "India",
    flag: "🇮🇳",
    role: "Parent (Class 6)",
    content: "The AI workshop was a brilliant addition. My daughter is now using AI tools for her school projects creatively.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=5"
  }
];

export const STATS: StatItem[] = [
  { value: "5000+", label: "Trusted Parents", color: "text-cyan-400" },
  { value: "95%", label: "Retention Rate", color: "text-green-400" },
  { value: "92%", label: "Grade Improvement", color: "text-emerald-400" },
];

export const CORE_OFFERINGS: FeatureItem[] = [
  {
    title: "Personalised One-on-One Classes",
    description: "One student. One expert. Maximum results. No group noise, no distractions—just your child and a dedicated expert tutor.",
    highlight: "1:1 LIVE TUITION",
    icon: Users,
    bgColor: "bg-blue-50",
    dotColor: "text-blue-500"
  },
  {
    title: "Board-Specific Syllabus Support",
    description: "From NCERT to IB, everything is covered. Taught exactly as examiners expect it—no shortcuts.",
    highlight: "CBSE • ICSE • IB",
    icon: BookOpen,
    bgColor: "bg-purple-50",
    dotColor: "text-purple-500"
  },
  {
    title: "Expert Teachers",
    description: "Handpicked from top institutions. Verified, demo-observed, and trained to make tough topics simple.",
    highlight: "VERIFIED EXPERTS",
    icon: Trophy,
    bgColor: "bg-green-50",
    dotColor: "text-green-500"
  },
  {
    title: "AI + Human Progress Tracker",
    description: "Real progress with AI-powered analytics (speed, accuracy) + teacher insights for parents.",
    highlight: "WEEKLY REPORTS",
    icon: Activity,
    bgColor: "bg-orange-50",
    dotColor: "text-orange-500"
  },
  {
    title: "GPS Learning Path™",
    description: "Our exclusive framework maps exactly where your child stands, what's next, and how to get there.",
    highlight: "EXCLUSIVE TO VIKAR'S",
    icon: Map,
    bgColor: "bg-pink-50",
    dotColor: "text-pink-500"
  },
  {
    title: "AI Future-Ready Skills",
    description: "Workshops that make your child future-ready: AI tools, digital ethics, and creativity.",
    highlight: "AGES 10-17",
    icon: Cpu,
    bgColor: "bg-indigo-50",
    dotColor: "text-indigo-500"
  }
];

export const PROGRAMS: ProgramItem[] = [
  {
    title: "CBSE",
    description: "Central Board of Secondary Education",
    points: [
      "Complete NCERT-aligned coverage (Grades 3–12)",
      "Strong focus on concept clarity & exam patterns",
      "Regular tests & progress reports"
    ],
    highlight: "Trusted by 2,000+ CBSE parents",
    color: "bg-green-100 border-green-200 text-green-800"
  },
  {
    title: "ICSE",
    description: "Indian Certificate of Secondary Education",
    points: [
      "Grammar-rich English, Science, and Math focus",
      "Daily writing practice & creative learning",
      "Weekly tutor feedback"
    ],
    highlight: "90% reported improved writing skills",
    color: "bg-blue-100 border-blue-200 text-blue-800"
  },
  {
    title: "IB",
    description: "International Baccalaureate (PYP, MYP & DP)",
    points: [
      "Certified tutors for global curriculum",
      "Inquiry-based learning for critical thinking",
      "Guidance for Extended Essays & TOK"
    ],
    highlight: "Students consistently secure 6+ points",
    color: "bg-yellow-100 border-yellow-200 text-yellow-800"
  },
  {
    title: "State Boards",
    description: "All State Syllabuses",
    points: [
      "Tailored to regional syllabus (Grades 3–12)",
      "Regional languages + English medium support",
      "Answer-writing strategies for high marks"
    ],
    highlight: "Avg 80% score improvement",
    color: "bg-red-100 border-red-200 text-red-800"
  },
  {
    title: "NEET Foundation",
    description: "Preparation Grades 9–12",
    points: [
      "Step-by-step Physics, Chem & Bio mastery",
      "Foundation → Advanced program",
      "Weekly mock tests & AIR-level questions"
    ],
    highlight: "80% qualify for top institutes",
    color: "bg-purple-100 border-purple-200 text-purple-800"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is one-on-one online tuition?",
    answer: "One-on-one online tuition means your child studies with a dedicated tutor, no group distractions. This personalized method helps children learn faster and score better.",
    cta: "Book a free demo to see how it works."
  },
  {
    question: "How is personalized tuition better than group classes?",
    answer: "Unlike group tuition, one-on-one classes give your child 100% attention, customized lessons, and instant doubt-solving. Parents report faster improvement within 2–3 months.",
    cta: "Try a trial class and experience the difference."
  },
  {
    question: "Do you provide tuition for CBSE, ICSE, IB & State Boards?",
    answer: "Yes. We cover CBSE, ICSE, IB, and State syllabus for Classes 3–12 with expert tutors. Whether it’s NCERT, board exams, or PCM/PCB, our students get complete support.",
  },
  {
    question: "How do I know my child is improving?",
    answer: "We send weekly progress reports with AI + teacher insights showing accuracy, speed, and mistakes. Over 92% of students improved grades within 3 months.",
  },
  {
    question: "What if my child doesn’t like the tutor?",
    answer: "No problem! You can switch tutors anytime at no extra cost until you find the perfect match. Your child’s comfort comes first.",
  },
  {
    question: "How much does one-on-one tuition cost in India?",
    answer: "We offer affordable, flexible plans depending on grade, subject, and hours needed. Parents save up to 40% compared to offline tuition while getting premium teaching.",
    cta: "Contact us for a free quote today."
  }
];