const URI = "http://localhost:8000/api/v1";

const createCategory = async (categoryname) => {
    const res = await fetch(`${URI}/categories/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ categoryname }),
    });

    console.log(res);
    const data = await res.json();
    console.log(data);
};

createCategory("Food");
