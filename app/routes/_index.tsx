import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { Welcome } from "../welcome/welcome";

export function meta() {
    return [
        { title: "New React Router App" },
        { name: "description", content: "Welcome to React Router!" },
    ];
}

export function loader({ context }: LoaderFunctionArgs) {
    console.log(context);
    return { message: context.VALUE_FROM_EXPRESS };
}

export default function Home() {
    const loaderData = useLoaderData();
    console.log(loaderData);
    return <Welcome message={loaderData.message} />;
}
