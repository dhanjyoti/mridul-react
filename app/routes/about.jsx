export default () => {
  const text = () => {
    return (
      <>
        <p>
          Mridul's journey in combat sports began in 2003 when he joined the
          renowned Sports Authority of India, where he first delved into the
          world of boxing. His dedication and commitment soon led him to explore
          the art of Muay Thai Eager to expand his knowledge, Mridul embarked on
          a transformative journey to Thailand from 2007 to 2011, immersing
          himself in the rich culture and rigorous training of Muay Thai.
        </p>
        <p>
          After returning to his home country, Mridul continued to pursue his
          passion as a boxing coach, with a stint at the esteemed BFL Gym in
          Thailand. In 2015, he brought his expertise back to India, where he
          began his career as a striking coach. Throughout his professional
          journey, Mridul has left an indelible impact in various cities,
          including Chennai, Punjab, Bangalore, and Goa. His last endeavor led
          him to the prestigious American Kickboxing Academy in Goa, where he
          further refined his coaching skills and contributed to the growth of
          aspiring fighters.
        </p>
        <p>
          Mridul's dedication to the martial arts extends beyond his practical
          experience. He holds a Bachelor's degree in Physical Education
          (B.P.ed) and has undergone training at the renowned National Institute
          of Sports (NIOS), solidifying his theoretical understanding of combat
          sports and ensuring a holistic approach to training.
        </p>
        <p>
          With a wealth of experience, Mridul is known for his unwavering
          commitment to his students' progress and success. Through his website,
          he aims to share his expertise, provide valuable insights, and inspire
          individuals interested in Muay Thai and boxing. Whether you're a
          novice looking to embark on a new fitness journey or an experienced
          fighter seeking to refine your skills, Mridul is here to guide you
          every step of the way.
        </p>
        <p>
          Stay tuned for informative articles, training tips, and updates from
          Mridul's blog section, Discover the power of Boxing, Muay Thai and
          Mixed Martial Arts and unlock your true potential under the guidance
          of a true expert.
        </p>
        <p>
          Contact Mridul today to start your transformative martial arts
          journey!
        </p>
      </>
    );
  };
  return (
    <div>
      <section className="h-screen bg-[linear-gradient(270deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.90)_100%),url('../res/pic2.jpg')] bg-cover bg-no-repeat flex flex-col items-center justify-center bg-[70%_50%]">
        <h1 className="text-secondary px-12 font-bold text-2xl md:leading-tight md:text-5xl max-w-screen-lg m-['0 auto']">
          About Mridul
        </h1>
        <div className="text-secondary mt-10 flex flex-col gap-3 p-5 text-justify">
          <p className="md:max-w-screen-lg">
            Welcome to the official website of Mridul, a seasoned Muay ThaI
            expert and accomplished boxing coach. With years of experience and a
            passion for martial arts, Mridul has dedicated his life to honing
            his skills and sharing his expertise with others.
          </p>
          <div className="flex-col gap-3 hidden md:flex md:max-w-screen-lg">
            {text()}
          </div>
        </div>
      </section>
      <section className="p-5 py-8 flex flex-col gap-3 md:hidden text-justify">{text()}</section>
    </div>
  );
};
