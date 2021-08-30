import { useRouter } from "next/router";
import { VehiclePerson } from "../../../api/VehiclePerson";

export interface PersonProps {
  ownersList?: VehiclePerson[]
}

export default function Roel() {
  const router = useRouter();
  return (
    <h2>
      {router.query.person}'s {router.query.vehicle}
    </h2>
  );
}
