import { infos } from "./seasonData";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
} from "mdb-react-ui-kit";
import SeasonItem from "./SeasonItem";

export default function SeasonList() {
    return (
        <MDBContainer fluid ClassName='my-5 text-center d-flex justify-content-center '>
            <MDBRow >
                {infos.map(info => (
                    <MDBCol key={info.id} md='6' lg="3" className="mb-4">
                        <SeasonItem item={info} />
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    )
}