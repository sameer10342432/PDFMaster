export interface ImportantNotice {
  title: string;
  text: string;
}

export interface ContactInfo {
  email: string;
  address: string;
  phone: string;
}

export interface ProfessionalSection {
  title: string;
  items: string[];
  className: string;
  titleClassName: string;
  listClassName: string;
}

export interface Subsection {
  title: string;
  content?: string;
  items?: string[];
}

export interface Section {
  title: string;
  content?: string | string[];
  subsections?: Subsection[];
  professionalSections?: ProfessionalSection[];
  items?: string[];
  contactInfo?: ContactInfo;
}

export interface FinalWarning {
  title: string;
  text: string;
}