import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCategory as updateApiCategory } from "./categoryApiServices";

function useUpdateCategory() {
    const queryClient = useQueryClient();
    const {
        mutate: updateCategory,
        isLoading,
        isError,
    } = useMutation({
        mutationFn: ({ id, name }) => updateApiCategory(id, name),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["category"],
            });
        },
        onError: (err) => {
            console.log(err);
        },
    });
    return { updateCategory, isError, isLoading };
}

export { useUpdateCategory };
