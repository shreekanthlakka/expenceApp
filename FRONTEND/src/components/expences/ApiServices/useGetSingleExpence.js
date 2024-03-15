import { useQuery } from "@tanstack/react-query";
import { getSingleExpences } from "./expenceApiServices";

function useGetSingleExpence() {
    const {
        data: category,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["singleExpence"],
        queryFn: (id) => getSingleExpences(id),
    });
    return { category, isLoading, error };
}

export { useGetSingleExpence };
