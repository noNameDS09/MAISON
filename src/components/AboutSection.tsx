import DecryptedText from "./ui/decrypted-text";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 md:px-20 px-6 bg-[#202020] w-screen ">
            <div className="container mx-auto md:px-4">
                <div className="grid md:grid-cols-2 md:gap-16 gap-8 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-200">
                            <DecryptedText
                                text="A Legacy of Excellence"
                                animateOn="view"
                                speed={50}
                                maxIterations={10}
                                sequential={true}
                                revealDirection="start"
                                useOriginalCharsOnly={true}
                            />
                        </h2>
                        <p className="text-gray-400 mb-6 leading-relaxed font-sans tracking-wide">
                            Since 1985, Maison has been at the forefront
                            ofculinary excellence, combining traditional French
                            techniques with modern innovation. Our commitment to
                            quality and creativity has earned us recognition as
                            one of New York's premier dining destinations.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed font-sans tracking-wide">
                            Under the guidance of Chef Jean-Michel Laurent, our
                            kitchen creates unforgettable experiences that
                            celebrate the finest seasonal ingredients and
                            artisanal producers.
                        </p>
                        <div className="flex items-center gap-4">
                            <svg
                                className="h-6 w-6 text-[#C8A97E]"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            <span className="text-[#C8A97E] font-serif">
                                Michelin Star Restaurant
                            </span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 md:gap-4 gap-2">
                        <img
                            src="https://images.pexels.com/photos/3338537/pexels-photo-3338537.jpeg"
                            alt="Restaurant interior"
                            className="w-full h-full rounded-lg col-span-1 row-span-2 object-cover"
                        />
                        <img
                            src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg"
                            alt="Chef preparing food"
                            className="w-full h-full rounded-lg col-start-2 row-start-1 object-cover"
                        />
                        <img
                            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Food on the table"
                            className="w-full h-full rounded-lg col-start-2 row-start-2 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
