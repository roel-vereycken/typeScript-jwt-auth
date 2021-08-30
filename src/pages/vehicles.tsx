import { NextPageContext } from "next"
import Router from "next/router"
import { myGet } from "../../api/myGet"
export default function Vehicles( {vehicles} : any) {
    return (
        <div>
            <h1>Hello People {JSON.stringify(vehicles)}</h1>
        </div>
    )
}

Vehicles.getInitialProps = async (ctx: NextPageContext) => {
    try {
        const json = await myGet("http://localhost:3000/vehicles", ctx)
        return {people: json}
    }catch(error) {
        console.log(error)
    }
}

