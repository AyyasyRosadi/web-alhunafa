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


export default function Home() {
  return (
    <div className="w-[100%] overflow-x-hidden font-bahij scroll-smooth">
      <LandingPage image={Hand} title="أحب الناس إلى الله أنفعهم للناس" />
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
      <Maps/>
    </div>
  );
}
