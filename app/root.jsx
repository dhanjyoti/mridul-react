import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "./styles/tailwind.css";
import FavIcon16 from './res/favicon-16x16.png'
import FavIcon32 from './res/favicon-32x32.png'
import FavIconApple from './res/apple-touch-icon.png'
import Header from "./components/header";
import Footer from "./components/footer";
export const links = () => [
    {
        rel: 'icon',
        href: FavIcon16,
        type: 'image/png',
        size: '16x16'
    },
    {
        rel: 'icon',
        href: FavIcon32,
        type: 'image/png',
        size: '32x32'
    },
    {
        rel: 'icon',
        href: FavIconApple,
        type: 'image/png',
        size: '180x180'
    },
    { rel: "stylesheet", href: 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css' },
    { rel: "stylesheet", href: stylesheet },
    
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap" }
];


export const meta = () => ({
    charset: "utf-8",
    title: "Get Fit and Strong learning Boxing, Muay Thai and MMA with Mridul Kant",
    description: "Looking for a skilled and dedicated personal trainer specializing in fitness and martial arts, including boxing, Muay Thai, and MMA? Our experienced trainer offers personalized programs to help you achieve your health and wellness goals. Contact us now!",
    keywords: "PersonalTrainer,FitnessTraining,MartialArts,Boxing,MuayThai,MMA,FunctionalTraining,StrengthAndConditioning,CardioWorkouts,StrikingDrills,PadWork,BagWork,Footwork,AgilityDrills,CoreStrengthening,ResistanceTraining,NutritionalGuidance,SelfDefenseSkills,MindBodyTransformation,Discipline,Focus,SelfConfidence,Perseverance,HealthAndWellness,FitnessJourney,WellnessGoals,TrainingPrograms,DynamicWorkouts,BodyTransformation,CombatSports,AthleteTraining,FitnessMotivation,FightTraining,FightSkills,FitnessCoach,WorkoutPlans,StrengthTraining,EnduranceTraining,WeightLoss,FitnessInspiration,PhysicalWellBeing,MartialArtsTraining,BoxingSkills,MuayThaiTechniques,MMAWorkouts,FitnessTips,SelfDefenseTechniques,FunctionalMovement,HealthyLifestyle,FitnessGoals,FitnessCommunity",
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
                <a href="tel:+91 7090607369" target="_blank" className="fixed bg-tertiary top-60 left-0  text-secondary z-30 flex flex-row items-center rounded-r-full shadow-3xl">
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
                <a href="https://wa.me/+917090607369" target="_blank" className="fixed top-72 left-0  text-secondary z-30 flex flex-row items-center rounded-r-full shadow-3xl">
                    <div className="border-2 border-secondary rounded-full bg-tertiary-alternate p-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlSpace="preserve"
                            viewBox="0 0 52 52"
                            className="h-9 w-9 "
                        >
                            <path fill="white" d="M26 0C11.663 0 0 11.663 0 26c0 4.891 1.359 9.639 3.937 13.762C2.91 43.36 1.055 50.166 1.035 50.237a.996.996 0 0 0 .27.981c.263.253.643.343.989.237l10.306-3.17A25.936 25.936 0 0 0 26 52c14.337 0 26-11.663 26-26S40.337 0 26 0zm0 50a23.94 23.94 0 0 1-12.731-3.651 1 1 0 0 0-.825-.108l-8.999 2.77a991.452 991.452 0 0 1 2.538-9.13c.08-.278.035-.578-.122-.821A23.907 23.907 0 0 1 2 26C2 12.767 12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
                            <path fill="white" d="M42.985 32.126c-1.846-1.025-3.418-2.053-4.565-2.803-.876-.572-1.509-.985-1.973-1.218-1.297-.647-2.28-.19-2.654.188a1 1 0 0 0-.125.152c-1.347 2.021-3.106 3.954-3.621 4.058-.595-.093-3.38-1.676-6.148-3.981-2.826-2.355-4.604-4.61-4.865-6.146C20.847 20.51 21.5 19.336 21.5 18c0-1.377-3.212-7.126-3.793-7.707-.583-.582-1.896-.673-3.903-.273a1.01 1.01 0 0 0-.511.273c-.243.243-5.929 6.04-3.227 13.066 2.966 7.711 10.579 16.674 20.285 18.13 1.103.165 2.137.247 3.105.247 5.71 0 9.08-2.873 10.029-8.572a.996.996 0 0 0-.5-1.038zm-12.337 7.385c-10.264-1.539-16.729-11.708-18.715-16.87-1.97-5.12 1.663-9.685 2.575-10.717.742-.126 1.523-.179 1.849-.128.681.947 3.039 5.402 3.143 6.204 0 .525-.171 1.256-2.207 3.293A.996.996 0 0 0 17 22c0 5.236 11.044 12.5 13 12.5 1.701 0 3.919-2.859 5.182-4.722a.949.949 0 0 1 .371.116c.36.181.984.588 1.773 1.104 1.042.681 2.426 1.585 4.06 2.522-.742 3.57-2.816 7.181-10.738 5.991z" />
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
