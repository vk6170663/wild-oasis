import { createClient } from "@/lib/supabase/client";

export async function getCabins() {
    const supabase = createClient();
    const { data, error } = await supabase
        .from('cabins')
        .select('*');

    if (error) {
        console.error(error);
        throw new Error('Cabins could not be loaded');
    }
    return data;
}