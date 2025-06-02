
import { toast as sonnerToastFn } from "sonner";

// Re-export for backwards compatibility with existing components
export { useToast, toast } from "@/hooks/use-toast";

// Export sonner toast for new components
export const sonnerToast = sonnerToastFn;
