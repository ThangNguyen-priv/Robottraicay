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
    var btns = document.querySelectorAll("[id^='sizeGuideLink']"); // Chọn tất cả các phần tử có id bắt đầu bằng 'sizeGuideLink'
    var span = document.getElementsByClassName("close")[0];
    var iframe = document.getElementById("sizeGuideIframe");

    // Khi nhấp vào liên kết
    btns.forEach(btn => {
        btn.onclick = function (event) {
            event.preventDefault();
            modal.style.display = "block";
            iframe.src = "chonsize.html";
            document.body.style.overflow = "hidden"; // Tắt cuộn chuột
        };
    });

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


// thay đổi ảnh khi chọn ảnh nhỏ trong gallery của shop details
document.addEventListener("DOMContentLoaded", function () {
  const thumbnails = document.querySelectorAll(".image-gallery img");
  const mainImage = document.querySelector(".main-image");

  // Đặt ảnh đầu tiên trong gallery làm ảnh chính khi tải trang
  if (thumbnails.length > 0) {
      mainImage.src = thumbnails[0].getAttribute('src');
  }

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener("click", function () {
          const imageSrc = this.getAttribute('src');
          console.log("Đường dẫn của ảnh:", imageSrc); // Kiểm tra xem đường dẫn ảnh có xuất hiện trong console không

          // Tạo hiệu ứng mờ dần để hình ảnh thay đổi mượt mà hơn
          mainImage.style.opacity = 0;
          setTimeout(() => {
              mainImage.src = imageSrc;
              mainImage.classList.remove("fade-out");
              mainImage.style.opacity = 1;
          }, 400); // Thời gian hiệu ứng mờ dần (400ms)
      });
  });
});

//chọn lấy kích cỡ của sản phẩm
document.addEventListener("DOMContentLoaded", function() {
  const sizeOptions = document.querySelectorAll(".size-option");

  sizeOptions.forEach(option => {
      option.addEventListener("click", function() {
          // Xóa lớp 'active' từ tất cả các nút
          sizeOptions.forEach(opt => opt.classList.remove("active"));

          // Thêm lớp 'active' vào nút hiện tại
          this.classList.add("active");

          // Lấy giá trị của nút hiện tại
          const sizeValue = this.textContent;
          console.log("Giá trị kích cỡ đã chọn:", sizeValue);

          // Bạn có thể thực hiện các hành động khác với giá trị này nếu cần
      });
  });
});

//lựa chọn hình thức thanh toán
document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.payment-option');
  const paymentTabs = document.querySelectorAll('.tab-pane');

  buttons.forEach(button => {
      button.addEventListener('click', function() {
          buttons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');

          const option = this.getAttribute('data-option');
          paymentTabs.forEach(tab => tab.classList.remove('active', 'show'));
          document.getElementById(option).classList.add('active', 'show');
      });
  });
});
// zoom ảnh theo chuột ở details sản phẩm
document.addEventListener("DOMContentLoaded", function () {
  const mainImageContainer = document.querySelector(".main-image-container");
  const mainImage = document.querySelector(".main-image");

  mainImageContainer.addEventListener("mousemove", (e) => {
      const rect = mainImageContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      // Cập nhật điểm gốc zoom và phóng to ảnh
      mainImage.style.transformOrigin = `${x}% ${y}%`;
      mainImage.style.transform = "scale(2)"; // Phóng to ảnh
  });

  mainImageContainer.addEventListener("mouseleave", () => {
      // Trả về trạng thái ban đầu
      mainImage.style.transformOrigin = "center center";
      mainImage.style.transform = "scale(1)";
  });
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
