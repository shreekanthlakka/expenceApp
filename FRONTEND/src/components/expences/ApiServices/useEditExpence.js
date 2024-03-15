import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateExpence } from "./expenceApiServices";
import toast from "react-hot-toast";

function useEditExpence() {
    const queryClient = useQueryClient();
    const { mutate: editExpence } = useMutation({
        mutationFn: ({ selected, amount, description, expanceDate }) =>
            updateExpence(selected, amount, description, expanceDate),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["expence"],
            });
            toast.success("Updated  Expense Successfully");
        },
        onError: (error) => console.log(error),
    });
    return { editExpence };
}

export { useEditExpence };
