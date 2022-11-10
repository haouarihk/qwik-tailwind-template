import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return <>
        <h1 class="text-xl font-bold">
            contact list
        </h1>

        <ol>
            <li>email:</li>
            <li>discord:</li>
            <li>linkedIn:</li>
            <li>matrix:</li>

        </ol>
    </>
})

export const head: DocumentHead = {
    title: 'Contact US',
};