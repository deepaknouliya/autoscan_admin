// form Accordion 
document.addEventListener("DOMContentLoaded", function () {
    const nextButtons = document.querySelectorAll(".next-step");
    const prevButtons = document.querySelectorAll(".prev-step");

    nextButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const currentStep = button.closest('.accordion-item').querySelector('form');
            if (currentStep.checkValidity()) {
                const nextStep = button.getAttribute("data-bs-target");
                const accordion = new bootstrap.Collapse(document.querySelector(nextStep));
                accordion.show();
            } else {
                currentStep.reportValidity();
            }
        });
    });

    prevButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const target = button.getAttribute("data-bs-target");
            if (target) {
                const accordion = new bootstrap.Collapse(document.querySelector(target));
                accordion.show();
            }
        });
    });
});

// form Accordion 

document.addEventListener("DOMContentLoaded", function () {
    var selYear = document.getElementById("SelYear");
    var brandNameField = document.querySelector("#collapseStep2 #BrandName").parentNode;
    var carVariantField = document.querySelector("#collapseStep2 #CarVariant").parentNode;
    var manufacturingYearField = document.querySelector("#collapseStep2 #ManufacturingYear").parentNode;
    var rtoCityField = document.querySelector("#collapseStep2 #RtoCity").parentNode;
    var kmRunningField = document.querySelector("#collapseStep2 #KmRunning").parentNode;
    var ownershipFields = document.querySelector("#collapseStep2 .ownership-Fields");
    var nextStepButton = document.querySelector("[data-bs-target='#collapseStep3']");

    // Hide all fields except the first one initially
    brandNameField.style.display = "none";
    carVariantField.style.display = "none";
    manufacturingYearField.style.display = "none";
    rtoCityField.style.display = "none";
    kmRunningField.style.display = "none";
    ownershipFields.style.display = "none";

    // Function to check if all required fields are filled
    function allFieldsFilled() {
        return selYear.value && BrandName.value && CarVariant.value && ManufacturingYear.value && RtoCity.value && KmRunning.value;
    }

    // Add event listener to the "SelYear" select
    selYear.addEventListener("change", function () {
        if (selYear.value) {
            brandNameField.style.display = "block";
        } else {
            brandNameField.style.display = "none";
        }
    });

    // Add event listener to the "BrandName" select
    BrandName.addEventListener("change", function () {
        if (BrandName.value) {
            carVariantField.style.display = "block";
        } else {
            carVariantField.style.display = "none";
        }
    });

    // Add event listener to the "CarVariant" select
    CarVariant.addEventListener("change", function () {
        if (CarVariant.value) {
            manufacturingYearField.style.display = "block";
        } else {
            manufacturingYearField.style.display = "none";
        }
    });

    // Add event listener to the "ManufacturingYear" input
    ManufacturingYear.addEventListener("input", function () {
        if (ManufacturingYear.value) {
            rtoCityField.style.display = "block";
        } else {
            rtoCityField.style.display = "none";
        }
    });

    // Add event listener to the "RtoCity" select
    RtoCity.addEventListener("change", function () {
        if (RtoCity.value) {
            kmRunningField.style.display = "block";
        } else {
            kmRunningField.style.display = "none";
        }
    });

    // Add event listener to the "KmRunning" input
    KmRunning.addEventListener("input", function () {
        if (KmRunning.value && allFieldsFilled()) {
            ownershipFields.style.display = "flex";
        } else {
            ownershipFields.style.display = "none";
        }
    });

    // Add event listener to the next step button
    nextStepButton.addEventListener("click", function () {
        // Add your validation logic here if needed
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var citySelect = document.getElementById("SelCity");
    var pincodeField = document.querySelector(".form__group.pincode");

    // Hide pincode field initially
    pincodeField.style.display = "none";

    // Add event listener to city select
    citySelect.addEventListener("change", function () {
        var selectedCity = citySelect.value;

        // Check if a city is selected
        if (selectedCity) {
            pincodeField.style.display = "block"; // Show pincode field
        } else {
            pincodeField.style.display = "none"; // Hide pincode field
        }
    });
});



// Form Multiple Images 
function previewImages(event) {
    var input = event.target;
    var previewsContainer = input.parentNode.querySelector('.preview');

    while (previewsContainer.firstChild) {
        previewsContainer.removeChild(previewsContainer.firstChild); // Clear previous previews
    }

    if (input.files) {
        var files = Array.from(input.files);

        files.forEach(function (file) {
            var reader = new FileReader();

            reader.onload = function (e) {
                var image = document.createElement('img');
                image.src = e.target.result;
                image.style.maxWidth = '100%';
                previewsContainer.appendChild(image);
            };

            reader.readAsDataURL(file);
        });
    }
}

// Form Multiple Images 

