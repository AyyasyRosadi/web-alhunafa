import Image from 'next/image'
import React from 'react'
import Buildings from "@/assets/images/buildings.jpg"
import Yayasan from "@/assets/images/yayasan.jpg"


export default function Page() {
    return (
        <div className='font-bahij overflow-x-hidden'>
            <section className="relative w-[100vw] h-[100vh] flex justify-center items-center object-cover">
                <Image placeholder="blur" className="absolute -z-10 object-cover w-[100vw] h-[100vh]" src={Buildings} alt="" />
                <div className="absolute w-[100vw] h-[100vh] bg-black bg-opacity-20 -z-10"></div>
                <h1 className="md:text-[75px] text-2xl text-white">معلومات عنا</h1>
            </section>
            <section className="relative w-[100vw] p-[5%] text-right flex flex-col items-end gap-10">
                <h1 className='md:text-[50px] text-[20px] text-base'>نشاة المؤسسة</h1>
                <div className='flex md:flex-row flex-col-reverse justify-between items-center w-[100%] h-[60%] gap-5'>
                    <div className='md:text-xl font-light'>
                        مؤسسة الحنفاء لومبوك بمحافظة نوسا تنجارى الغربية تأسست عام 2002 م الموافق 1423 هـ في مدينة ماتارام جزيرة لومبوك محافطة نوسا تنجارى الغربية حمهورية إندونيسيا.
                        في بداية انطلاقها أسست معهدا دراسيا تحت مسمى &quot;معهد أبو هريرة الإسلامي&quot; ثم حصلت على اعتماد من قبل وزارة الخارجية الكويتية تحت رقم 3560 عام 2019 م
                    </div>
                    <Image placeholder="blur" className="-z-10 object-cover md:w-[40%] w-[100%] rounded-lg" src={Yayasan} alt="" />
                </div>
            </section>
            <section className="relative w-[100vw] p-[5%] text-left flex flex-col items-start gap-10">
                <h1 className='md:text-[50px] text-[20px] text-base'>الرسالة والأهداف</h1>
                <div className='flex md:flex-row flex-col justify-between items-center w-[100%] h-[60%] gap-5'>
                    <Image placeholder="blur" className="-z-10 object-cover md:w-[40%] w-[100%] rounded-lg" src={Yayasan} alt="" />
                    <div className='md:text-2xl text-right '>
                        <h1>:للمؤسسة الرسالة والأهداف الخاصة في المجالات</h1>
                        <h1>أ‌.  الخيرية</h1>
                        <h1>ب‌.  الدينية</h1>
                    </div>
                </div>
            </section>
            <section className="relative w-[100vw] p-[5%] text-right flex flex-col items-end gap-10">
                <h1 className='md:text-[50px] text-[20px] text-base'>النشاطات</h1>
                <div className='flex md:flex-row flex-col-reverse justify-between items-center w-[100%] h-[60%] gap-5'>
                    <div className=' font-light'>
                        <h1>من أجل تحقيق الرسالة والأهداف المذكورة أعلاه فإن المؤسسة سوف تقوم بتنفيذ النشاطات والأعمال التالية</h1>
                        <h1 className='text-base text-lg'>أ‌.  مجال الخيرية</h1>
                        <ul className='text-right'>
                            <li>١. إنشاء وإدارة المؤسسات التربوية والتعليمية الرسمية وغير الرسمية لجميع مراحلها من روضة الأطفال والمدرسة الابتدائية والمدرسة المتوسطة والمدرسة الثانوية والتعليم العالي سواء بصفتها العامة أو بصفتها الخاصة وكذلك بعمل التعاون مع المؤسسات التربوية والعليمية الأخرى رسميا كانت أو غير رسميا في جميع أنحاء ومناطق إندونيسيا أو في دول الخارجية</li>
                            <li>٢. إنشاء وإدارة دار الأيتام</li>
                            <li>٣. القيام بإشراف الرياضة</li>
                            <li>٤. القيام بالبحوث والدراسات العلمية والإعلام ونشر الكتب المتعلقة بها</li>
                            <li>٥. القيام بالدراسة المقارنة</li>
                        </ul>
                        <h1 className='text-base text-lg'>ب‌.  مجال الدينية</h1>
                        <ul>
                            <li>١. بناء المساجد والمصلايات</li>
                            <li>٢. إنشاء وإدارة تعليم القرآن والسنة بالمعاهد والمدارس الإسلامية وروضة الأطفال</li>
                            <li>٣. جمع وتوزيع الزكاة والصدقات والتبرعات والسلة الغذائية والأضحية</li>
                            <li>٤. رفع مستوى الفهم الديني عن طريق الدعوة وإقامة الدورات التدريبية والشرعية على منهج القرآن والسنة</li>
                            <li>٥. القيام بدراسة مقارنة الدينية</li>
                        </ul>
                    </div>
                    <Image placeholder="blur" className="-z-10 object-cover md:w-[40%] w-[100%] rounded-lg" src={Yayasan} alt="" />
                </div>
            </section>
        </div>
    )
}
