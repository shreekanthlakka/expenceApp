import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory as deleteApiCategory } from "./categoryApiServices";

function useDeleteCategory() {
    const queryClient = useQueryClient();
    const { mutate: deleteCategory } = useMutation({
        mutationFn: (id) => deleteApiCategory(id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["category"],
            });
        },
        onError: (err) => console.log(err),
    });
    return { deleteCategory };
}

export { useDeleteCategory };
