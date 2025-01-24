document.addEventListener('DOMContentLoaded', function() {
const timelineData = [
    {
        date: 'Apr 2018 - Oct 2024',
        title: 'Tech Support Specialist T1',
        description: 'At Quikcpivot I delivered 24/7 email marketing analytics support, improving response times and customer satisfaction.'
    },
    {
        date: 'Apr 2017 - Apr 2018',
        title: 'Technical Specialist',
        description: 'At Northeastern University I provided technical assistance to professors and program leaders.'
    },
    {
        date: 'Jan 2017 - Jul 2017',
        title: 'Application Specialist',
        description: 'Working at State Street Bank I was able to lead a team of 3 on various IT related projects around the office.'
    },
    {
        date: 'Jan 2017 - Jul 2017',
        title: 'Web Application Specialist',
        description: 'At Harvard University I assisted professors with online course management and technical issues.'
    }
];

    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        let entry = document.createElement('div');
        entry.classList.add('timeline-entry');
        entry.setAttribute('id', 'entry-' + index);

        let dot = document.createElement('div');
        dot.classList.add('timeline-dot');

        let date = document.createElement('div');
        date.textContent = item.date;
        date.classList.add('timeline-date');

        let content = document.createElement('div');
        content.classList.add('timeline-content');
        content.setAttribute('id', 'content-' + index);

        let title = document.createElement('h3');
        title.textContent = item.title;

        let description = document.createElement('p');
        description.textContent = item.description;
        description.style.display = 'none'; // Initially hide the description

        // Click event to toggle the description visibility
        entry.addEventListener('click', function() {
            description.style.display = description.style.display === 'none' ? 'block' : 'none';
        });

        content.appendChild(title);
        content.appendChild(description);

        entry.appendChild(dot);
        entry.appendChild(date);
        entry.appendChild(content);

        timeline.appendChild(entry);
    });
});
