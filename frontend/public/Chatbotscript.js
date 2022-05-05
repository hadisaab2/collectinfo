var hidden = true;

$(document).ready(function () {
  $("#myframe").attr("src", "https://chatbotmonty.herokuapp.com/");
});

function mobileWidth() {
  document.getElementById("myframe").style.height = "100%";
  document.getElementById("myframe").style.width = "100%";
}

function notMobileWidth() {
  document.getElementById("myframe").style.height = "490px";
  document.getElementById("myframe").style.width = "380px";
}

window.addEventListener("message", (evt) => {
  var iFrame = document.getElementById("myframe");
  if (evt.data == "hides") {
    document.getElementById("myframe").style.height = "95px";
    document.getElementById("myframe").style.width = "95px";
  } else {
    if ((evt.data = "shows")) {
        hidden = false;

        //console.log(document.documentElement.clientWidth)
      if (document.documentElement.clientWidth > 600) {
        iFrame.contentWindow.postMessage("notMobile", "https://chatbotmonty.herokuapp.com/");
        notMobileWidth();
      } else {
        iFrame.contentWindow.postMessage("Mobile", "https://chatbotmonty.herokuapp.com/");
        mobileWidth();
      }
    }
  }
});
/*
window.addEventListener("message", evt => {
    var iFrame = document.getElementById('myframe');
    if (evt.data === 'shows') {
        hidden = false;
        if (document.documentElement.clientWidth > 600) {
            iFrame.contentWindow.postMessage("notMobile", "http://localhost:3000/");
            notMobileWidth();
        } else {
            iFrame.contentWindow.postMessage("Mobile", "http://localhost:3000/");
            mobileWidth();
        }

    }
        else  if (evt.data === 'hides') {
            hidden = true;
            document.getElementById("myframe").style.height = "95px";
            document.getElementById("myframe").style.width = "95px";
        } 
    else if (evt.data === 'requestWidth') {
        if (document.documentElement.clientWidth > 600) {
            iFrame.contentWindow.postMessage("notMobile", "http://localhost:3000/");
        } else {
            iFrame.contentWindow.postMessage("Mobile", "http://localhost:3000/");
        }
    } else if (isJson(evt.data)) {
        let arr = JSON.parse((evt.data));
        if (arr.hasOwnProperty('navigate')) {
            window.location.href = arr['navigate'];
        }
    }
});

function isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}
*/
window.addEventListener("resize", function () {
    let iFrame = document.getElementById('myframe');
    console.log(document.documentElement.clientWidth)
    if (document.documentElement.clientWidth > 600) {
        if (!hidden) {
            iFrame.contentWindow.postMessage("notMobile", "https://chatbotmonty.herokuapp.com/");
            notMobileWidth();
        }
    } else {
        if (!hidden) {
            mobileWidth();
            iFrame.contentWindow.postMessage("Mobile", "https://chatbotmonty.herokuapp.com/");
        }
    }
}, true);

$(document).ready(function () {
  /*window.onload = function () {

        // setTimeout(function () {
        //     $('.preloader').fadeOut(500, function () {
        //         $('.preloader').remove();
        //     });
        // }, 650);
        if (document.documentElement.clientWidth < 600) {
            if (!hidden)
                mobileWidth();
        } else {

            if (!hidden)
                notMobileWidth();
        }
    };*/
  // $('<iframe src="http://support.b-pal.net/" id="myframe" style="display: block; border: none; position: fixed; width: 450px; height: 647px; max-height: 100%; opacity: 1; right: 0px; bottom: 0px; background: none transparent; margin: 0px; max-width: 100vw; transform: translateY(0px); transition: none 0s ease 0s; visibility: visible; z-index: 999999999 !important;"></iframe>').appendTo("body");

  $(
    '<iframe src="http://localhost:3000/" id="myframe" style="display: block; border: none; position: fixed; width: 100%; height: 100%; max-height: 100%; opacity: 1; right: 0; bottom: 0; background: none transparent; margin: 0; max-width: 100vw; transform: translateY(0px); transition: none 0s ease 0s; visibility: visible; z-index: 999999999 !important;"></iframe>'
  ).appendTo("body");
});
//background: none transparent;
