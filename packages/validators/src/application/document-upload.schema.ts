import { z } from 'zod';

export const documentUploadSchema = z.object({
  applicationId: z.string().uuid(),
  documentType: z.string().min(2),
  fileName: z.string().min(1),
  fileSize: z.number().max(10 * 1024 * 1024, 'File size must not exceed 10MB'),
  mimeType: z.enum(['application/pdf', 'image/jpeg', 'image/png']),
});

export type DocumentUploadInput = z.infer<typeof documentUploadSchema>;
