export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  pricing: string;
  pricingNote: string;
  icon: string;
}

export interface ConsultationFormData {
  companyName: string;
  contactName: string;
  phone: string;
  email: string;
  consultationType: string;
  message: string;
}

export interface MockDocument {
  id: string;
  name: string;
  type: string;
  submittedDate: string;
  status: "접수완료" | "검토중" | "처리완료";
  fileSize: string;
}

export interface CaseStep {
  label: string;
  completed: boolean;
  date?: string;
}

export interface CaseProgress {
  id: string;
  trackingNumber: string;
  title: string;
  clientName: string;
  assignedAccountant: string;
  currentStep: number;
  steps: CaseStep[];
  lastUpdated: string;
  notes: string;
}
