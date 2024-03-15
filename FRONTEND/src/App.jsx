import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AppLayout from "./AppLayout";
import Category from "./components/categories/Category";
import { Toaster } from "react-hot-toast";
import Expences from "./components/expences/Expences";
import PieChart from "./components/charts/PiChart";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./context/authContext";

function App() {
    // const router = createBrowserRouter([
    //     {
    //         path: "/",
    //         element: <AppLayout />,
    //         children: [
    //             {
    //                 path: "categories",
    //                 element: <Category />,
    //             },
    //             {
    //                 path: "expences",
    //                 element: <p>expences</p>,
    //             },
    //         ],
    //     },
    //     {
    //         path: "/login",
    //         element: <Login />,
    //     },
    //     {
    //         path: "/signup",
    //         element: <SignUp />,
    //     },
    // ]);
    // return <RouterProvider router={router}></RouterProvider>;

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <AppLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route index element={<Category />} />
                        <Route path="categories" element={<Category />} />
                        <Route path="expences" element={<Expences />} />
                        <Route path="charts" element={<PieChart />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <Toaster
                position="top-center"
                gutter={12}
                containerStyle={{ margin: "8px" }}
                toastOptions={{
                    success: {
                        duration: 1500,
                    },
                    error: {
                        duration: 2500,
                    },
                    style: {
                        fontSize: "16px",
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "white",
                        color: "gray",
                    },
                }}
            />
        </AuthProvider>
    );
}

export default App;
