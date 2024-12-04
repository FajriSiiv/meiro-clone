import { File, Link, Play, Type } from "lucide-react";
import aiFirst from "@/assets/img/ai-builder.webp";
import aiImages from "@/assets/img/ai-images.webp";
import aiDesign from "@/assets/img/design-dino.webp";
import aiAnalytics from "@/assets/img/analytic.jpg";

export const dataAi = [
  {
    name: "AI-First Builder",
    title: "Start with your promptor use existing content",
    doc: "Create a test or quiz based on your idea or use your existing content",
    btnText: "Get started",
    category: {
      text: ["Text", "Video", "Link", "File"],
      icon: [<Type />, <Play />, <Link />, <File />],
    },
    img: aiFirst,
  },
  {
    name: "AI Images",
    title: "Bring your quiz to life with AI images",
    doc: "Use our integrated AI image builder to add stunning, high-quality images to your challenge content blocks",
    btnText: "Start creating",
    img: aiImages,
  },
  {
    name: "Design",
    title: "Tailor the content to suit your requirements",
    doc: "Tweak the blocks, modify the wording, refine the design, and remove Meiro branding to enjoy the complete white-label experience",
    btnText: "Start designing",
    img: aiDesign,
  },
  {
    name: "Analytics",
    title: "Measure success with real-time analytics",
    doc: "Delve deeper into our real-time analytics to gain insights about your leads and assess the overall success of your challenge",
    btnText: "Start analyzing",
    img: aiAnalytics,
  },
];

export const dataMagicWork = [
  {
    doc: [
      "Gather more leads with better quality",
      "Improve conversion",
      "Increase brand awareness and outreach",
      "Collect new details about your customers",
    ],
    title: "Marketing",
  },
  {
    doc: [
      "Assess candidates",
      "Launch onboarding and training for employees",
      "Check staff performance, progress, and compliance awareness",
    ],
    title: "Human Resources",
  },
];
export const dataMagicWork2 = [
  {
    doc: [
      "Reinforce learning material with interactive approach",
      "Give instant feedback to the students",
      "Let them learn at their own pace",
    ],
    title: "Education",
  },
  {
    doc: [
      "Increase traffic and engagement",
      "Get insights on your subscribers",
      "Feed into new sponsored activations",
    ],
    title: "Content Creators",
  },
];
