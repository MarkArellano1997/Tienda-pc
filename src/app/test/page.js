import { supabase } from "@/lib/supabase";

export default async function TestPage() {

    const { data, error } = await supabase
        .from("productos")
        .select("*");

    console.log("DATA:", data);
    console.log("ERROR:", error);

    return (
        <div className="p-10">
        <h1>DATA</h1>

        <pre>
            {JSON.stringify(data, null, 2)}
        </pre>

        <h1>ERROR</h1>

        <pre>
            {JSON.stringify(error, null, 2)}
        </pre>
        </div>
    );
}