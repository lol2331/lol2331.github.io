document.addEventListener('DOMContentLoaded', function () {
    const patientListItems = document.querySelectorAll('.patient');

    patientListItems.forEach(function (patientListItem) {
        patientListItem.addEventListener('click', function () {
            const patientName = this.dataset.name;
            const patientPhotoSrc = `patients/${patientName.toLowerCase().replace(/\s/g, '-')}.jpg`;
            const patientDescription = `Details about ${patientName}.`;

            const patientPhoto = document.querySelector('.patient-photo');
            patientPhoto.src = patientPhotoSrc;

            const patientNameElement = document.querySelector('.patient-name');
            patientNameElement.textContent = patientName;

            const patientDescriptionElement = document.querySelector('.patient-description');
            patientDescriptionElement.textContent = patientDescription;
        });
    });
});
