import { useQuery } from "@tanstack/react-query";
import { getAllExpences } from "./expenceApiServices";

function useExpences() {
    const {
        data: expences,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["expence"],
        queryFn: getAllExpences,
    });
    return { expences, isLoading, error };
}

export { useExpences };
