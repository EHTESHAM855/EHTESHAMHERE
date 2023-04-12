const toggleButtons = document.querySelectorAll('.show-hide-btn');
        let currentSectionId = null;
        toggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const sectionId = button.dataset.section;
                const section = document.getElementById(sectionId);
                if (currentSectionId === sectionId) {
                    section.style.display = 'none';
                    currentSectionId = null;
                } else {
                    if (currentSectionId !== null) {
                        const currentSection = document.getElementById(currentSectionId);
                        currentSection.style.display = 'none';
                    }
                    section.style.display = 'flex'; // or any other display property you want
                    section.scrollIntoView({ behavior: 'smooth' });
                    currentSectionId = sectionId;
                }
            });
        });