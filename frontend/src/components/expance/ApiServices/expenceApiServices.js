const URI = "http://localhost:8000/api/v1";

const getAllExpences = async () => {
    try {
        const res = await fetch(`${URI}/expences`);
        if (!res.ok) throw new Error("error while fetching expences");
        const data = await res.json();
        return data.success ? data.data : data.errors;
    } catch (error) {
        console.log("Error = ", error.message);
    }
};

const createExpence = async (categoryId, amount, description, expanceDate) => {
    try {
        const res = await fetch(`${URI}/expences`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                category: categoryId,
                amount,
                description,
                expanceDate,
            }),
        });
        if (!res.ok) throw new Error("Error while  creating Expence!");

        const data = await res.json();
        return data.success
            ? { ok: true, responce: data.data }
            : { ok: false, responce: data.errors };
    } catch (error) {
        console.log("Error = ", error.message);
    }
};

const updateExpence = async (selected, amount, description, expanceDate) => {
    try {
        const res = await fetch(`${URI}/expences/${selected}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                amount,
                description,
                expanceDate,
            }),
        });
        const { data } = await res.json();
        return data.success
            ? { ok: true, responce: data.data }
            : { ok: false, errors: data.errors };
    } catch (error) {
        console.log(error.message);
    }
};

const deleteExpence = async (id) => {
    try {
        const res = await fetch(`${URI}/expences/${id}`, {
            method: "DELETE",
        });
        const { data } = await res.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

const getSingleExpences = async (id) => {
    try {
        const res = await fetch(`${URI}/expences/${id}`);
        if (!res.ok) throw new Error("error while fetching expences");
        const { data } = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error = ", error.message);
    }
};

const deleteAllExpencesByCategoryId = async (categoryId) => {
    try {
        const res = await fetch(`${URI}/expences/categoryId/${categoryId}`, {
            method: "DELETE",
        });
        if (!res.ok)
            throw new Error(
                "error while deleting expences based on categoryId "
            );

        const { data } = await res.json();
        return data;
    } catch (error) {
        console.log("Error = ", error.message);
    }
};

export {
    getAllExpences,
    createExpence,
    updateExpence,
    deleteExpence,
    getSingleExpences,
    deleteAllExpencesByCategoryId,
};
