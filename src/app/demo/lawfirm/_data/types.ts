export interface Attorney {
  id: string;
  name: string;
  title: string;
  photo_url: string | null;
  specialties: string[];
  career: string[];
  education: string[];
  bio: string | null;
  sort_order: number;
  is_featured: boolean;
  created_at: string;
}

export interface CaseDetail {
  background: string;
  characteristics: string;
  assistance: string;
  outcome: string;
  significance: string;
  attorney: string;
}

export interface Case {
  id: string;
  category: string;
  title: string;
  summary: string;
  detail?: CaseDetail;
  result: string;
  year: number;
  is_featured: boolean;
  created_at: string;
}

export interface PracticeArea {
  slug: string;
  title: string;
  description: string;
  detailDescription: string;
  scope: string[];
  relatedLaws: string[];
  icon: string;
}

export interface ConsultationFormData {
  name: string;
  phone: string;
  email: string;
  consultationType: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}
