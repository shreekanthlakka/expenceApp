import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "./categoryApiServices";

function useCategory() {
    const {
        isLoading,
        data: categories,
        error,
    } = useQuery({
        queryKey: ["category"],
        queryFn: getAllCategories,
    });
    return { isLoading, categories, error };
}

export { useCategory };
