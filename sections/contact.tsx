import ContactCard from "@/components/card/contact";
import Heading from "@/components/heading/heading";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import SelectInput from "@/components/ui/select-input";
import TextArea from "@/components/ui/text-area";
import emailjs  from "@emailjs/browser";
import React, { FormEvent, useRef, useState } from "react";
import { BiError } from "react-icons/bi";
import { FaPhoneVolume, FaProjectDiagram, FaUser } from "react-icons/fa";
import { MdEmail, MdSubject } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";

export default function ContactSection() {

  const formRef = useRef<HTMLFormElement>(null)
const btnRef = useRef<HTMLButtonElement>(null)
  const [services, setServices] = useState<string[]>([])
  const [budgets, setBudgets] = useState<string[]>([])
  
  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    emailjs.sendForm(
      "service_os9lvrh",
      "template_09emu19",
      formRef.current!,
      "sK8ewAa9v9qwRZNPB",
    
    ).then((res) => {
      console.log(res.text)
      console.log("emai send succefully")
    }, (error) => {
      console.log(error.text)
    }
    )
  }

  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title_1="Contact" title_2="Me" />
      <Card>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3  ">
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Call Me directly"
              icon={<FaPhoneVolume className="fill-[#333] text-lg " />}
              text="0938301620"
              btnText="call Me"
            />
            <ContactCard
              title="chat with us"
              icon={<MdEmail className="fill-[#333] text-lg " />}
              text="mam1620she@gmail.com"
              btnText="call Me"
            />
          </div>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="lg:col-span-2 bg-secondary-background border border-border rounded-lg space-y-6 relative overflow-hidden py-5 px-[25px] shadow-md "
          >
            <div className=" flex flex-col lg:flex-row items-center justify-between mb-4 gap-8">
              <Input
                name="name"
                type="text"
                placeholder="full name"
                icon={<FaUser className="" />}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                icon={<MdEmail className="" />}
              />
            </div>
            <div className=" flex items-center justify-between mb-4 gap-8">
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                icon={<MdSubject className="" />}
              />
            </div>
            {/* multiple select wrapper */}

            <div className=" flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">
                  what services are you need for?
                </h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8 ">
                  {serviceOptions.map((serv) => (
                    <SelectInput
                      key={serv.id}
                      type="checkbox"
                      id={serv.id}
                      text={serv.text}
                      selectedOptions={services}
                      setselectedOptions={setServices}
                      allowedMultiple
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* multiple select wrapper */}

            <div className=" flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="font-bold text-lg">what is your budget?</h1>
                <div className="flex flex-wrap items-center justify-between mb-4 gap-8 ">
                  {budgetOptions.map((budget) => (
                    <SelectInput
                      key={budget.id}
                      type="radio"
                      id={budget.id}
                      text={budget.text}
                      selectedOptions={budgets}
                      setselectedOptions={setBudgets}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* text area */}
            <div>
              <TextArea
                name="message"
                placeholder="tell us about your project"
                icon={<FaProjectDiagram />}
              />
            </div>
            <div className="w-full flex justify-end">
              <div onClick={() => btnRef.current?.click() }>
                <Button className="!w-44 py-3 !text-xl ">
                  Send <SiMinutemailer />
                </Button>
              </div>

              <div className="hidden">
                <input
                  type="text"
                  value={services.join(", ")}
                  name="services"
                />
                <input type="text" value={budgets.join(", ")} name="budgets" />
              </div>
              <button type="submit" hidden ref={btnRef}>
              
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

const serviceOptions = [
  {
    id: "Web Design",
    text: "Web Design",
  },
  {
    id: "Web Development",
    text: "Web Development",
  },
  {
    id: "Full website",
    text: "Full Website",
  },
  {
    id: "SEO",
    text: "SEO",
  },
  {
    id: "API integration",
    text: "API integration",
  },
  {
    id: "Testing",
    text: "Testing",
  },
];

const budgetOptions = [
  {
    id: "less than $100",
    text: " < $100",
  },
  {
    id: "between $100 and $500",
    text: "$100 - $500",
  },
  {
    id: "between $500 and $1000",
    text: "$500 - $1000",
  },
  {
    id: "more than $1000",
    text: "> $1000",
  },
];
