import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery

function MyComponent() {
    useEffect(() => {
        // Shrink header on scroll
        const shrinkHeader = 100;
        $(window).scroll(function () {
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('.header').addClass('shrink');
            } else {
                $('.header').removeClass('shrink');
            }
        });

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }

        // Dealer login Modal
        $('#submitButton').click(function () {
            const phoneNumber = $('#dealerMobNumber').val();
            if (validateMobileNumber(phoneNumber)) {
                $('#validationMessage').text('');
                $('.form__group').hide();
                $('#submitButton').hide();
                $('.send-otp-section').show();
            } else {
                $('#validationMessage').text('Mobile number should be exactly 10 digits');
            }
        });

        $('#verifyOtpButton').click(function () {
            const otp = $('#otpInput').val();
            if (otp === '1234') {
                alert('OTP verified successfully!');
            } else {
                alert('Invalid OTP. Please try again.');
            }
        });

        // User Login Modal
        $('#LoginSubmitButton').click(function () {
            const email = $('#userEmail').val();
            const password = $('#userPass').val();
            $('#emailError').text('');
            $('#passwordError').text('');

            if (!validateEmail(email)) {
                $('#emailError').text('Please enter a valid email address.');
                return;
            }

            if (password.length < 6) {
                $('#passwordError').text('Password must be at least 6 characters long.');
                return;
            }
            alert('Form submitted successfully!');
        });

        // Toggle password visibility
        $('.togglePassword').click(function () {
            const passwordInput = $('#userPass');
            const type = passwordInput.attr('type') === 'password' ? 'text' : 'password';
            passwordInput.attr('type', type);
            $(this).text(type === 'password' ? 'Show Password' : 'Hide Password');
        });

        // Function to validate email
        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
        $(function () {
            $("#slider-range").slider({
                range: true,
                min: 50000,
                max: 7000000,
                values: [50000, 7000000],
                slide: function (event, ui) {
                    $("#amount").val("₹" + ui.values[0] + " - ₹" + ui.values[1]);
                }
            });
            $("#amount").val("₹" + $("#slider-range").slider("values", 0) +
                " - ₹" + $("#slider-range").slider("values", 1));
        });
        // Function to validate mobile number
        function validateMobileNumber(number) {
            const regex = /^\d{10}$/;
            return regex.test(number);
        }

        // Close modal on click
        $('.close').click(function () {
            $('.modal').modal('hide');
        });

        // Cleanup function
        return () => {
            // Remove event listeners or perform cleanup if necessary
        };
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            {/* Your JSX content */}
        </div>
    );
}

export default MyComponent;


