import { component$ } from '@builder.io/qwik';
import { QwikLogo } from './icons/qwik';

export default component$(() => {

  return (
    <header class="flex justify-between bg-white border-b-[10px] border-b-qwik-dark-purple">
      <div>
        <a
          class="inline-block pt-[10px] pr-[10px] pb-[7px] pl-5"
          href="https://qwik.builder.io/"
          target="_blank"
        >
          <QwikLogo />
        </a>
      </div>
      <ul class="m-0 pt-1 pr-[10px] pb-0 p-l-0">
        <li class="inline-block m-0 p-0">
          <a
            class="inline-block px-[15px] py-[10px] no-underline hover:underline"
            href="https://qwik.builder.io/docs/components/overview/" target="_blank"
          >
            Docs
          </a>
        </li>
        <li class="inline-block m-0 p-0">
          <a
            class="inline-block px-[15px] py-[10px] no-underline hover:underline"
            href="https://qwik.builder.io/examples/introduction/hello-world/" target="_blank"
          >
            Examples
          </a>
        </li>
        <li class="inline-block m-0 p-0">
          <a
            class="inline-block px-[15px] py-[10px] no-underline hover:underline"
            href="https://qwik.builder.io/tutorial/welcome/overview/" target="_blank"
          >
            Tutorials
          </a>
        </li>
      </ul>
    </header>
  );
});
