import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAllExpencesByCategoryId as apiDeleteAllExpencesByCategoryId } from "./expenceApiServices";

function useDeleteExpancesByCategoryId() {
    const queryClient = useQueryClient();
    const {
        mutate: deleteAllExpenceByCategoryId,
        error,
        isLoading,
    } = useMutation({
        mutationFn: (categoryId) =>
            apiDeleteAllExpencesByCategoryId(categoryId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["expence"],
            });
        },
        onError: () => console.log(error),
    });
    return { deleteAllExpenceByCategoryId, isLoading, error };
}

export { useDeleteExpancesByCategoryId };
