const URI = "http://localhost:8000/api/v1";

const createCategory = async (categoryname) => {
    const res = await fetch(`${URI}/categories`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryname }),
    });

    const data = await res.json();
    return data.success ? data.data : data.errors;
};

createCategory("TRAVELL");
