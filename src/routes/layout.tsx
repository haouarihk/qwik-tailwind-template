import { component$, Slot } from '@builder.io/qwik';
import Footer from '~/components/footer';
import Header from '../components/header';

export default component$(() => {
  return (
    <>
      <main class="mx-auto">
        <Header />
        <section class="p-2">
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  );
});
