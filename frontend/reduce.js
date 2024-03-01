const data = [
    {
        _id: "65da4ee69fa9a5ba9b6def2d",
        category: {
            _id: "65da4d8f9fa9a5ba9b6deef8",
            categoryname: "food",
        },
        amount: 200,
        description: "samosas",
        expanceDate: "2024-02-06T20:16:47.000Z",
        createdAt: "2024-02-24T20:17:42.769Z",
        updatedAt: "2024-02-24T20:17:42.769Z",
        __v: 0,
    },
    {
        _id: "65e19a416b1d928e545ae75c",
        category: {
            _id: "65da4d8f9fa9a5ba9b6deef8",
            categoryname: "food",
        },
        amount: 200,
        description: "lunch",
        expanceDate: "2024-02-28T09:03:29.000Z",
        createdAt: "2024-03-01T09:05:05.965Z",
        updatedAt: "2024-03-01T09:05:05.965Z",
        __v: 0,
    },
    {
        _id: "65e20c282bf1aeb0770eb590",
        category: {
            _id: "65dae40f52f3d34efb3cab53",
            categoryname: "rent",
        },
        amount: 5500,
        description: "changed expence",
        expanceDate: "2024-01-02T00:00:00.000Z",
        createdAt: "2024-03-01T17:11:04.854Z",
        updatedAt: "2024-03-01T17:14:08.601Z",
        __v: 0,
    },
    {
        _id: "65e21b5a79f5e98b5363803a",
        category: {
            _id: "65da4d8f9fa9a5ba9b6deef8",
            categoryname: "food",
        },
        amount: 250,
        description: "Afternoon lunch",
        expanceDate: "2024-02-28T18:01:18.000Z",
        createdAt: "2024-03-01T18:15:54.701Z",
        updatedAt: "2024-03-01T18:15:54.701Z",
        __v: 0,
    },
    {
        _id: "65e21b7179f5e98b5363803e",
        category: {
            _id: "65da4d8f9fa9a5ba9b6deef8",
            categoryname: "food",
        },
        amount: 50,
        description: "VadaPav",
        expanceDate: "2024-03-01T18:01:18.000Z",
        createdAt: "2024-03-01T18:16:17.407Z",
        updatedAt: "2024-03-01T18:16:17.407Z",
        __v: 0,
    },
    {
        _id: "65e21b9279f5e98b53638042",
        category: {
            _id: "65dae40f52f3d34efb3cab53",
            categoryname: "rent",
        },
        amount: 5500,
        description: "Rent",
        expanceDate: "2024-02-03T18:01:18.000Z",
        createdAt: "2024-03-01T18:16:50.475Z",
        updatedAt: "2024-03-01T18:16:50.475Z",
        __v: 0,
    },
    {
        _id: "65e21bea79f5e98b5363804c",
        category: {
            _id: "65da4d9e9fa9a5ba9b6def00",
            categoryname: "Travel",
        },
        amount: 1500,
        description: "travelling to mumbai",
        expanceDate: "2024-02-26T18:17:14.000Z",
        createdAt: "2024-03-01T18:18:18.247Z",
        updatedAt: "2024-03-01T18:18:18.247Z",
        __v: 0,
    },
    {
        _id: "65e21c0979f5e98b53638050",
        category: {
            _id: "65da4d9e9fa9a5ba9b6def00",
            categoryname: "Travel",
        },
        amount: 20000,
        description: "north india visit",
        expanceDate: "2024-01-29T18:17:14.000Z",
        createdAt: "2024-03-01T18:18:49.943Z",
        updatedAt: "2024-03-01T18:18:49.943Z",
        __v: 0,
    },
];

const output = data.reduce((acc, val) => {
    return (acc = Object.keys(acc).includes(val.category.categoryname)
        ? {
              ...acc,
              [val.category.categoryname]:
                  acc[val.category.categoryname] + val.amount,
          }
        : { ...acc, [val.category.categoryname]: val.amount });
}, {});

console.log("output ===> ", output);
