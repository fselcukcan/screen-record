navigator.mediaDevices.enumerateDevices()
  .then(function (devices) {
    devices.forEach(function (device) {
      let menu = document.getElementById("inputdevices");
      if (device.kind == "videoinput") {
        let item = document.createElement("option");
        item.innerText = device.label;
        item.value = device.deviceId;
        menu.appendChild(item);
      }
    });
  });
