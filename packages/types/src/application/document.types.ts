export enum DocumentStatus {
  PENDING = 'pending',
  UPLOADED = 'uploaded',
  VERIFIED = 'verified',
  REJECTED = 'rejected',
}

export interface ApplicationDocument {
  id: string;
  applicationId: string;
  name: string;
  fileUrl: string;
  status: DocumentStatus;
  reviewNote?: string;
  uploadedAt: string;
}
