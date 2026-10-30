import type { ContactItem, SkillGroup } from '../types';

export const profile = {
  logo: 'chen',
  firstName: 'Gretchen',
  lastName: 'Tumilap',
  role: 'Computer Science student — Tangub City Global College',
  intro:
    'I build practical web, mobile, and desktop applications, and enjoy turning coursework and everyday problems into working software.',
  photo: 'images/profile.jpg',
  photoAlt: 'Portrait of Gretchen Tumilap',
};

export const about = {
  roleLine: 'Computer Science student · 3rd year',
  paragraphs: [
    'As a Bachelor of Science in Computer Studies student, I have developed a strong foundation in programming, application development, and technology. Through academic and personal projects, I have gained hands-on experience while continuously developing my problem-solving, technical, and creative skills. I look forward to applying these skills to create useful and effective software solutions.',
    'I aim to develop functional and well-organized solutions that address real-world needs and provide meaningful value to their users.',
  ],
  hobbies: ['Sketching', 'Crochet', 'Anime & K-drama'],
  // First group keeps the original "language" box title.
  skills: [
    { items: ['C', 'C++', 'C#', 'HTML', 'CSS', 'Dart', 'SQL'] },
    { label: 'Frameworks & platforms', items: ['Flutter', 'MySQL', 'Firebase / Firestore'] },
    { label: 'Tools', items: ['GitHub', 'VS Code', 'Visual Studio', 'XAMPP', 'NetBeans'] },
  ] as SkillGroup[],
  interests: ['Web', 'Mobile', 'Desktop / Software', 'Game development'],
};

export const contacts: ContactItem[] = [
  { icon: 'email', label: 'Email', value: 'accchen0.6@gmail.com', href: 'mailto:accchen0.6@gmail.com' },
  { icon: 'phone', label: 'Phone', value: '0987 675 6789', href: 'tel:09876756789' },
  { icon: 'github', label: 'GitHub', value: 'ChenChen0606', href: 'https://github.com/ChenChen0606', external: true },
  { icon: 'facebook', label: 'Facebook', value: 'ch.en.81126', href: 'https://www.facebook.com/ch.en.81126', external: true },
  { icon: 'instagram', label: 'Instagram', value: 'ch_3nx', href: 'https://www.instagram.com/ch_3nx/', external: true },
];
