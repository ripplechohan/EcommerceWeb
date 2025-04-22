$(document).ready(function () {
  // Smooth scrolling for anchor links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Close mobile menu when clicking a menu item
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });
  
  // Product hover effect
  $(".best-p1").hover(
    function() {
      $(this).find("img").css({
        "transform": "scale(1.05)",
        "transition": "transform 0.5s ease"
      });
    },
    function() {
      $(this).find("img").css({
        "transform": "scale(1)",
        "transition": "transform 0.5s ease"
      });
    }
  );
  
  // Newsletter subscription form
  $(".f-mail .bx").click(function() {
    const email = $(this).siblings("input[type=email]").val();
    if (validateEmail(email)) {
      alert("Thank you for subscribing to our newsletter!");
      $(this).siblings("input[type=email]").val("");
    } else {
      alert("Please enter a valid email address.");
    }
  });
  
  // Helper function to validate email
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
  // Contact form submission
  $(".form-details button").click(function(e) {
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();
    
    if (!name || !email || !message) {
      alert("Please fill out all fields in the contact form.");
      e.preventDefault();
    } else if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    } else {
      // In a real application, this would submit to a server
      alert("Thank you for your message! We will get back to you soon.");
    }
  });
  
  // Vendor filtering (example functionality)
  $("#vendors-filter").change(function() {
    const selectedCategory = $(this).val();
    if (selectedCategory === "all") {
      $(".best-p1").show();
    } else {
      $(".best-p1").hide();
      $(`.best-p1[data-category="${selectedCategory}"]`).show();
    }
  });
  
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  
  $('#back-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
  });
  
  // Featured products carousel (would require additional HTML markup)
  if ($('.product-carousel').length) {
    $('.product-carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
});