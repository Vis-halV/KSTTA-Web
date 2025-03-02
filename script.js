const faqData = [
    {
        question: "Who can join the academy?",
        answer: "Anyone passionate about table tennis can join! We have structured programs for school students, university athletes, and advanced players looking for professional training."
    },
    {
        question: "What are the training timings?",
        answer: "Training sessions are scheduled in flexible slots between morning and evening. Specific batch timings depend on the membership plan you choose."
    },
    {
        question: "Do I need to bring my own equipment?",
        answer: "Beginners can use academy-provided rackets, but advanced players are encouraged to have their own professional-grade equipment for better performance."
    },
    {
        question: "Do you provide one-on-one coaching?",
        answer: "Yes! One-on-one coaching is available under the Custom Membership Plan, where players receive personalized guidance and advanced training."
    },
    {
        question: "Do you offer special coaching for differently-abled players?",
        answer: "Yes, we have a dedicated customized training program designed for differently-abled athletes, focusing on technique, adaptability, and competition readiness."
    },
    {
        question: "Is there a refund policy if I decide to cancel?",
        answer: "Yes, we offer a refund within the first week of enrollment. If you are not satisfied with the training, you can request a refund within seven days of joining."
    },
];

const faqsContainer = document.getElementById('faqs');

faqData.map((item) => {

    let faqItem = document.createElement('article');
    faqItem.classList.add('faq-item');

    let markup = `
        <div class="question-container">
            <div class="item-question">
                <span class="question-text">${item.question}</span>
                <span class="arrows-container">
                    <span class="expand"><i class="fa-solid fa-caret-down"></i></span>
                    <span class="close"><i class="fa-solid fa-caret-up"></i></span>
                </span>
            </div>
            <div class="item-answer">
                <span>${item.answer}</span>
            </div>
        </div>
    `;
    
    faqItem.innerHTML = markup;
    faqsContainer.append(faqItem);
});

const toggleButtons = document.querySelectorAll('.arrows-container');
    
toggleButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        const faqItem = e.currentTarget.parentElement.parentElement;
        faqItem.classList.toggle("show-answer");
    });
});