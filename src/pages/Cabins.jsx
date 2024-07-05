import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable.jsx";
import Addcabin from "../features/cabins/Addcabin.jsx";

function Cabins() {
  return (
      <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>filter/sort</p>
    </Row>
          <Row>
                <CabinTable/>
                 <Addcabin/>
          </Row>
      </>
  );
}

export default Cabins;
