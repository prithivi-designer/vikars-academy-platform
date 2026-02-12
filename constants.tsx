import { Testimonial, StatItem, FeatureItem, ProgramItem, FAQItem } from './types';
import { Users, BookOpen, Trophy, Activity, Map, Cpu, CheckCircle } from 'lucide-react';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Mrs. Lakshmi R.",
    country: "Chennai, India",
    flag: "🇮🇳",
    role: "Parent (Class 10)",
    content: "My son being in 10th grade used to memorize everything without understanding concepts, especially in Maths and Science. After joining VIKAR'S ACADEMY, the teaching approach completely changed his mindset. They focus on clarity first, marks next. Now he solves problems confidently without fear.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    id: 2,
    name: "Mrs. Divya N.",
    country: "Bangalore, India",
    flag: "🇮🇳",
    role: "Parent",
    content: "My son was highly distracted by mobile games and lacked focus in studies. The structured study plans and weekly monitoring system of VIKAR'S helped him build discipline. Now he follows a timetable and has reduced screen time naturally.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    id: 3,
    name: "Aarav M.",
    country: "Mumbai, India",
    flag: "🇮🇳",
    role: "Student (Class 10)",
    content: "I used to think Maths was impossible for me. But at VIKAR'S ACADEMY, the way they break down each problem step-by-step changed my mind. Now I actually enjoy solving sums and my marks have improved from 62 to 88.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=3"
  },
  {
    id: 4,
    name: "Mrs. Anandhi",
    country: "Madurai, India",
    flag: "🇮🇳",
    role: "Parent",
    content: "My daughter’s overall percentage was 68% last year. Within one academic year at VIKAR'S ACADEMY, she scored 87% in final exams. The biggest change was in her confidence and time management during exams.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=4"
  },
  {
    id: 5,
    name: "Mr. Prakash R.",
    country: "Hyderabad, India",
    flag: "🇮🇳",
    role: "Parent",
    content: "My child was anxious about board exams. The mock tests conducted exactly in board pattern reduced his fear. The detailed performance analysis after each test helped us understand where he was losing marks. At last his stress reduced and performance improved.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=5"
  },
  {
    id: 6,
    name: "Sai Shruthi R.",
    country: "Salem, India",
    flag: "🇮🇳",
    role: "Student (Class 10)",
    content: "I was studying daily but not scoring well. This academy taught me how to revise smartly, with an active recall method & the way to analyze PYQ’s. My marks improved without studying extra hours. Thank you so much VIKAR’S.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=6"
  },
  {
    id: 7,
    name: "Mr. Arvind Sharma",
    country: "Delhi, India",
    flag: "🇮🇳",
    role: "Parent",
    content: "In school, my daughter was one among all student. But here at VIKAR'S ACADEMY, she receives personal attention and doubt-clearing support. The teachers monitor my child personally and that made a big difference.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=7"
  },
  {
    id: 8,
    name: "Pranitha S.",
    country: "Coimbatore, India",
    flag: "🇮🇳",
    role: "Student (Class 10)",
    content: "Before joining VIKAR’S, I scored 62/100 in Maths. After 4 months of consistent practice and concept clarity sessions, I scored 88/100 in Pre-Board exams. I loved the way they tuned me.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=8"
  },
  {
    id: 9,
    name: "Aditya",
    country: "Kochi, India",
    flag: "🇮🇳",
    role: "Student (Class 9)",
    content: "Earlier I used to lose marks in basic algebra and fractions. After attending foundation rebuilding sessions at VIKAR’S, I improved from 58% to 81% in Maths. Now advanced chapters feel easy. Thank you.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=9"
  },
  {
    id: 10,
    name: "Mrs. Preethi",
    country: "Bangalore, India",
    flag: "🇮🇳",
    role: "Parent",
    content: "I loved their start with an academic diagnosis session, where I found the learning gap of my child in science. Even in group sessions (1:3) my child was given personal care. They truly care each child.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=10"
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