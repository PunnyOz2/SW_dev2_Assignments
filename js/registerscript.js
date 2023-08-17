document.addEventListener('DOMContentLoaded', function() {
    // const submitButton = document.getElementById('submitButton');
    // submitButton.addEventListener('click', verifyForm);
});
function verifyForm() {
    const company = document.getElementById('company_name').value;
    const boothSize = document.getElementById('booth_size').value;
    const chairCount = document.getElementById('chair_count').value;
    const contactName = document.getElementById('contact_name').value;
    const contactNumber = document.getElementById('contact_number').value;

    if (company === '' || contactName === '' || contactNumber === '') {
        alert('Please fill in all fields.');
        return;
    }
    if (boothSize === '') {
        alert('Please select a booth size.');
        return;
    }
    if (parseInt(chairCount) <= 0 || parseInt(chairCount) > 10) {
        alert('Please select a valid number of chairs.');
        return;
    }
    // document.getElementById('myForm').submit();
}