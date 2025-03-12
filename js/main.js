(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  // Fixed Navbar
  $(window).scroll(function () {
    if ($(window).width() < 992) {
      if ($(this).scrollTop() > 55) {
        $(".fixed-top").addClass("shadow");
      } else {
        $(".fixed-top").removeClass("shadow");
      }
    } else {
      if ($(this).scrollTop() > 55) {
        $(".fixed-top").addClass("shadow").css("top", -55);
      } else {
        $(".fixed-top").removeClass("shadow").css("top", 0);
      }
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  });

  // vegetable carousel
  $(".vegetable-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Modal Video
  $(document).ready(function () {
    var $videoSrc;
    $(".btn-play").click(function () {
      $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);

    $("#videoModal").on("shown.bs.modal", function (e) {
      $("#video").attr(
        "src",
        $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
      );
    });

    $("#videoModal").on("hide.bs.modal", function (e) {
      $("#video").attr("src", $videoSrc);
    });
  });

  //hướng dẫn chọn size khi ấn vào link footer
  // script.js
  document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("sizeGuideModal");
    var btn = document.getElementById("sizeGuideLink");
    var span = document.getElementsByClassName("close")[0];
    var iframe = document.getElementById("sizeGuideIframe");

    // Khi nhấp vào liên kết
    btn.onclick = function (event) {
      event.preventDefault();
      modal.style.display = "block";
      iframe.src = "chonsize.html";
      document.body.style.overflow = "hidden"; // Tắt cuộn chuột
    };

    // Khi nhấp vào nút đóng
    span.onclick = function () {
      modal.style.display = "none";
      document.body.style.overflow = ""; // Bật lại cuộn chuột
    };

    // Khi nhấp ngoài modal
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = ""; // Bật lại cuộn chuột
      }
    };
  });

// chat bot
// Hiển thị/ẩn cửa sổ chat khi người dùng nhấn vào nút gọi hỗ trợ
document.getElementById("chatbot-button").addEventListener("click", function () {
  var chatWindow = document.getElementById("chatbot-window");
  if (chatWindow.hasAttribute("hidden")) {
    chatWindow.removeAttribute("hidden"); // Hiển thị cửa sổ chat
  } else {
    chatWindow.setAttribute("hidden", true); // Ẩn cửa sổ chat
  }
});

// Sự kiện khi nhấn vào nút "X" để đóng cửa sổ chat
document.getElementById("close-chat").addEventListener("click", function () {
  var chatWindow = document.getElementById("chatbot-window");
  chatWindow.setAttribute("hidden", true); // Ẩn cửa sổ chat
});

// Sự kiện khi ấn ra ngoài để đóng cửa sổ chat
document.addEventListener("click", function (event) {
  var chatWindow = document.getElementById("chatbot-window");
  var chatButton = document.getElementById("chatbot-button");
  if (!chatWindow.contains(event.target) && !chatButton.contains(event.target)) {
    chatWindow.setAttribute("hidden", true); // Ẩn cửa sổ chat
  }
});

// Sự kiện khi gửi tin nhắn
function sendMessage() {
  var input = document.getElementById("chat-input");
  var messages = document.getElementById("chat-messages");

  if (input.value.trim() === "") {
    showAlert("Tin nhắn không được để trống."); // Hiển thị thông báo tùy chỉnh
  } else {
    var userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.innerHTML = `<p><strong>User:</strong></p><p>${input.value}</p>`;
    messages.appendChild(userMessage);
    input.value = "";

    // Tự động phản hồi tin nhắn từ bot
    setTimeout(function() {
      var botMessage = document.createElement("div");
      botMessage.classList.add("message", "bot-message");
      botMessage.innerHTML = `<img src="img/chatbot.png" class="avatar" alt="Bot Avatar"><div><p><strong>Bot:</strong></p><p>Tin nhắn phản hồi từ bot.</p></div>`;
      messages.appendChild(botMessage);
      messages.scrollTop = messages.scrollHeight; // Cuộn xuống dưới cùng để hiển thị tin nhắn mới
    }, 1000);
  }

  messages.scrollTop = messages.scrollHeight; // Cuộn xuống dưới cùng để hiển thị tin nhắn mới
}

// Hiển thị thông báo tùy chỉnh
function showAlert(message) {
  var alertBox = document.getElementById("custom-alert");
  var alertMessage = document.getElementById("alert-message");
  alertMessage.textContent = message;
  alertBox.classList.remove("hidden");

  // Tự động ẩn thông báo sau 3 giây
  setTimeout(function () {
    alertBox.classList.add("hidden");
  }, 3000);
}

// Đóng thông báo khi nhấn vào nút đóng
document.getElementById("close-alert").addEventListener("click", function (event) {
  event.stopPropagation(); // Ngăn chặn sự kiện lan truyền đến document
  document.getElementById("custom-alert").classList.add("hidden");
});

// Gửi tin nhắn khi nhấn vào nút gửi
document.getElementById("send-message").addEventListener("click", function () {
  sendMessage();
});

// Gửi tin nhắn khi nhấn phím Enter
document.getElementById("chat-input").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});


  // Product Quantity
  $(".quantity button").on("click", function () {
    var button = $(this);
    var oldValue = button.parent().parent().find("input").val();
    if (button.hasClass("btn-plus")) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    button.parent().parent().find("input").val(newVal);
  });
})(jQuery);
