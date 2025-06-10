import MainLayout from "@/components/Layouts/MainLayout";
import React from "react";
import Image from "next/image";

import home3 from "../../../../public/home3.png";
import home1 from "../../../../public/home1.jpg";
import home2 from "../../../../public/home2.jpg";
import home4 from "../../../../public/home4.jpg";
import home5 from "../../../../public/home5.jpg";
import home6 from "../../../../public/home6.jpg";
import home7 from "../../../../public/home7.jpg";
import home8 from "../../../../public/home8.jpg";
import home9 from "../../../../public/home9.jpg";
import home10 from "../../../../public/home10.jpg";
import home11 from "../../../../public/home11.jpg";
import home12 from "../../../../public/home12.jpg";
import home13 from "../../../../public/home13.jpg";
import home14 from "../../../../public/home14.jpg";
import home16 from "../../../../public/home16.jpg";
import home17 from "../../../../public/home17.jpg";
import home15 from "../../../../public/home15.jpg";
const Home = () => {
  
  
  return (
    <MainLayout>
      <div className=" p-5 text-4xl font-serif text-center text-amber-700">
        WELCOME TO<br></br>
        PARADISE AWAITS, STEP IN…
      </div>

      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="row-span-3">
          <Image src={home3} alt="home3" width={500} height={10} />
        </div>
        <div className=" row-span-3 flex items-center">
          <p className="flex justify-items-end-safe text-2xl font-normal">
            Blue skies, warm sands and blazing sunsets… another day in paradise?
            At one of the finest beach hotels in Sri Lanka it sure is. Five star
            luxury and indulgence is yours to enjoy at our spacious resort in
            Padukka. Here, lush comforts, fine cuisine and leisurely days of
            sunshine are yours to treasure on a heavenly tropical holiday.As the
            sun sets fire to the horizon, let the gold tipped surf roll gently
            to your feet and ebb away. Set your deck chair on the beach, sit
            back and get ready to witness one of nature’s grandest shows – the
            performances run daily, so raise a glass to wonderful days ahead.
            Days to explore and fill with experiences new, or simply enjoy doing
            nothing at all: just lazy, carefree and so perfect. You are on
            holiday after all…
          </p>
        </div>
      </div>

      {/* <div className="grid grid-cols-2">
        <section className="p-2 text-right">
          <div>
            <Image src={home3} alt="home3" width={500} height={10} />
          </div>
          <div>
            <p className="flex justify-items-end-safe text-2xl font-normal">
              Blue skies, warm sands and blazing sunsets… another day in
              paradise? At one of the finest beach hotels in Sri Lanka it sure
              is. Five star luxury and indulgence is yours to enjoy at our
              spacious resort in Padukka. Here, lush comforts, fine cuisine and
              leisurely days of sunshine are yours to treasure on a heavenly
              tropical holiday.As the sun sets fire to the horizon, let the gold
              tipped surf roll gently to your feet and ebb away. Set your deck
              chair on the beach, sit back and get ready to witness one of
              nature’s grandest shows – the performances run daily, so raise a
              glass to wonderful days ahead. Days to explore and fill with
              experiences new, or simply enjoy doing nothing at all: just lazy,
              carefree and so perfect. You are on holiday after all…
            </p>
          </div>

         
        </section>
      </div> */}

      <section className="p-10 text-4xl font-serif text-center text-amber-700">
        OUR COLLECTION...
      </section>
      <p className=" p-5 text-center text-2xl font-normal">
        Seeing is believing? So why not scroll through our gallery and take a
        look at what we have waiting here for you. See how you will see the sea
        from our balconies. See the cosy spaces ready to welcome you. See the
        tempting arrays of fare we have for you. Then, come visit us, and
        believe.
      </p>
      <div className='grid grid-cols-4'>
    <div className='flex justify-center mt-4'>
    <Image
    src={home1}
    alt='home1'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home2}
    alt='home2'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home4}
    alt='home4'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home5}
    alt='home5'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home6}
    alt='home6'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home7}
    alt='home7'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home8}
    alt='home8'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home9}
    alt='home9'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home10}
    alt='home10'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home11}
    alt='home11'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home12}
    alt='home12'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home13}
    alt='home13'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home14}
    alt='home14'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home16}
    alt='home16'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home17}
    alt='home17'
    width={300}
    height={300}
    />
    </div>

    <div className='flex justify-center mt-4'>
    <Image
    src={home15}
    alt='home15'
    width={300}
    height={300}
    />
    </div>








</div>
    


      


      
        



      
    </MainLayout>
  );
};

export default Home;