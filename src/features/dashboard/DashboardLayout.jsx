import styled from "styled-components";
import {useRecentBookings} from "../../hooks/useRecentBookings.js";
import Spinner from "../../ui/Spinner.jsx";
import {useRecentStays} from "../../hooks/useRecentStays.js";
import Stats from "./Stats.jsx";
import {useCabins} from "../../hooks/useCabins.js";
import SalesChart from "./SalesChart.jsx";
import DurationChart from "./DurationChart.jsx";
import TodayActivity from "../check-in-out/TodayActivity.jsx";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;


function DashboardLayout() {
const {bookings,isLoading}=useRecentBookings()
    const{confirmedStays,isLoading:isLoading2,numDays}=useRecentStays()
    const {cabins,isLoading:isLoading3}=useCabins()

    if (isLoading || isLoading2 ||isLoading3) return <Spinner/>

    return (
        <StyledDashboardLayout>
            <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length}/>
            <TodayActivity/>
            <DurationChart confirmedStays={confirmedStays}/>
            <SalesChart bookings={bookings} numDays={numDays}/>
        </StyledDashboardLayout>
    );
}

export default DashboardLayout;