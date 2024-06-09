import Image from "next/image";
import Hand from "@/assets/images/hand.jpg"
import Masjid from "@/assets/images/masjid.jpg"
import Pembangunan from "@/assets/images/pembangunan.jpg"
import Card from "@/components/templates/Card";
import Perencanaan from "@/assets/images/perencanaan.jpg"
import Counting from "@/components/templates/Counting";
import { GiWell } from "react-icons/gi";
import { FaMosque } from "react-icons/fa";
import { PiBuildingApartmentFill, PiStudentFill } from "react-icons/pi";
import { BsFillPeopleFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="w-[100%] overflow-x-hidden font-bahij scroll-smooth">
      <section id="1" className="relative w-[100vw] h-[100vh] flex justify-center items-center object-cover">
        <Image placeholder="blur" className="absolute -z-10 object-cover w-[100vw] h-[100vh]" src={Hand} alt="" />
        <div className="absolute w-[100vw] h-[100vh] bg-black bg-opacity-20 -z-10"></div>
        <h1 className="md:text-[75px] text-2xl text-white">أحب الناس إلى الله أنفعهم للناس</h1>
      </section>
      <section id="2" className="flex md:flex-row flex-col justify-center px-[7%] py-[5%] gap-10 md:h-[100vh] bg-white">
        <Card src={Masjid} title="مشارعنا المنفذة" />
        <Card src={Pembangunan} title="تكتمل قريبا" />
        <Card src={Perencanaan} title="بحاجة للتبرع" />
      </section>
      <section id="3" className="md:h-[70vh] flex justify-center items-center text-base bg-base md:p-0 p-5">
        <div className="w-[90%] h-[50%] bg-white rounded-3xl flex md:flex-row flex-col justify-center items-center">
          <Counting icon={<BsFillPeopleFill className="" />} count={5808} title="مصلين" />
          <Counting icon={<PiStudentFill />} count={8954} title="طلبة" />
          <Counting icon={<GiWell />} count={15} title="بئر" />
          <Counting icon={<FaMosque />} count={22} title="مسجد" />
          <Counting icon={<PiBuildingApartmentFill />} count={23} title="مركز التعليمي" end />
        </div>
      </section>
      <section id="4" className="h-[100vh] flex justify-center items-center bg-white">
        <h1>خريطة</h1>
      </section>
    </div>
  );
}
