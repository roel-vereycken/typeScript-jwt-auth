import { NextPageContext } from "next"
import Router from "next/router"
import { myGet } from "../../api/myGet"
export default function People( {people} : any) {
    return (
        <div>
            <h1>Hello People {JSON.stringify(people)}</h1>
        </div>
    )
}

People.getInitialProps = async (ctx: NextPageContext) => {
    try {
        const json = await myGet("http://localhost:3000/people", ctx)
        return {people: json}
    }catch(error) {
        console.log(error)
    }
}

