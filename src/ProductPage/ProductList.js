import {
    MDBContainer,
    MDBRow,
    MDBCol,

} from "mdb-react-ui-kit";
import ProductItem from "./ProductItem";

export default function ProductList({ products}) {

     return (
        <MDBContainer fluid className="my-5 text-center d-flex justify-content-center ">
            <MDBRow className="mobile">
                {products.map(product => (
                    <MDBCol key={product.id} md="6" lg="3" className="mb-4">
                        <ProductItem className="card" product={product} />
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
     )
}