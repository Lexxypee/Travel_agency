// JavaScript for interactive elements

document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.maxHeight = '0';
                ans.previousElementSibling.classList.remove('active');
                ans.previousElementSibling.style.fontWeight = 'normal';
            });
             document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.style.fontWeight = 'normal';
                q.style.setProperty('--after-content', "'+'");
            });


            if (!isActive) {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.style.fontWeight = 'bold';
                question.style.setProperty('--after-content', "'-'");
            }
        });
    });
});
