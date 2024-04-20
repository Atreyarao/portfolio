import React from "react";

function Counter() {
  return (
    <>
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
       var sc_project=12991555; 
       var sc_invisible=1; 
       var sc_security="b826303c"; 
      `,
        }}
      />

      <script
        type="text/javascript"
        src="https://www.statcounter.com/counter/counter.js"
        async
      ></script>
      <noscript>
        <div class="statcounter">
          <a
            title="Web Analytics Made Easy - Statcounter"
            href="https://statcounter.com/"
            target="_blank"
          >
            <img
              class="statcounter"
              src="https://c.statcounter.com/12991555/0/b826303c/1/"
              alt="Web Analytics Made Easy - Statcounter"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </noscript>
    </>
  );
}

export default Counter;
