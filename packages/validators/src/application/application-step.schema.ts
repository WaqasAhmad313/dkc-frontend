import { z } from 'zod';

export const applicationStepOneSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  country: z.string().min(2),
});

export const applicationStepTwoSchema = z.object({
  role: z.enum(['buyer', 'seller', 'institution', 'partner']),
  organizationName: z.string().min(2),
  organizationType: z.string().min(2),
  yearsInOperation: z.number().min(0),
});

export const applicationStepThreeSchema = z.object({
  businessStage: z.enum(['startup', 'early', 'growth', 'established', 'enterprise']),
  intent: z.string().min(20, 'Please describe your intent in at least 20 characters'),
  targetMarkets: z.array(z.string()).min(1, 'Please select at least one target market'),
});

export type ApplicationStepOneInput = z.infer<typeof applicationStepOneSchema>;
export type ApplicationStepTwoInput = z.infer<typeof applicationStepTwoSchema>;
export type ApplicationStepThreeInput = z.infer<typeof applicationStepThreeSchema>;
