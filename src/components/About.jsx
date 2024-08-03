import React from 'react';

export default function About() {
    return (
        <section className=" bg-custom-gradient text-black py-16 rounded-lg ">

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl text-blue-600 font-bold mb-4"> What Makes us Different?                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Born to generations of shoe manufacturers, our founder Daniel Rubin was destined to follow in their footsteps with a shoe empire of his own. In 1992 Dune London was born, beginning as a small concession store on London's iconic Oxford Street. The dream was simple - to create an affordable luxury footwear and accessories brand. Daniel understood from day one the importance of a perfect pair of shoes for the right occasion, and it's with this ethos that the brand has built its reputation and grown. As the name suggests, we also love London, our home. As the epicentre of fashion with its vibrant, diverse and creative energy, it's a city that constantly inspires us. Fast forward to today, and we now have over 350 store locations worldwide. We're London born, globally worn.
                        </p>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h1 className='font-bold'>Your Shoes, Our Passion                                </h1>
                                <p className='text-gray-500' >There are many variations of passages of Lorem Ipsum available

                                </p>
                            </div>
                            <div>
                                <h1 className='font-bold'>Start With The Shoes
                                </h1>
                                <p className='text-gray-500'>Curabitur blandit lacus porttitor ridiculus mus.</p>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h1 className='font-bold' >Our Heritage
                                </h1>
                                <p className='text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                            </div>
                            <div>
                                <h1 className='font-bold'>Top-Notch Support
                                </h1>
                                <p className='text-gray-500'> It has survived not only five centuries, but also the leap into electronic typesetting</p>
                            </div>

                        </div>

                    </div>




                    <div>


                        <img
                            src="src/images/gitl.png"
                            alt="About Us"
                            className="w-full h-auto rounded-md shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
