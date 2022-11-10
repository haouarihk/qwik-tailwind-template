import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header';

export default component$(() => {
  return (
    <>
      <main class="p-2 mx-auto">
        <Header />
        <section class="p-2">
          <Slot />
        </section>
      </main>
      <footer>
        <a class="text-center" href="https://www.builder.io/" target="_blank">
          Made with ♡ by Builder.io
        </a>
      </footer>
    </>
  );
});
