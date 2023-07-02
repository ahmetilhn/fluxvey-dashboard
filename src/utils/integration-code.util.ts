export const getIntegrationCode = (id: string): string => {
  return `<!-- Fluxvey (www.fluxvey.com)  integration code 🧸 -->
    <script type="text/javascript">
      (function() {
        var fvContainer = document.createElement("div")
        fvContainer.setAttribute("id", "fluxvey_root_div")
        document.body.appendChild(fvContainer);
        var fv = document.createElement('script');
        fv.setAttribute("id", "fluxvey_script")
        fv.src = 'https://unpkg.com/fluxvey-widgets@latest/dist/bundle.js?survey_id=${id}';
        fv.async = true;
        var e = document.getElementsByTagName('script')[0];
        e.parentNode.insertBefore(fv, e);
      })();
    </script>
<!-- End -->`;
};
