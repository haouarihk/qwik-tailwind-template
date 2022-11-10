import { component$ } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';
import Logo from '@icons/logo';
import clsx from 'clsx';



export const pages = [
  {
    name: "About us",
    href: "/about-us"
  },
  {
    name: "Contact us",
    href: "/contact-us"
  }
]



export default component$(() => {
  const nav = useNavigate();
  return (
    <header class="flex px-4 justify-between bg-white dark:bg-darken-light dark:text-white">
      <div>
        <Link
          class="inline-block pt-[10px] pr-[10px] pb-[7px] pl-5"
          href="/"
        >
          <Logo />
        </Link>
      </div>
      <ul class="m-0 pr-[10px] pb-0 p-l-0">
        {pages.map((e) =>
          <li class={clsx("inline-block m-0 p-0 hover:bg-accent-light transition-colors", {
            "bg-accent text-white": e.href === nav.path
          })}>
            <Link
              class="inline-block px-[15px] py-[10px] no-underline"
              href={e.href}
            >
              {e.name}
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
});
