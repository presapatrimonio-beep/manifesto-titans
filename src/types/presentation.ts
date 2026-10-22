export type PageTheme = 'hero-black' | 'dark-obsidian' | 'dark-mineral' | 'ivory-editorial';

export type DocumentPart = 'manifesto' | 'guia' | 'encerramento';

export interface SlideData {
  id: number;
  part: DocumentPart;
  partLabel: string;
  slideNumberFormatted: string; // e.g. "01 / 24"
  theme: PageTheme;
  eyebrow: string;
  title: string;
  subtitle?: string;
  bodyParagraphs?: string[];
  bulletPoints?: string[];
  quote?: string;
  statements?: string[];
  noteImportant?: string;
  footerTag?: string;
  editorialNotes: {
    intent: string;
    designConcept: string;
  };
}

export interface PartInfo {
  id: DocumentPart;
  number: string;
  title: string;
  subtitle: string;
  slideRange: [number, number];
}
