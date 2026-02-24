import React from 'react';
import { ShieldCheck, Video, Cpu, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import lapBoyImg from '../src/Img/lap_boy_img.png';
import teacherImg from '../src/Img/teacher_mg.jpeg';
import indianTeacherImg from '../src/Img/indian_teacher.png';
import indianStudentBoy1Img from '../src/Img/indian_student_boy_1.png';
import indianStudentGirl1Img from '../src/Img/indian_student_girl_1.png';
import indianStudentBoy2Img from '../src/Img/indian_student_boy_2.png';

const Features: React.FC = () => {
   const container = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1
         }
      }
   };

   const item = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
   };

   return (
      <section id="offerings" className="py-6 bg-white relative">
         {/* Container */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
               <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-[#124029] mb-6 tracking-tight font-space"
               >
                  What We Offer — <br />
                  <span className="text-gray-400">Built for Student Success</span>
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg text-gray-500 max-w-2xl font-medium"
               >
                  One student. One expert. Maximum results. We've redesigned tutoring to be personal, effective, and future-ready.
               </motion.p>
            </div>

            {/* Bento Grid */}
            <motion.div
               variants={container}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true, margin: "-100px" }}
               className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4"
            >

               {/* 1. Personalised One-on-One (Shortened, Left) */}
               <motion.div variants={item} className="md:col-span-1 bg-[#E1F0DA] rounded-[32px] p-4 flex flex-col relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#124029]/10 cursor-pointer">
                  <h3 className="text-2xl font-bold text-[#124029] mb-1 font-space">Personalised Classes</h3>
                  <p className="text-[#124029]/70 text-sm mb-4 leading-relaxed font-medium">
                     One student. One expert. No group noise, no distractions—just dedicated attention.
                  </p>

                  {/* UI Mockup: Video Call Card */}
                  <div className="flex-grow relative min-h-[100px]">
                     <div className="absolute inset-x-0 top-0 bg-white rounded-2xl shadow-lg p-3 transform -rotate-3 scale-75 origin-top transition-transform duration-300 group-hover:rotate-0 group-hover:scale-[0.55]">
                        <div className="relative rounded-xl overflow-hidden aspect-[4/3] mb-3 bg-gray-100">
                           <img
                              src={lapBoyImg}
                              className="w-full h-full object-cover grayscale-[20%]"
                              alt="Tutor"
                           />
                           <div className="absolute bottom-2 right-2 w-16 h-20 bg-gray-900 rounded-lg border-2 border-white overflow-hidden shadow-md">
                              <img
                                 src={teacherImg}
                                 className="w-full h-full object-cover grayscale-[20%]"
                                 alt="Student"
                              />
                           </div>
                           <div className="absolute top-2 left-2 bg-[#124029] text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" /> LIVE
                           </div>
                        </div>
                        <div className="flex items-center justify-between">
                           <div>
                              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Physics • Grade 10</div>
                              <div className="text-sm font-bold text-gray-800">Newton's Laws</div>
                           </div>
                           <div className="w-8 h-8 bg-[#124029]/10 rounded-full flex items-center justify-center text-[#124029]">
                              <Video size={14} />
                           </div>
                        </div>
                     </div>

                     {/* Floating Elements */}
                     <div className="absolute bottom-8 -right-4 bg-white px-3 py-2 rounded-lg shadow-md text-xs font-bold text-[#124029] transform rotate-6 animate-bounce border border-gray-100">
                        Only You & Tutor!
                     </div>
                  </div>
               </motion.div>

               {/* 2. Board-Specific Support (Wide, Top Right) */}
               <motion.div variants={item} className="md:col-span-2 bg-[#FFE2E2] rounded-[32px] p-4 flex flex-col md:flex-row items-start md:items-center gap-4 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#124029]/10 cursor-pointer">
                  <div className="flex-1 relative z-10">
                     <h3 className="text-2xl font-bold text-[#124029] mb-1 font-space">Board-Specific Syllabus</h3>
                     <p className="text-[#124029]/70 text-sm leading-relaxed max-w-sm font-medium">
                        From NCERT to IB, everything is covered exactly as examiners expect. No shortcuts.
                     </p>
                  </div>

                  {/* UI Mockup: Stacked Syllabus Cards */}
                  <div className="relative w-full md:w-1/2 h-40 md:h-full flex items-center justify-end pr-4">
                     <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-32">
                        <div className="absolute top-0 right-0 bg-white p-3 rounded-xl shadow-sm border border-[#124029]/5 flex items-center gap-3 w-48 transform translate-x-4 -translate-y-12 rotate-6 transition-transform group-hover:translate-x-0 group-hover:rotate-3">
                           <div className="w-10 h-10 rounded-full bg-[#124029]/10 flex items-center justify-center text-[#124029] font-bold text-xs">CBSE</div>
                           <div>
                              <div className="text-xs font-bold text-gray-800">NCERT Aligned</div>
                              <div className="h-1 w-12 bg-gray-100 rounded-full mt-1"></div>
                           </div>
                        </div>
                        <div className="absolute top-8 right-8 bg-white p-3 rounded-xl shadow-md border border-[#124029]/5 flex items-center gap-3 w-48 z-10 transform transition-transform group-hover:scale-105">
                           <div className="w-10 h-10 rounded-full bg-[#124029]/20 flex items-center justify-center text-[#124029] font-bold text-xs">ICSE</div>
                           <div>
                              <div className="text-xs font-bold text-gray-800">Complete Syllabus</div>
                              <div className="h-1 w-16 bg-gray-100 rounded-full mt-1"></div>
                           </div>
                        </div>
                        <div className="absolute top-20 right-4 bg-white p-3 rounded-xl shadow-sm border border-[#124029]/5 flex items-center gap-3 w-48 transform -translate-x-2 translate-y-2 -rotate-3 transition-transform group-hover:translate-x-0 group-hover:rotate-0">
                           <div className="w-10 h-10 rounded-full bg-[#124029]/10 flex items-center justify-center text-[#124029] font-bold text-xs">IB</div>
                           <div>
                              <div className="text-xs font-bold text-gray-800">Inquiry Based</div>
                              <div className="h-1 w-10 bg-gray-100 rounded-full mt-1"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* 3. Expert Teachers (Wide, Mid Left) */}
               <motion.div variants={item} className="md:col-span-2 bg-[#F5EFFF] rounded-[32px] p-4 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center gap-4 border border-transparent hover:border-[#124029]/10 cursor-pointer">
                  <div className="flex-1 w-full md:w-auto">
                     <h3 className="text-2xl font-bold text-[#124029] mb-1 font-space">1:3 Expert Group
                     </h3>
                     <p className="text-[#124029]/70 text-sm mb-4 font-medium">
                        Small group mentorship. Personalized attention, collaborative learning.
                     </p>
                  </div>

                  {/* UI Mockup: Active Classroom Interface */}
                  <div className="w-full md:flex-[0.80] bg-white rounded-2xl p-3 shadow-md border border-gray-100 transform scale-100 origin-center transition-transform group-hover:-translate-y-2 relative overflow-hidden">
                     {/* Browser Header Bar */}
                     <div className="flex items-center gap-1.5 mb-3 px-1">
                        <div className="w-2 h-2 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                        <div className="ml-auto text-[10px] text-gray-400 font-medium flex items-center gap-1">
                           <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                           Live Class
                        </div>
                     </div>

                     {/* Video Grid */}
                     <div className="space-y-2">
                        {/* Teacher View (Large) */}
                        <div className="relative rounded-xl overflow-hidden aspect-[16/9] group/video">
                           <img
                              src={indianTeacherImg}
                              className="w-full h-full object-cover"
                              alt="Expert Mentor"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>

                           {/* Teacher Label */}
                           <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                              <span className="text-white text-[10px] font-bold bg-black/30 backdrop-blur-md px-2 py-1 rounded-full">
                                 Priya • Expert Mentor
                              </span>
                              <div className="w-3 h-3 bg-[#124029] rounded-full flex items-center justify-center">
                                 <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                 </svg>
                              </div>
                           </div>
                        </div>

                        {/* Students Grid (3 Students) */}
                        <div className="grid grid-cols-3 gap-2">
                           {[
                              indianStudentBoy1Img,
                              indianStudentGirl1Img,
                              indianStudentBoy2Img
                           ].map((img, i) => (
                              <div key={i} className="relative rounded-lg overflow-hidden aspect-square bg-gray-100 border border-gray-100">
                                 <img src={img} className="w-full h-full object-cover grayscale-[10%]" alt="Student" />
                                 <div className="absolute top-1 right-1 w-2 h-2 bg-green-500 border border-white rounded-full"></div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* 4. Progress Tracker (Square, Mid Right) */}
               <motion.div variants={item} className="md:col-span-1 bg-[#C7D9DD] rounded-[32px] p-4 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-[#124029]/10 cursor-pointer">
                  <div>
                     <h3 className="text-2xl font-bold text-[#124029] mb-1 font-space">Progress Tracker</h3>
                     <p className="text-[#124029]/70 text-sm mb-4 font-medium">
                        AI-powered analytics on speed & accuracy.
                     </p>
                  </div>

                  {/* UI Mockup: Stats Card */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm w-full border border-gray-100 transform transition-transform group-hover:-translate-y-2">
                     <div className="flex justify-between items-end mb-4">
                        <div>
                           <span className="text-[10px] font-bold text-gray-400 uppercase">Weekly Growth</span>
                           <div className="text-2xl font-bold text-gray-800">+15%</div>
                        </div>
                        <div className="bg-[#124029]/10 text-[#124029] text-xs font-bold px-2 py-1 rounded-lg">High</div>
                     </div>
                     <div className="flex items-end gap-2 h-12">
                        <div className="w-full bg-[#124029]/20 h-[40%] rounded-t-sm group-hover:h-[50%] transition-all duration-500"></div>
                        <div className="w-full bg-[#124029]/40 h-[60%] rounded-t-sm group-hover:h-[70%] transition-all duration-500 delay-75"></div>
                        <div className="w-full bg-[#124029]/60 h-[50%] rounded-t-sm group-hover:h-[60%] transition-all duration-500 delay-100"></div>
                        <div className="w-full bg-[#124029]/80 h-[80%] rounded-t-sm group-hover:h-[90%] transition-all duration-500 delay-150"></div>
                        <div className="w-full bg-[#124029] h-[70%] rounded-t-sm group-hover:h-[85%] transition-all duration-500 delay-200"></div>
                     </div>
                  </div>
               </motion.div>

               {/* 5. GPS Learning Path (Wide, Bottom Left) */}
               <motion.div variants={item} className="md:col-span-2 bg-[#FEECE2] rounded-[32px] p-4 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row items-center gap-4 border border-transparent hover:border-[#124029]/10 cursor-pointer">
                  <div className="relative z-10 max-w-sm">
                     <h3 className="text-2xl font-bold text-[#124029] mb-1 font-space">GPS Learning Path™</h3>
                     <p className="text-[#124029]/70 text-sm mb-2 font-medium">
                        Maps exactly where your child stands, what's next, and how to get there.
                     </p>
                     <div className="inline-block bg-[#124029] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        Exclusive to Vikar's
                     </div>
                  </div>

                  {/* UI Mockup: Path Visualization */}
                  <div className="flex-1 w-full flex items-center justify-center">
                     <div className="relative w-full max-w-md bg-white/40 backdrop-blur-sm rounded-2xl p-4 border border-[#124029]/10">
                        <div className="flex justify-between items-center relative z-10">
                           {/* Step 1 */}
                           <div className="flex flex-col items-center gap-2">
                              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#124029] font-bold shadow-sm border border-[#124029]/10">1</div>
                              <span className="text-[10px] font-bold text-[#124029] uppercase bg-white/50 px-2 py-0.5 rounded-md">Assess</span>
                           </div>
                           {/* Connector */}
                           <div className="flex-1 h-1 bg-[#124029]/20 mx-2 rounded-full relative overflow-hidden">
                              <div className="absolute inset-0 bg-[#124029]/40 w-full animate-[shimmer_2s_infinite] opacity-50"></div>
                           </div>
                           {/* Step 2 */}
                           <div className="flex flex-col items-center gap-2">
                              <div className="w-12 h-12 rounded-full bg-[#124029] flex items-center justify-center text-white font-bold shadow-lg ring-4 ring-white transform scale-110">2</div>
                              <span className="text-[10px] font-bold text-white uppercase bg-[#124029] px-2 py-0.5 rounded-md shadow-sm">Learn</span>
                           </div>
                           {/* Connector */}
                           <div className="flex-1 h-1 bg-[#124029]/20 mx-2 rounded-full"></div>
                           {/* Step 3 */}
                           <div className="flex flex-col items-center gap-2 opacity-60">
                              <div className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center text-[#124029] font-bold border-2 border-dashed border-[#124029]/30">3</div>
                              <span className="text-[10px] font-bold text-[#124029] uppercase">Master</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* 6. Future Ready Skills (Square, Bottom Right) */}
               <motion.div variants={item} className="md:col-span-1 bg-[#FAF1E6] rounded-[32px] p-4 relative overflow-hidden group hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-transparent hover:border-[#124029]/10 cursor-pointer">
                  <div>
                     <h3 className="text-2xl font-bold text-[#124029] mb-1 font-space">Future-Ready</h3>
                     <p className="text-[#124029]/70 text-sm mb-4 font-medium">
                        Workshops on AI tools, ethics, and creativity.
                     </p>
                  </div>

                  {/* UI Mockup: Chat/AI Interface */}
                  <div className="bg-white rounded-2xl p-4 shadow-sm relative border border-gray-100 transform transition-transform group-hover:-translate-y-2">
                     <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-[#124029] rounded-lg flex items-center justify-center text-white">
                           <Cpu size={16} />
                        </div>
                        <div>
                           <div className="text-xs font-bold text-gray-800">AI Workshop</div>
                           <div className="text-[10px] text-gray-400">Next: Sat, 4 PM</div>
                        </div>
                     </div>
                     <div className="bg-gray-50 rounded-lg p-2 text-[10px] text-gray-600 mb-2 border border-gray-100">
                        <span className="font-bold text-[#124029]">Prompt:</span> Create a story...
                     </div>
                     <div className="flex justify-end">
                        <div className="bg-[#124029] text-white rounded-lg p-2 text-[10px] rounded-br-none shadow-sm">
                           Here is a story...
                        </div>
                     </div>

                     {/* Decorative */}
                     <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-[#124029]/10 rounded-full blur-xl pointer-events-none"></div>
                  </div>
               </motion.div>

            </motion.div>
         </div>
      </section>
   );
};

export default Features;