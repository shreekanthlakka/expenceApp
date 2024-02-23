import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateExpence } from "./expenceApiServices";

function useEditExpence() {
    const queryClient = useQueryClient();
    const { mutate: editExpence } = useMutation({
        mutationFn: ({ selected, amount, description, expanceDate }) =>
            updateExpence(selected, amount, description, expanceDate),

        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["expence"],
            });
        },
        onError: (error) => console.log(error),
    });
    return { editExpence };
}

export { useEditExpence };
