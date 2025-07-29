import { useLocation } from "react-router-dom";

function Product(){
    // let {categoryId} = useParams();
    // return(<h2>ID Selected {categoryId}</h2>);

    const {state} = useLocation();
    return(<h2>ID Selected {state.categoryId}</h2>);
}

export default Product;