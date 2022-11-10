import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <div class="h-64">
      <h1 class="text-xl font-bold">welcome to this template</h1>
      <p>
        some info here
      </p>
      <p>
        some info there
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome',
};
