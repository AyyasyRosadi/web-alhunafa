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
import Map from '@/components/templates/Map'
import { markers } from "@/components/constant/Marker";
import LandingPage from "@/components/templates/LandingPage";


export default function Home() {
  return (
    <div className="w-[100%] overflow-x-hidden font-bahij scroll-smooth">
      <LandingPage image={Hand} title="أحب الناس إلى الله أنفعهم للناس" />
      <section id="2" className="flex flex-wrap justify-center px-[7%] py-[5%] gap-5 xl:h-[100vh] bg-white">
        <Card location="/completed" src={Masjid} title="تم تنفيذ المشروع" />
        <Card location="/on-progress" src={Pembangunan} title="تكتمل قريبا" />
        <Card location="/planning" src={Perencanaan} title="بحاجة للتبرع" />
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
      <section id="4" className="h-[100vh] flex flex-col justify-center items-center gap-7 bg-white">
        <h1 className="md:text-4xl text-xl text-base">خريطة المشروع</h1>
        <div className="w-[90%] h-[80%] rounded-3xl flex md:flex-row flex-col justify-center items-center">
          <Map markers={markers} />
        </div>
      </section>
    </div>
  );
}
