/* eslint-disable no-console */

import { register } from "register-service-worker";

  register(`${process.env.BASE_URL}service-worker.js`, {
    registrationOptions: {
      scope: './'
    },
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
        "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
      $.confirm({
        theme: "supervan", // 'material', 'bootstrap'
        title: "새 버젼 릴리즈",
        content: "업데이트를 진행하시겠습니까?",
        buttons: {
          confirm: {
            text: '네',
            btnClass: 'btn-blue',
            keys: ['enter', 'shift'],
            action: function() {
              location.reload(true);
            }
          },
          cancel: {
            text: '아니오',
            keys: ['enter', 'shift'],
            action: function() {
              //ignoe
            }
          }
        }
      });
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    }
  });

