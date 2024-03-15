import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "./categoryApiServices";

function useCreateCategory() {
    const queryClient = useQueryClient();
    const {
        mutate: createNewCategory,
        isLoading,
        error,
    } = useMutation({
        mutationFn: (categoryname) => createCategory(categoryname),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["category"],
            });
        },
        onError: (err) => console.log("err", err.message),
    });
    return { createNewCategory, isLoading, error };
}

export { useCreateCategory };
