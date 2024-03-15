import { useExpences } from "../expences/ApiServices/useExpences";
import { Chart } from "react-google-charts";

function PieChart() {
    const { expences } = useExpences();

    // const chartdata = expences?.reduce((acc, val) => {
    //     return (acc = Object.keys(acc).includes(val.category?.categoryname)
    //         ? {
    //               ...acc,
    //               [val.category?.categoryname]:
    //                   acc[val.category?.categoryname] + val.amount,
    //           }
    //         : { ...acc, [val.category?.categoryname]: val.amount });
    // }, {});

    const chartdata = expences?.reduce((acc, val) => {
        return Object.keys(acc).includes(val.category?.categoryname)
            ? {
                  ...acc,
                  [val.category.categoryname]:
                      acc[val.category?.categoryname] + val.amount,
              }
            : { ...acc, [val.category?.categoryname]: val.amount };
    }, {});

    const data = chartdata ? Object.entries(chartdata) : [];
    data.unshift(["Category", "Amount"]);
    // console.log(data);

    const options = {
        title: "Expenses by Category",
        is3D: true,
    };
    return (
        <div>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />
        </div>
    );
}

export default PieChart;
