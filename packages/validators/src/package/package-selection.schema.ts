import { z } from 'zod';

export const packageSelectionSchema = z.object({
  packageId: z.string().uuid(),
  billingModel: z.enum(['one_time', 'monthly', 'quarterly', 'annual', 'enterprise', 'project_based']),
  addOnIds: z.array(z.string().uuid()).optional(),
});

export type PackageSelectionInput = z.infer<typeof packageSelectionSchema>;
