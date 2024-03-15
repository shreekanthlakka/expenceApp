import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createExpence as createApiExpence } from "./expenceApiServices";
import toast from "react-hot-toast";

function useCreateExpence() {
    const queryClient = useQueryClient();
    const {
        mutate: createExpence,
        isLoading,
        error,
    } = useMutation({
        mutationFn: ({ categoryId, amount, description, expanceDate }) =>
            createApiExpence(categoryId, amount, description, expanceDate),

        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["expence"],
            });
            if (data?.ok) toast.success("expence created sucessfully");
        },
        onError: (err) => {
            console.log(err);
        },
    });
    return { createExpence, isLoading, error };
}

export { useCreateExpence };
