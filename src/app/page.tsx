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
import LandingPage from "@/components/templates/LandingPage";
import Maps from "@/components/sections/Maps";
import Image from "next/image";


export default function Home() {
  return (
    <div className="w-[100%] overflow-x-hidden font-bahij scroll-smooth">
      <section className="relative w-[100vw] h-[100vh] flex justify-center items-center object-cover">
        <Image placeholder="blur" className="absolute -z-10 object-cover object-center w-[100vw] h-[100vh]" src={Hand} alt="" />
        <div className="absolute w-[100vw] h-[100vh] bg-black bg-opacity-60 -z-10"></div>
        <div className="text-white text-center w-[80%]">
          <h1 className="md:text-[20px] md:leading-[45px] sm:text-[15px] sm:leading-[40px] xl:text-[25px] xl:leading-[50px] text-sm text-right">: قال رسول الله صلى الله عليه وسلم</h1>
          <h1 className="md:text-[25px] md:leading-[50px] sm:text-[15px] sm:leading-[40px] xl:text-[45px] xl:leading-[70px] text-xl text-right">ما تصدق أحد بصدقة من طيب إلا أخذها الرحمن بيمينه، وإن كان تمرة، فتربو في كف الرحمن حتى تكون أعظم من الجبال</h1>
          <h1 className="md:text-[20px] md:leading-[45px] sm:text-[15px] sm:leading-[40px] xl:text-[25px] xl:leading-[50px] text-sm text-left">رواه مسلم</h1>
        </div>
      </section>

      <section id="2" className="flex flex-wrap justify-center px-[7%] py-[5%] gap-5 xl:h-[100vh] bg-white">
        <Card location="/completed" src={Masjid} title="تم تنفيذ المشروع" />
        <Card location="/on-progress" src={Pembangunan} title="تكتمل قريبا" />
        <Card location="/planning" src={Perencanaan} title="بحاجة للتبرع" />
      </section>
      <section id="3" className="xl:h-[70vh] flex justify-center items-center text-base bg-base xl:p-0 p-5">
        <div className="w-[90%] h-[50%] bg-white rounded-3xl flex xl:flex-row flex-col justify-center items-center">
          <Counting icon={<BsFillPeopleFill className="" />} count={5808} title="مصلين" />
          <Counting icon={<PiStudentFill />} count={8954} title="طلبة" />
          <Counting icon={<GiWell />} count={15} title="بئر" />
          <Counting icon={<FaMosque />} count={22} title="مسجد" />
          <Counting icon={<PiBuildingApartmentFill />} count={23} title="مركز التعليمي" end />
        </div>
      </section>
      <Maps />
    </div>
  );
}
