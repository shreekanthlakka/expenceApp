const URI = "http://localhost:8000/api/v1";

const getAllCategories = async () => {
    try {
        const res = await fetch(`${URI}/categories/all`);
        if (!res.ok) {
            throw new Error("Error while fetching data");
        }
        const { data, error } = await res.json();
        console.log(
            "data in get All Categories------",
            data,
            "errors =======",
            error
        );

        return data;
    } catch (error) {
        console.log(error.message);
    }
};

const createCategory = async (categoryname) => {
    try {
        const res = await fetch(`${URI}/categories/new`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ categoryname }),
        });
        const { data } = await res.json();
        console.log("data in createCategory fetch ----", data);
        return data;
    } catch (error) {
        console.log("error => ", error);
    }
};

const updateCategory = async (id, categoryname) => {
    const res = await fetch(`${URI}/categories/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryname }),
    });
    const { data } = await res.json();
    return data;
};

const deleteCategory = async (id) => {
    const res = await fetch(`${URI}/categories/${id}`, {
        method: "DELETE",
    });
    const { data } = await res.json();
    return data;
};

export { getAllCategories, createCategory, updateCategory, deleteCategory };
