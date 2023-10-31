import React from 'react'
import './why-choose-us.css'
import whychoose from '../../../assets/images/why-choose.png'
import SectionTitle from '../../../assets/generic/SectionTitle'

function WhyChooseUs() {
    const whyArray = [ 
        {
        id : '1',
        span : "Process Excellence",
        paragraph : "Lorem ipsum dolor sit amet consectetur.",
        icon: "fa-regular fa-thumbs-up"
        },
        {
        id : '2',
        span : "Strategic Planning",
        paragraph : "Lorem ipsum dolor sit amet consectetur.",
        icon: "fa-sharp fa-light fa-diamond-half-stroke"
        },
        {
        id : '3',
        span : "Experience Design",
        paragraph : "Lorem ipsum dolor sit amet consectetur.",
        icon: "fa-regular fa-pen-nib"
        },
        {
        id : '4',
        span : "Artificial Intelligence",
        paragraph : "Lorem ipsum dolor sit amet consectetur.",
        icon: "fa-sharp fa-light fa-head-side-brain"
        },      
    ]
    return (
        <article className="why-choose-us">
            <div className='section-title'>
                <div className="flex-box">
                <p>Why Choose Us</p>
                <h3>Why We Are The Best Business Consulting Agency</h3>
                    <div className="why" >
                        {whyArray.map((localpar) => 
                            <div className="flex-why" key={localpar.id}>
                            <i className="fa-regular fa-thumbs-up"></i>
                            <p><span>{localpar.span}</span><br />Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        )}
                    </div>
                </div>
                <img src={whychoose} alt="Two women talking in an office environment" />
                <div className="bg-box"></div>
            </div>
        </article>
    )
}


export default WhyChooseUs