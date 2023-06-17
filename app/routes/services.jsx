import Image1 from "../res/image-1.jpg"
import Image2 from "../res/image-2.jpg"
import Image3 from "../res/image-3.jpg"
import Image4 from "../res/image-4.jpg"
import Image5 from "../res/image-5.jpg"
import Image6 from "../res/image-6.jpg"
import Image7 from "../res/image-7.jpg"
import Image8 from "../res/image-8.jpg"
import Image13 from "../res/image-13.jpg"
import Image14 from "../res/image-14.jpg"
import Image15 from "../res/image-15.jpg"
import Image16 from "../res/image-16.jpg"

const Gallery = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image13,
    Image14,
    Image15,
    Image16
]

const Pricing = [
    {
        single_title: "Single Personal Training Session",
        single_price: "₹ 1,500",
        combo_title: "Combo package of 12 sessions",
        combo_price: "₹ 12,000"
    },
    {
        single_title: "Dual Personal Training Session",
        single_price: "₹ 2,000",
        combo_title: "Combo package of 12 sessions",
        combo_price: "₹ 18,000"
    },
    {
        single_title: "4 Persons Personal Training Session",
        single_price: "₹ 3,000",
        combo_title: "Combo package of 12 sessions",
        combo_price: "₹ 28,000"
    }
]

export default function Services() {
    return (
        <>
            <section className="text-center relative flex flex-col items-center justify-center h-screen bg-[26%_50%] bg-[center_1rem_top_1rem] bg-[url('../res/services.jpg')] md:bg-center">
                <div className="absolute inset-0 bg-default/60 z-10"></div>
                <h4 className="z-20 font-bold text-2xl md:text-4xl text-secondary mt-12 mb-4">
                    PERSONAL TRAINING
                </h4>
                <h5 className="z-20 text-3xl md:text-5xl text-tertiary font-bold">
                    GET FIT LEARINING MARTIAL ARTS WITH MRIDUL!
                </h5>
                <div className="grid grid-cols-1 gap-2.5 mt-20 lg:grid-cols-3">
                    {Pricing.map((price, index) => {
                        return (
                            <div key={`pricing-${index}`} className="border-4 border-tertiary p-4 flex flex-col items-center justify-center text-tertiary z-20 transition-all cursor-pointer bg-default/30 font-bold hover:bg-tertiary hover:text-secondary">
                                <span>{price.single_title}</span>
                                <span>{price.single_price}</span>
                                <span>{price.combo_title}</span>
                                <span>{price.combo_price}</span>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="">
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 xl:max-w-screen-xl xl:m-auto">
                    {Gallery.map((image, index)=>{
                        return(
                            <div key={`gallery-image-${index}`} className="relative">
                                <img src={image} alt={`Image ${index+1}`} className="scale-100 transition-all ease-in-out duration-300 hover:z-20 hover:shadow-4xl hover:absolute hover:scale-105 lg:hover:scale-110"/>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}