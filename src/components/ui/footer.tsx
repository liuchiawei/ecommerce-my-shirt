import SNSLinks from "@/components/SNSLinks";

export default function Footer() {
  return (
    <div className="grid grid-cols-2 gap-10 w-full h-full py-10 px-6 md:px-10">
      <div className="w-full md:w-[45%]">
        <div>logo</div>
        <p className="text-sm">
          ©2025 Liu
          <br /> All rights reserved.
        </p>
      </div>
      <ul className="w-full flex flex-col md:flex-row justify-between gap-4 px-8 *:flex *:flex-col *:gap-2 **:data-mainlink:font-bold **:data-sublink:text-foreground/50 **:data-sublink:text-sm **:data-sublink:hidden **:data-sublink:md:block">
        <li>
          <a data-mainlink href="#">
            home
          </a>
        </li>
        <li>
          <a data-mainlink href="#">
            about
          </a>
          <ul data-sublink>
            <li>
              <a href="#">about us</a>
            </li>
            <li>
              <a href="#">history</a>
            </li>
            <li>
              <a href="#">recruit</a>
            </li>
          </ul>
        </li>
        <li>
          <a data-mainlink href="#">
            online shop
          </a>
          <ul data-sublink>
            <li>
              <a href="#">clothes</a>
            </li>
            <li>
              <a href="#">accessories</a>
            </li>
            <li>
              <a href="#">shoes</a>
            </li>
            <li>
              <a href="#">others</a>
            </li>
          </ul>
        </li>
        <li>
          <a data-mainlink href="#">
            contact
          </a>
          <a data-sublink href="#">
            contact
          </a>
        </li>
      </ul>
      <SNSLinks />
    </div>
  );
}
