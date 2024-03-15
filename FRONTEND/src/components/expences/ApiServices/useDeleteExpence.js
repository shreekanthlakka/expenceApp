import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteExpence as deleteApiExpence } from "./expenceApiServices";
import toast from "react-hot-toast";
function useDeleteExpance() {
    const queryClient = useQueryClient();
    const {
        mutate: deleteExpence,
        error,
        isLoading,
    } = useMutation({
        mutationFn: (id) => deleteApiExpence(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["expence"],
            });
            toast.success("deleted  expense successfully");
        },
        onError: () => console.log(error),
    });
    return { deleteExpence, isLoading, error };
}

export { useDeleteExpance };
