import {
    LinksFunction,
    MetaFunction,
} from "@remix-run/node"; // or cloudflare/deno
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "./styles/tailwind.css";
import ss from '@splidejs/splide/dist/css/splide.min.css';
import Header from "./components/header";
import Footer from "./components/footer";
export const links = () => [
    { rel: "stylesheet", href: stylesheet },
    { rel: "stylesheet", href: ss },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap" }
];


export const meta = () => ({
    charset: "utf-8",
    title: "My Amazing App",
    viewport: "width=device-width, initial-scale=1",
});

export default function App() {
    return (
        <html lang="en">
            <head>
                {/* All meta exports on all routes will go here */}
                <Meta />

                {/* All link exports on all routes will go here */}
                <Links />
            </head>
            <body>
                {/* Child routes go here */}
                <Header />
                <a href="tel:+91 7090607369" className="fixed bg-tertiary top-60 left-0  text-secondary z-30 flex flex-row items-center rounded-r-full shadow-3xl">
                    <div className="px-2 text-sm">
                    +91-7090607369
                    </div>
                    <div className="border-2 border-secondary rounded-full p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#fff"
                            stroke="#fff"
                            viewBox="0 0 15 15"
                            className="h-3 w-3"
                        >
                            <path
                                fill="#fff"
                                fillRule="evenodd"
                                stroke="none"
                                d="M14.73 12.996c-.463 1.407-2.277 2.109-3.573 1.992-1.77-.16-3.696-1.099-5.158-2.133C3.85 11.335 1.837 8.984.664 6.489-.165 4.726-.35 2.558.882.951c.456-.594.95-.911 1.69-.948C3.6-.047 3.744.541 4.097 1.457c.263.685.614 1.384.81 2.094.367 1.325-.916 1.38-1.078 2.463-.1.683.727 1.599 1.101 2.086a10.105 10.105 0 0 0 2.608 2.403c.57.359 1.488 1.006 2.14.649 1.004-.55.91-2.243 2.313-1.67.727.296 1.431.723 2.125 1.097 1.073.577 1.023 1.175.614 2.417-.306.928.306-.928 0 0"
                            />
                        </svg>
                    </div>
                </a>
                <Outlet />
                <Footer />
                {/* Manages scroll position for client-side transitions */}
                {/* If you use a nonce-based content security policy for scripts, you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
                {/* <ScrollRestoration /> */}

                {/* Script tags go here */}
                {/* If you use a nonce-based content security policy for scripts, you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
                <Scripts />
                <ScrollRestoration />
                {/* Sets up automatic reload when you change code */}
                {/* and only does anything during development */}
                {/* If you use a nonce-based content security policy for scripts, you must provide the `nonce` prop. Otherwise, omit the nonce prop as shown here. */}
                {/* <LiveReload /> */}
            </body>
        </html>
    );
}
