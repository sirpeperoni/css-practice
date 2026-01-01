import { Collapsible } from "./Collapsible"

const collapsibles = [
    {
        headerText: "Consultation",
        textContent: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        headerText: "Research and Strategy Development",
        textContent: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        headerText: "Implementation",
        textContent: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        headerText: "Monitoring and Optimization",
        textContent: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        headerText: "Reporting and Communication",
        textContent: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        headerText: "Continual Improvement",
        textContent: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
]


export const CollapsibleList = () => {
    return(
        <div className="collapsible_list">
            {
                collapsibles.map((item, index) => (
                    <Collapsible headerText={item.headerText} textContent={item.textContent} index={index+1}/>
                ))    
            }
        </div>
    )
}