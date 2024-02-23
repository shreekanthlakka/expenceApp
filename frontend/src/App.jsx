import AddCategories from "./components/categories/AddCategories";
import CategoriesListing from "./components/categories/CategoriesListing";
import AddExpence from "./components/expance/AddExpence";
import ExpenceListing from "./components/expance/ExpenceListing";

function App() {
    return (
        <div>
            <h1 className="text-center text-3xl mt-2">Expence App</h1>
            <div className="flex flex-row justify-center space-x-10 m-8 font-medium">
                <CategoriesListing />
                <AddCategories />
            </div>
            <div className="flex flex-row justify-center space-x-10 m-8 font-medium ">
                <ExpenceListing />
                <AddExpence />
            </div>
        </div>
    );
}

export default App;
