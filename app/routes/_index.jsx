import { Splide, SplideSlide } from '@splidejs/react-splide';

import Image1 from "../res/image-1.jpg"
import Image2 from "../res/image-2.jpg"
import Image3 from "../res/image-3.jpg"
import Image4 from "../res/image-4.jpg"
import Image5 from "../res/image-5.jpg"
import Image6 from "../res/image-6.jpg"
import Image7 from "../res/image-7.jpg"
import Image8 from "../res/image-8.jpg"
import Image9 from "../res/image-9.jpg"
import Image10 from "../res/image-10.jpg"
import Image11 from "../res/image-11.jpg"
import AboutImage from "../res/pic2.jpg"

import Video1 from "../res/videos/vid-1.mp4"
import Video2 from "../res/videos/vid-2.mp4"
import Video3 from "../res/videos/vid-3.mp4"
import Video4 from "../res/videos/vid-4.mp4"


const SlideShow = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8
]
const JourneyCards = [
    {
        image: Image11,
        title: "Strength & Conditioning",
        description: "Muscle building, with Strength and Conditioning. Have the body you wished for."
    },
    {
        image: Image9,
        title: "Martial Arts",
        description: "Learn Boxing, Kickboxing, MuayThai, Wrestling, Brazilian Jui-Jitsu & Self-defence."
    },
    {
        image: Image10,
        title: "Weight Loss",
        description: "Specilized program for weight loss with categorized exercises according to different body types."
    },
]

export default function IndexRoute() {

    return <div>
        <section className="h-screen bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.90)_100%),url('../res/back.jpg')] bg-cover bg-no-repeat flex flex-col items-center justify-center bg-[70%_50%]">
            <h1 className="text-secondary px-12 font-bold text-2xl md:leading-tight md:text-5xl max-w-screen-lg m-['0 auto']">Get Fit and Strong learning Boxing, Muay Thai and MMA with <br /><span className="block mt-3 text-tertiary text-5xl md:text-7xl">Mridul Kant</span></h1>
            <h6 className="text-secondary mt-10">Trainer at your door steps.</h6>
        </section>
        <section className="pt-14 pb-8 flex flex-col gap-5 bg-secondary-alternate">
            <h3 className="text-center text-4xl font-bold">
                Start your journey today!
            </h3>
            <div className="grid grid-cols-1 max-w-screen-lg m-auto gap-10 p-3 lg:grid-cols-3 lg:p-0">
                {JourneyCards.map((jour, index) => {
                    return (
                        <div key={`journey-${index}`} className="bg-primary text-secondary shadow-3xl">
                            <img src={jour.image} className="w-full" />
                            <div className="p-5">
                                <h6 className="font-bold text-lg">
                                    {jour.title}
                                </h6>
                                <p className="text-md">
                                    {jour.description}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
        <section className="grid grid-cols-1 pt-14 lg:grid-cols-2 mb-8" id="about">
            <div className="p-3 text-center flex flex-col items-center gap-5 lg:order-last lg:justify-center lg:px-24">
                <h3 className="text-center text-4xl font-bold">
                    About Mridul
                </h3>
                <p>
                    Mridul started Boxing in the year 2003 at Sports Authority of India, trained Muay Thai in Thailand
                    from
                    2007 to 2011.
                </p>
                <p>
                    Worked as a Boxing Coach in BFL Gym, Thailand. Started working as trainer in India from 2015 as a
                    Striking Coach.
                </p>
                <p>
                    He has worked in Chennai, Punjab, Bangalore and Goa. He last worked in American Kickboxing Academy,
                    Goa.
                </p>
                <p>
                    He has done Bachelors in Physical Education(B.P.ed) and National Institute of Sports(NIOS).
                </p>
                <a href='about' className='text-tertiary text-lg font-bold hover:underline'>Read more</a>
            </div>
            <img src={AboutImage} className="mt-6" />
        </section>
        <section className="bg-primary pt-14 p-3 text-center text-secondary">
            <h3 className="text-4xl font-bold mb-10">
                START YOUR JOURNEY OF FITNESS WITH A WHOLE NEW LEVEL OF EXPERIENCE
            </h3>
            <div className="flex flex-col gap-6 mb-10">
                <div>
                    <span className="text-tertiary">FLEXIBILITY</span>
                    <p>You get to decide when you want to do which exercise. Combination of everything with each other
                        according to your wishes, i.e- date & time.</p>
                </div>
                <div>
                    <span className="text-tertiary">RESULTS</span>
                    <p>You not only achieve short-term success, but also long-term and sustainable ones. Get toned & feel
                        happy.</p>
                </div>
                <div>
                    <span className="text-tertiary">FUN</span>
                    <p>You get to enjoy every exercise, learn the skill with proper technique & have fun.</p>
                </div>
            </div>
            <Splide aria-label="Image Gallery" options={
                {
                    type: 'loop',
                    autoplay: 'play',
                    perPage: 3,
                    perMove: 1,
                    interval: 2500,
                    arrows: false
                }
            }>
                {SlideShow.map((img, index) => {
                    return (
                        <SplideSlide key={`slide-${index}`} className="px-1 lg:px-5">
                            <img src={img} alt={`Image ${index + 1}`} className='w-full'/>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </section>
        <section className="pt-14 p-3 text-center text-default bg-secondary-alternate">
            <h3 className="text-4xl font-bold mb-10">Video gallery</h3>
            <div className="flex flex-col items-center gap-10 lg:grid lg:grid-cols-4 lg:max-w-screen-xl lg:m-auto">
                <video src={Video4} controls className="h-120"></video>
                <video src={Video1} controls className="h-120"></video>
                <video src={Video2} controls className="h-120"></video>
                <video src={Video3} controls className="h-120"></video>
            </div>
        </section>
    </div>
}