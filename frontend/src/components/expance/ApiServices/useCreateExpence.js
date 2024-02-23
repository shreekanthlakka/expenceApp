import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExpence as createApiExpence } from "./expenceApiServices";

function useCreateExpence() {
    const queryClient = useQueryClient();
    const {
        mutate: createExpence,
        isLoading,
        error,
    } = useMutation({
        mutationFn: ({ categoryId, amount, description, expanceDate }) =>
            createApiExpence(categoryId, amount, description, expanceDate),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["expence"],
            });
        },
        onError: (err) => console.log(err),
    });
    return { createExpence, isLoading, error };
}

export { useCreateExpence };
