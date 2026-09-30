const STUDENT = (n) => `/images/avatars/student-${n}.webp`;

export const courseDetails = {
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  students: 199,
  totalLessons: 112,
  totalHours: 24,
  previewLessons: [
    { number: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { number: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    { number: "03", title: "Advanced Techniques in Digital Creation", duration: "16 mins" },
  ],
  includes: ["Learning Resources", "Quality Lesson Videos", "Certificate of Completion", "Private Consultation"],
  description: [
    "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
    "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
    "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
  ],
  sneakPeek: [
    "/images/courses/course-1.webp",
    "/images/courses/course-2.webp",
    "/images/courses/course-3.webp",
    "/images/courses/course-6.webp",
  ],
  keyPoints: [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ],
  modulesIntro:
    "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
  modules: [
    {
      title: "Module 1: Introduction to Digital Assets",
      summary:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      title: "Module 2: Design Principles for Impact",
      summary:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication.",
    },
    {
      title: "Module 3: User-Centric Design Strategies",
      summary:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      title: "Module 4: Interactive Media and Engagement",
      summary:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive experiences.",
    },
    {
      title: "Module 5: Project Showcase and Critique",
      summary:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your best work.",
    },
    {
      title: "Module 6: Optimizing Digital Assets for Various Platforms",
      summary:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital channels.",
    },
  ],
  lessonContent:
    "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your knowledge with quizzes at the end of each module.",
  progressText:
    "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
  progress: 55,
  reviewsIntro:
    "Discover what our learners have to say about their experience with this course. Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
  ratingBreakdown: { 5: 720, 4: 120, 3: 21, 2: 12, 1: 16 },
  reviews: [
    {
      id: 1,
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar: STUDENT(1),
      rating: 5,
      date: "a year ago",
      text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
    },
    {
      id: 2,
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar: STUDENT(2),
      rating: 5,
      date: "a year ago",
      text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
    },
    {
      id: 3,
      name: "Cody Fisher",
      role: "UI/UX Designer",
      avatar: STUDENT(3),
      rating: 5,
      date: "a year ago",
      text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
    },
    {
      id: 4,
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar: STUDENT(4),
      rating: 5,
      date: "a year ago",
      text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
    },
    {
      id: 5,
      name: "Jenny Wilson",
      role: "Graphic Designer",
      avatar: STUDENT(5),
      rating: 4,
      date: "8 months ago",
      text: "Clear lessons and good examples. I would have liked a few more exercises in the later modules, but overall it was well worth it.",
    },
    {
      id: 6,
      name: "Devon Lane",
      role: "Marketing Specialist",
      avatar: STUDENT(6),
      rating: 3,
      date: "5 months ago",
      text: "Solid content for beginners. Some parts moved a bit slowly for me since I already had design experience.",
    },
  ],
};
