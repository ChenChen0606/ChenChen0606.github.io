import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'project-grading',
    num: '01',
    title: 'Student Grading System',
    description:
      'A Java-based desktop application built for Tangub City Global College to manage student grades — faculty encode and manage grades, while students view and inquire about their academic records.',
    tags: ['Java', 'MySQL', 'NetBeans'],
    category: 'Desktop',
  },
  {
    id: 'project-ojt',
    num: '02',
    title: 'OJT Tracker',
    description:
      'A Flutter and Firebase application that helps interns record daily hours, tasks, and activities while monitoring their progress throughout on-the-job training.',
    tags: ['Flutter', 'Firebase', 'Dart'],
    category: 'Mobile',
  },
  {
    id: 'project-clinic',
    num: '03',
    title: 'Clinic Management System',
    description:
      "A group-developed system for TCGC's school clinic, organizing patient records, clinic visits, medicine inventory, and reporting — built as part of an academic project.",
    tags: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    category: 'Web',
  },
  {
    id: 'project-cfgame',
    num: '04',
    title: 'Grammar Arena',
    description:
      'A context-free grammar trainer built as a browser game — pick a mode (Identify Grammar, Valid or Invalid, or Mixed Challenge) and a difficulty, then classify strings and build derivations against the clock.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    category: 'Game',
    liveUrl: 'https://chenchen0606.github.io/CFGame/',
  },
  {
    id: 'project-regex',
    num: '05',
    title: 'Regex Challenge',
    description:
      "A regex practice game — you're given a pattern and a hint, and have to type a string that matches it before your hearts run out, across 10 challenges with live scoring.",
    tags: ['JavaScript', 'HTML', 'CSS'],
    category: 'Game',
    liveUrl: 'https://chenchen0606.github.io/regex-challenge-game/',
  },
];
