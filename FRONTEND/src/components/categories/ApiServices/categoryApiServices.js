const URI = "http://localhost:8000/api/v1";

const getAllCategories = async () => {
    try {
        const res = await fetch(`${URI}/categories`);
        if (!res.ok) {
            throw new Error("Error while fetching data");
        }

        const data = await res.json();
        return data.success ? data.data : data.errors;
    } catch (error) {
        console.log(error.message);
    }
};

const createCategory = async (categoryname) => {
    try {
        const res = await fetch(`${URI}/categories`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ categoryname }),
        });
        const data = await res.json();
        console.log("data in createCategory fetch ---- >>>", data);
        return data.success
            ? { responce: data.data, ok: true }
            : { responce: data.errors, ok: false };
    } catch (error) {
        console.log("errors => ", error);
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
    const data = await res.json();
    return data.success
        ? { responce: data.data, ok: true }
        : { responce: data.errors, ok: false };
};

const deleteCategory = async (id) => {
    const res = await fetch(`${URI}/categories/${id}`, {
        method: "DELETE",
    });
    const { data } = await res.json();
    return data;
};

export { getAllCategories, createCategory, updateCategory, deleteCategory };
