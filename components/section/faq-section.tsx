import { SectionWrapper } from "../shared/section-wrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export const FaqSection = () => {
    return (
        <SectionWrapper>
            <div className="space-y-[110px] py-[110px]">
                <h2 className="heading-1 leading-tight tracking-tight text-balance uppercase">
                    FREQUENTLY ASKED QUESTIONS (FAQs)
                </h2>

                {/* <div></div> */}
                <FAQs />
            </div>
        </SectionWrapper>
    );
};

const faqData = [
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: " Vulputate amet aliquet morbi suspendisse convallis",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Urna a urna lectus donec felis risus duis pellentesque.",
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer: "Pellentesque ultricies ipsum dolor sit amet constructor.",
    },
];

function FAQs() {
    return (
        <Accordion type="single" collapsible className=" border-t ">
            {faqData.map((faq, idx) => (
                <AccordionItem key={idx} value={faq.answer} className="px-10 py-8">
                    <AccordionTrigger className="text-base font-semibold font-subheading">
                        {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-subheading">{faq.answer}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
