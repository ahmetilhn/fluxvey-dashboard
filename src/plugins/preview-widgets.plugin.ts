export const initPreviewWidget = (id?: string) => {
  (function () {
    // Create react container div
    // var fvContainer = document.createElement("div");
    // fvContainer.setAttribute("id", "fluxvey_root_div");
    // document.body.appendChild(fvContainer);
    // Create script tag
    var fv = document.createElement("script");
    fv.setAttribute("id", "fluxvey_script");
    fv.src = `https://unpkg.com/fluxvey-widgets@latest/dist/bundle.js?survey_id=${
      !!id ? id : "64a03d6e51fa675a2ba6a1c4"
    }&is_preview_mode=true`;
    fv.async = true;
    var e = document.getElementsByTagName("script")[0];
    if (e) {
      e.parentNode?.insertBefore(fv, e);
    }
  })();
};
