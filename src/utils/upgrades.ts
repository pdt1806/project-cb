import { AutomaticUpgrade, ManualUpgrade, Upgrade } from "./types";

export const automaticUpgradeList: AutomaticUpgrade[] = [
  {
    id: "upgrade-ap-psychology",
    name: "Crash the Server during AP Psychology Exam",
    cost: 10, // from index 0
    costMultiplier: 1.1,
    perSecond: 0.1,
    description: "A psychological experiment gone wrong. The server crashes during the exam.",
  },
  {
    id: "upgrade-ap-spanish",
    name: "Make AP Spanish Language Audio Quieter",
    cost: 20, // from index 1
    costMultiplier: 1.2,
    perSecond: 0.2,
    description: "Because who needs to hear the audio clearly during the exam? Not you.",
  },
  {
    id: "upgrade-ap-precalc",
    name: "Ban College Credit for AP Precalculus",
    cost: 50, // from index 2
    costMultiplier: 1.2,
    perSecond: 0.5,
    description: "No more college credit for AP Precalculus. Sorry, students.",
  },
  {
    id: "upgrade-ap-comp-sci-a",
    name: "Cut Exam Time for AP Computer Science A",
    cost: 100, // from index 3
    costMultiplier: 1.2,
    perSecond: 1.0,
    description: "Less time to code, more time to panic. The exam just got shorter.",
  },
  {
    id: "upgrade-ap-bio",
    name: "Make AP Biology Exam Date Sooner",
    cost: 200, // from index 4
    costMultiplier: 1.3,
    perSecond: 2.0,
    description: "Surprise! The AP Bio exam is now even earlier in the year.",
  },
  {
    id: "upgrade-ap-us-history",
    name: "Add More Content to AP U.S. History",
    cost: 500, // from index 5
    costMultiplier: 1.3,
    perSecond: 5.0,
    description: "Because 500 years of history wasn't enough, here's more to memorize.",
  },
  {
    id: "upgrade-ap-physics",
    name: "Lower AP Physics Pass Rate",
    cost: 1000, // from index 6
    costMultiplier: 1.3,
    perSecond: 10.0,
    description: "The class with the lowest overall pass rate of any AP exam is getting worse...",
  },
  // {
  //   id: "upgrade-steal-other-peoples-work",
  //   name: "Steal Other People's Work",
  //   icon: "",
  //   cost: 1000,
  //   costMultiplier: 2.0,
  //   perSecond: 10.0,
  //   description: "Why do the work yourself when you can just take someone else's?",
  // },
];

export const manualUpgradeList: ManualUpgrade[] = [
  {
    id: "upgrade-pencil",
    name: "2B Pencil Only",
    cost: 200,
    costMultiplier: 1.2,
    perClick: 2,
    description: "The only pencil allowed on the exam is a 2B pencil. No other pencils are allowed.",
  },
  {
    id: "upgrade-fully-digital",
    name: "Fully Digital AP Exams",
    cost: 800,
    costMultiplier: 1.3,
    perClick: 5,
    description: "All AP exams are now fully digital. No more paper exams.",
  },
  {
    id: "upgrade-increase-cancellation-fee",
    name: "Increase AP Exam Cancellation Fee",
    cost: 1500,
    costMultiplier: 1.3,
    perClick: 10,
    description: "How dare you cancel your AP exam? Pay a hefty fee for that.",
  },
  {
    id: "upgrade-automatic-grading",
    name: "Automatic Grading for AP Exams",
    cost: 2000,
    costMultiplier: 1.3,
    perClick: 12,
    description:
      "All AP exams are now automatically graded. No more waiting until July for scores. (not really, we just added this for fun)",
  },
];

export const allUpgrades: Upgrade[] = [...automaticUpgradeList, ...manualUpgradeList];
