export const getProducts = () => async (dispatch) => {
    try {
        const response = await fetch("/getproducts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) { // Check if the response is OK
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const res = await response.json();
        console.log(res);
        dispatch({ type: "SUCCESS_GET_PRODUCTS", payload: res }); // Corrected action type
    } catch (error) {
        console.error("Error fetching products:", error);
        dispatch({ type: "FAIL_GET_PRODUCTS", payload: error.message }); // Use error.message
    }
};
