let revealButton = document.getElementById("reveal-button");
let suggestion = document.getElementById("suggest-container");
let brandLogo = document.getElementById("placeholder-logo");
let label = document.getElementById("label");
let placeholder = document.getElementById("placeholder-logo");

let mtnLogo = document.getElementById("MTN");
let airtelLogo = document.getElementById("AIRTEL");
let nineMobileLogo = document.getElementById("NINEMOBILE");
let gloLogo = document.getElementById("GLO");
let brandLogos = document.querySelectorAll(".carrier-logo");

for (const scanThrough of brandLogos) {
  scanThrough.classList.add("hide-logo");
}

// const Logos = [
//     <svg width="61" height="61" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M.938.889h58.8v58.798H.938V.889Z" fill="#FFC325"/><path d="M1.828 30.288c0-6.14 12.763-11.12 28.506-11.12 15.744 0 28.506 4.98 28.506 11.12 0 6.141-12.762 11.119-28.506 11.119S1.828 36.429 1.828 30.288Z" fill="#006891"/><path d="M1.828 30.288c0-6.14 12.763-11.12 28.506-11.12 15.744 0 28.506 4.98 28.506 11.12 0 6.141-12.762 11.119-28.506 11.119S1.828 36.429 1.828 30.288Z" stroke="#006891" stroke-width="1.405" stroke-miterlimit="3.864"/><path fill-rule="evenodd" clip-rule="evenodd" d="m12.277 35.693 2.959-11.044h4.67v6.495h.03l3.168-6.495h4.744l-2.959 11.044h-3.083l1.896-7.084h-.03l-3.766 7.084h-2.47v-7.084h-.05l-1.896 7.084h-3.213Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="m28.684 35.911.42-1.57h3.403l-.42 1.57h-3.403Z" fill="#EE4034"/><path fill-rule="evenodd" clip-rule="evenodd" d="m29.22 33.9 1.721-6.42h-3.093l.759-2.831h9.59l-.759 2.83h-3.094l-1.72 6.42-3.404.002Z" fill="#FFC325"/><path fill-rule="evenodd" clip-rule="evenodd" d="m35.996 35.693 2.957-11.044h3.342l1.508 5.91h.03l1.582-5.91h3.09l-2.958 11.044h-3.18L40.73 29.66h-.03l-1.614 6.032h-3.09Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" transform="translate(.336 .288)" d="M0 0h60v60H0z"/></clipPath></defs></svg>
// ]

// Array of Logos for suggestions
// Index 0 is MTN // Index 1 is GLO // Index 2 is airtel
const Logos = [
  '<svg width="61" height="61" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M.938.889h58.8v58.798H.938V.889Z" fill="#FFC325"/><path d="M1.828 30.288c0-6.14 12.763-11.12 28.506-11.12 15.744 0 28.506 4.98 28.506 11.12 0 6.141-12.762 11.119-28.506 11.119S1.828 36.429 1.828 30.288Z" fill="#006891"/><path d="M1.828 30.288c0-6.14 12.763-11.12 28.506-11.12 15.744 0 28.506 4.98 28.506 11.12 0 6.141-12.762 11.119-28.506 11.119S1.828 36.429 1.828 30.288Z" stroke="#006891" stroke-width="1.405" stroke-miterlimit="3.864"/><path fill-rule="evenodd" clip-rule="evenodd" d="m12.277 35.693 2.959-11.044h4.67v6.495h.03l3.168-6.495h4.744l-2.959 11.044h-3.083l1.896-7.084h-.03l-3.766 7.084h-2.47v-7.084h-.05l-1.896 7.084h-3.213Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="m28.684 35.911.42-1.57h3.403l-.42 1.57h-3.403Z" fill="#EE4034"/><path fill-rule="evenodd" clip-rule="evenodd" d="m29.22 33.9 1.721-6.42h-3.093l.759-2.831h9.59l-.759 2.83h-3.094l-1.72 6.42-3.404.002Z" fill="#FFC325"/><path fill-rule="evenodd" clip-rule="evenodd" d="m35.996 35.693 2.957-11.044h3.342l1.508 5.91h.03l1.582-5.91h3.09l-2.958 11.044h-3.18L40.73 29.66h-.03l-1.614 6.032h-3.09Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" transform="translate(.336 .288)" d="M0 0h60v60H0z"/></clipPath></defs></svg>',
  '<svg width="61" height="61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.486 53.852c13.314 0 24.108-10.793 24.108-24.107 0-13.315-10.794-24.108-24.108-24.108S6.38 16.43 6.38 29.744c0 13.315 10.793 24.108 24.107 24.108Z" fill="#50B651"/><path opacity=".663" fill-rule="evenodd" clip-rule="evenodd" d="M54.52 29.677c0 13.356-10.828 24.183-24.18 24.183-13.354 0-24.184-10.827-24.184-24.183 0-5.909.166-6.787 2.491-10.15 0 0-.12 3.799 2.666 6.06 1.732 1.404 3.54.39 6.85-1.134 3.579-1.65 6.489-2.714 8.76-2.433 3.42.423 13.96 6.754 19.462 5.493 4.395-1.005 3.931-11.367 3.931-11.367 4.8 4.687 4.203 7.855 4.203 13.53Z" fill="url(#a)"/><path opacity=".586" fill-rule="evenodd" clip-rule="evenodd" d="M40.715 47.44c8.746-8.227 10.2-17.652 4.361-28.275.03.022.391-1.224 1.084-3.739 3.107 3.763 4.76 8.407 4.956 13.933-.001 7.158-3.468 13.185-10.401 18.08Z" fill="url(#b)"/><path opacity=".744" fill-rule="evenodd" clip-rule="evenodd" d="M36.565 15.476c-4.222-2.337-9.065-7.036-8.421-8.023.644-.987 9-.817 13.222 1.519 4.222 2.336 7.816 9.345 7.172 10.332-.643.987-7.752-1.492-11.973-3.828Z" fill="url(#c)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M40.244 35.681c-3.502 0-6.342-2.92-6.342-6.521 0-3.602 2.84-6.522 6.342-6.522s6.342 2.92 6.342 6.521c0 3.602-2.84 6.523-6.342 6.523Zm.045-2.068c2.185 0 3.96-1.994 3.96-4.453 0-2.46-1.775-4.452-3.96-4.452-2.186 0-3.96 1.994-3.96 4.453 0 2.458 1.774 4.452 3.96 4.452ZM27.16 17.387h4.57v18.222H29.22V19.385h-2.06v-1.998ZM23.752 22.823h2.372v15.218c0 1.386-1.458 2.83-2.88 3.452-.672.294-1.912.468-3.72.523v-1.514c1.768-.197 2.962-.59 3.58-1.18.358-.496.581-1.076.649-1.683v-4.47c-.634 1.344-1.433 2.236-2.395 2.675-1.001.54-3.038.45-3.87 0-.831-.452-2.051-1.64-2.61-3.41-.155-.487-.54-1.816-.5-3.225.036-1.34.48-2.76.849-3.343.633-.996 1.633-2.243 3.146-2.765.739-.255 2.109-.346 4.11-.274v1.505c-1.487-.1-2.415-.05-2.783.15-.553.3-1.8.67-2.212 3.39-.411 2.718.012 4.943 1.317 5.64.447.24 1.238.523 1.969.273 1.404-.48 2.725-2.192 2.826-3.352.101-1.177.152-3.713.152-7.61Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M53.76 34.517c-2.24 10.785-11.797 18.889-23.245 18.889-13.112 0-23.742-10.63-23.742-23.742 0-8.146 4.103-15.333 10.353-19.608-5.079 4.212-8.313 10.575-8.313 17.69 0 12.692 10.29 22.98 22.98 22.98 10.336 0 19.077-6.822 21.967-16.21Z" fill="url(#d)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30.515 1.548c-15.528 0-28.117 12.588-28.117 28.116s12.589 28.117 28.117 28.117 28.117-12.589 28.117-28.117S46.043 1.548 30.515 1.548Zm0 51.858c-13.112 0-23.741-10.63-23.741-23.741 0-8.146 4.102-15.333 10.353-19.608a23.63 23.63 0 0 1 13.388-4.134c13.112 0 23.741 10.629 23.741 23.741.001 1.63-.165 3.256-.496 4.853-2.24 10.785-11.796 18.889-23.245 18.889Z" fill="#fff"/><defs><radialGradient id="c" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(10.6367 5.36381 -2.23393 4.43 38.855 13.537)"><stop offset=".13" stop-color="#fff"/><stop offset=".29" stop-color="#fff" stop-opacity=".69"/><stop offset=".45" stop-color="#fff" stop-opacity=".4"/><stop offset=".59" stop-color="#fff" stop-opacity=".18"/><stop offset=".69" stop-color="#fff" stop-opacity=".05"/><stop offset=".74" stop-color="#fff" stop-opacity="0"/></radialGradient><radialGradient id="d" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(39.84 -16.088 59.816) scale(26.6958 29.0984)"><stop offset=".86" stop-opacity="0"/><stop offset=".98" stop-opacity=".47"/><stop offset="1"/></radialGradient><linearGradient id="a" x1="29.405" y1="19.448" x2="32.505" y2="47.44" gradientUnits="userSpaceOnUse"><stop stop-color="#123214"/><stop offset=".46" stop-color="#3E7C37"/><stop offset=".91" stop-color="#5FBB46"/></linearGradient><linearGradient id="b" x1="47.31" y1="17.629" x2="47.31" y2="40.264" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity="0"/><stop offset=".64" stop-color="#fff" stop-opacity=".43"/><stop offset="1" stop-color="#fff" stop-opacity=".42"/></linearGradient></defs></svg>',
  '<svg width="60" height="61" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37.073 1.13c1.986.027 3.88.404 5.65 1.304 1.56.799 2.832 1.915 3.7 3.454a9.358 9.358 0 0 1 1.092 3.28c.323 2.21-.004 4.349-.733 6.44-.428 1.226-1.021 2.376-1.663 3.506-1.308 2.3-2.989 4.293-4.943 6.06a46.073 46.073 0 0 1-8.201 5.923c-1.14.643-2.322 1.184-3.594 1.515a8.756 8.756 0 0 1-2.39.302c-1.061-.022-1.892-.505-2.539-1.32a3.852 3.852 0 0 1-.864-2.6c.007-.261.045-.522.113-.776.385-1.366.907-2.674 1.689-3.868.597-.911 1.308-1.72 2.239-2.3 1.035-.644 2.16-.92 3.377-.654.38.09.738.256 1.051.49.801.572.76 1.47.375 2.044-.33.498-.698.97-1.102 1.41-.684.737-1.41 1.434-2.12 2.146-.627.631-1.217 1.293-1.695 2.047-.248.391-.477.79-.545 1.26-.086.59.22.99.814 1.046.308.025.617-.006.914-.092.914-.253 1.762-.66 2.596-1.1 1.285-.679 2.471-1.51 3.627-2.387 1.402-1.062 2.764-2.17 4.02-3.403 1.43-1.402 2.706-2.926 3.681-4.685.713-1.284 1.238-2.64 1.471-4.094.207-1.281.092-2.529-.502-3.705a3.375 3.375 0 0 0-1.287-1.402 2.42 2.42 0 0 0-.834-.311c-1.072-.19-2.11-.034-3.129.306-1.062.355-2.048.874-3.006 1.44-2.08 1.234-4.162 2.467-6.144 3.856-.993.696-1.956 1.436-2.93 2.16-.88.654-1.753 1.315-2.715 1.85a8.673 8.673 0 0 1-2.502.95c-1.089.22-2.092.015-3.013-.576-.957-.614-1.626-1.456-1.92-2.571-.188-.704-.114-1.402.048-2.097.235-1.02.683-1.944 1.241-2.82 1.38-2.163 3.115-3.999 5.133-5.568 2.99-2.325 6.28-4.115 9.84-5.41a17.28 17.28 0 0 1 5.7-1.05ZM12.472 50.596c-.01-.68-.088-1.29-.48-1.82a1.573 1.573 0 0 0-.758-.55c-.78-.279-1.575-.246-2.35-.007-.62.192-1.22.454-1.827.687-.12.045-.23.102-.374.167-.287-.71-.568-1.399-.863-2.119.427-.202.83-.409 1.244-.586.955-.408 1.945-.688 2.987-.751 1.042-.063 2.07-.008 3.018.497 1.072.568 1.846 1.387 2.17 2.58.046.156.074.317.083.48.042 1.549.097 3.097.104 4.646.004 1.058-.066 2.117-.097 3.176a.574.574 0 0 1-.169.385c-.74.816-1.648 1.38-2.675 1.759a8.46 8.46 0 0 1-3.444.495c-1.08-.06-2.013-.502-2.801-1.236-.789-.734-1.34-1.62-1.493-2.706-.21-1.487.22-2.778 1.288-3.84.688-.683 1.535-1.036 2.49-1.16 1.056-.138 2.115-.101 3.175-.098l.772.001Zm-.138 2.418a1.619 1.619 0 0 0-.189-.026c-.36-.007-.724-.02-1.086-.014-.434.006-.87.008-1.3.049-.447.043-.88.173-1.225.47-.573.495-.744 1.14-.604 1.868.174.9.677 1.529 1.573 1.797.462.138.952.158 1.424.06.439-.08.848-.277 1.186-.57a.507.507 0 0 0 .195-.37c.014-.316.054-.632.057-.948.005-.724-.006-1.448-.012-2.173a1.237 1.237 0 0 0-.02-.143ZM48.559 52.954c-2.575 0-5.1-.055-7.662.012.013.18.021.35.037.517.066.68.213 1.34.5 1.963.224.509.57.954 1.01 1.294.695.529 1.49.615 2.323.508.689-.09 1.33-.341 1.97-.595.293-.116.584-.24.9-.369.3.628.594 1.244.9 1.88-.056.04-.11.086-.168.12-1.248.74-2.588 1.217-4.036 1.343-1.32.114-2.58-.102-3.72-.833-.777-.497-1.32-1.2-1.775-1.986a7.715 7.715 0 0 1-.994-3.19A9.188 9.188 0 0 1 39.15 47.9c.739-1.227 1.842-1.894 3.224-2.124a5.65 5.65 0 0 1 3.706.617c.632.343 1.072.882 1.435 1.487.48.797.733 1.676.854 2.587.099.734.13 1.478.189 2.22.007.076.002.155.002.267Zm-3.12-2.331c-.15-.685-.252-1.384-.7-1.964a1.62 1.62 0 0 0-.896-.579c-.945-.25-1.895.186-2.3 1.08-.146.319-.231.665-.337 1-.047.152-.078.31-.116.463.254.067 4.089.07 4.35.002l-.002-.002ZM31.674 42.497l3.071-.476v3.773c.682.04 1.331-.004 1.984.066v2.324c-.66.01-1.306-.009-1.98.032v.326c-.006 2.237-.01 4.474-.014 6.711 0 .352.028.705.06 1.056.05.54.35.883.873 1.014.288.073.585.115.877.17l.294.06v1.973a.397.397 0 0 1-.104.035c-.872.039-1.74.016-2.583-.24-.823-.249-1.51-.699-1.975-1.44-.265-.42-.4-.893-.457-1.38a7.862 7.862 0 0 1-.052-.92c0-4.249.002-8.496.007-12.744l-.001-.34ZM50.248 42.5l2.97-.516v.41c0 3.858.001 7.716.004 11.574 0 .706.006 1.412.012 2.12.005.697.26 1.052.925 1.26.227.062.456.111.688.147.142.026.285.039.457.06v2.015a.132.132 0 0 1-.055.027c-.843.034-1.683.02-2.504-.22a3.822 3.822 0 0 1-1.36-.713c-.745-.61-1.05-1.428-1.127-2.35-.023-.27-.02-.543-.02-.814 0-4.22.004-8.44.01-12.66v-.34ZM25.702 59.391h-3c-.004-.125-.01-.24-.01-.353a8121.64 8121.64 0 0 1-.008-5.407c-.004-1.44-.013-2.88-.012-4.32a5.36 5.36 0 0 1 .06-.78c.044-.295.198-.54.413-.747 1.178-1.147 2.59-1.835 4.2-2.131a8.526 8.526 0 0 1 3.052-.005c.053.01.107.022.159.035.026.007.05.02.1.039-.34.866-.756 1.694-1.147 2.512-.468 0-.91-.013-1.352.003a5.405 5.405 0 0 0-2.197.548c-.194.095-.267.214-.266.438.009 3.28.01 6.56.006 9.84l.002.328ZM20.49 45.92c.032 4.496-.003 8.965.026 13.461H17.58c-.007-.108-.021-.222-.021-.335v-8.48c0-1.295.01-2.59.016-3.886v-.32l2.915-.44ZM18.9 44.598c-1.434-.004-2.332-1.43-1.737-2.777.365-.827.993-1.14 1.898-1.135 1.213.01 2.113 1.217 1.823 2.396-.23.942-.986 1.518-1.985 1.516Z" fill="#E20010"/></svg>',
  '<svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.601 53.653c.77 0 1.332.163 1.688.49.355.325.533.832.533 1.52v3.688h-1.154v-3.532c0-.777-.436-1.166-1.308-1.166-.377-.003-.747.1-1.067.3.056.232.082.471.078.71v3.688h-1.155v-3.532c0-.777-.436-1.166-1.308-1.166-.397 0-.792.072-1.165.211v4.487H13.59v-5.12c.382-.19.787-.331 1.204-.42.445-.104.9-.158 1.357-.16.72 0 1.255.14 1.605.42a4.27 4.27 0 0 1 1.846-.418Zm6.176 5.867c-.88 0-1.541-.252-1.984-.755-.443-.504-.664-1.237-.665-2.2 0-1.947.88-2.92 2.64-2.92.887 0 1.554.25 2 .75.447.499.671 1.223.671 2.17 0 .948-.23 1.677-.692 2.188-.462.511-1.118.767-1.97.767Zm-.011-.989c1.011 0 1.517-.655 1.517-1.965 0-.652-.12-1.139-.36-1.46-.24-.323-.625-.484-1.155-.484-.535 0-.917.164-1.148.494-.231.33-.346.813-.346 1.45 0 .636.119 1.123.357 1.46.238.337.616.505 1.135.503v.002Zm6.527-4.875c.821 0 1.444.248 1.869.744.424.496.637 1.198.639 2.107 0 1.096-.255 1.872-.764 2.327-.51.455-1.157.684-1.942.686-1.575 0-2.363-.422-2.363-1.266v-6.711h1.143V54c.23-.11.472-.194.72-.25.229-.059.463-.091.698-.097v.003Zm-.286 4.853c.6 0 1.02-.174 1.26-.522.24-.348.36-.826.36-1.433 0-.621-.126-1.095-.38-1.421-.252-.326-.627-.489-1.125-.489-.217.002-.433.03-.644.083-.21.051-.412.132-.6.24v3c-.002.36.375.54 1.129.54v.002Zm4.098-6.675h1.231v1.055h-1.231v-1.055Zm.033 1.977h1.154l.011 5.542h-1.165v-5.542Zm2.79 5.542v-7.688h1.144v7.686l-1.144.002Zm5.01-5.713c.858 0 1.487.28 1.886.84.399.56.595 1.343.588 2.349H42.54c.037.548.197.965.48 1.25.282.285.684.427 1.203.427.623 0 1.235-.156 1.781-.455v1.088c-.572.254-1.226.381-1.964.381-.828 0-1.479-.254-1.952-.76-.472-.508-.709-1.228-.708-2.16 0-.956.223-1.687.67-2.194.447-.507 1.076-.762 1.888-.766Zm-.032.96c-.389 0-.693.104-.912.311-.22.208-.363.56-.43 1.055h2.672c-.052-.474-.184-.82-.396-1.038-.213-.218-.524-.327-.934-.328ZM32.88 8.908c-1.274-.315-2.254-.473-2.94-.473-5.124 0-9.278 4.14-9.278 9.245 0 5.106 4.156 9.246 9.278 9.246 5.121 0 9.277-4.14 9.277-9.246 0-.746-.09-1.489-.267-2.213l7.376-1.987a16.745 16.745 0 0 1-2.2 13.455L31.915 49.578H20.599l8.04-14.82c.044-.082-.085-.262-.193-.271-8.591-.78-15.321-7.98-15.321-16.746 0-9.287 7.554-16.815 16.873-16.815a16.909 16.909 0 0 1 5.032.76l-2.15 7.222Z" fill="#006E53"/><path d="M29.886 22.765a5.085 5.085 0 1 0 0-10.17 5.085 5.085 0 0 0 0 10.17Z" fill="#D6E806"/><path d="M45.023 11.786a16.394 16.394 0 0 0-8.668-9.014m2.31 11.441a9.22 9.22 0 0 0-4.74-4.97l4.74 4.97Zm3.237-1.387a13.11 13.11 0 0 0-6.587-6.934l6.587 6.934Z" stroke="#D6E806" stroke-width="2" stroke-linecap="round"/></svg>',
];

// SUGGESTION
// let input = document.getElementById("phone-number");

// input.addEventListener("keyup", (event) => {
//   const mtnNumbers = /2340803|2340806|2340703|2340706|2340810|2340813|2340814|2340816|2340903|2340906|2340916/;
//   const gloNumbers = /2340805|2340807|2340811|2340705|2340815|2340905/;
//   const airtelNumbers = /2340802|2340808|2340812|2340701|2340708|2340902|2340907|2340901/;
//   const nineMobibleNumbers = /2340809|2340817|2340818|2340908|2340909/;

//   // if (event.key == "Backspace") {
//   //     span.innerText = inputValue
//   //     span0.innerText = inputValue
//   //     span1.innerText = inputValue
//   //     span2.innerText = inputValue
//   //     input.style.borderColor = 'yellowgreen)'
//   //     label.style.color = 'yellowgreen'
//   //     label.innerText = "Invalid number, try again"
//   // }

//     suggestion.innerHTML += input.value;
// });

// console.log(input);

// if(phoneNumber == ""){
//     label.innerHTML = "Enter phone number"
//     label.style.color = "#9DB7F8"
// }

revealButton.addEventListener("click", () => {
  console.log(suggestion);

  let phoneNumber = document.getElementById("phone-number").value;
  let phoneStarts = "";

//   check if the number has country code but with no zero
    if (phoneNumber.substring(0, 4) === "2340") {
      phoneStarts = phoneNumber.substring(0, 7);
    } else if (phoneNumber.substring(0, 3) === "234") {
      phoneStarts = `${phoneNumber.substring(0, 3)}0${phoneNumber.substring(3,6)}`;
      // check if the number doesn't have country code
    } else {
      phoneStarts = `234${phoneNumber.substring(0, 4)}`;
    }

    // let phoneStarts = `+234 + $phoneNumber.substring(0,4)`

    // let pattern = /((\+234?)|0)?[ -]?(?<network>\d{4})[ -]?(\d{3})[ -]?(\d{4})/;

    const mtnNumbers = /2340803|2340806|2340703|2340706|2340810|2340813|2340814|2340816|2340903|2340906|2340916/;
    const gloNumbers = /2340805|2340807|2340811|2340705|2340815|2340905/;
    const airtelNumbers = /2340802|2340808|2340812|2340701|2340708|2340902|2340907|2340901/;
    const nineMobibleNumbers = /2340809|2340817|2340818|2340908|2340909/;

    // const found = phoneStarts.match(mtnNumbers);

    // console.log(found);
    if(phoneNumber.toString().length < 11){
        for (const scanThrough of brandLogos){
            scanThrough.classList.add('hide-logo')
        }
        label.innerHTML = "Invalid number, try again"
        label.style.color = "#F23C3C"
        placeholder.classList.remove('hide-logo')
    }

    else if(phoneStarts.match(mtnNumbers) && !(phoneNumber.toString().length < 11)){
        // console.log("I am an mtn number")
        placeholder.classList.add('hide-logo')
        for (const scanThrough of brandLogos){
            scanThrough.classList.add('hide-logo')
        }
        label.innerHTML = "Success! carrier identified"
        label.style.color = "#5D87F4"
        mtnLogo.classList.remove('hide-logo')
    }
    else if(phoneStarts.match(gloNumbers) && !(phoneNumber.toString().length < 11)){
        placeholder.classList.add('hide-logo')
        for (const scanThrough of brandLogos){
            scanThrough.classList.add('hide-logo')
        }
        label.innerHTML = "Success! carrier identified"
        label.style.color = "#5D87F4"
        gloLogo.classList.remove('hide-logo')
    }
    else if(phoneStarts.match(airtelNumbers) && !(phoneNumber.toString().length < 11)){
        placeholder.classList.add('hide-logo')
        for (const scanThrough of brandLogos){
            scanThrough.classList.add('hide-logo')
        }
        label.innerHTML = "Success! carrier identified"
        label.style.color = "#5D87F4"
        airtelLogo.classList.remove('hide-logo')
    }
    else if(phoneStarts.match(nineMobibleNumbers) && !(phoneNumber.toString().length < 11)){
        placeholder.classList.add('hide-logo')
        for (const scanThrough of brandLogos){
            scanThrough.classList.add('hide-logo')
        }
        label.innerHTML = "Success! carrier identified"
        label.style.color = "#5D87F4"
        nineMobileLogo.classList.remove('hide-logo')
    }

    // if(mtnLogo.id == "MTN"){
    //     console.log("I DEY WORK")
    // }

    // for(const objectScan in carrierPrefixes){

        // let carrierName = carrierPrefixes[objectScan].includes(phoneNumber.substring(0, 4))
        // let carrierName = carrierPrefixes[objectScan]

        // console.log(objectScan[0])
        // console.log(carrierPrefixes[objectScan])
        // console.log(carrierName);
        // if(carrierName.includes(phoneNumber.substring(0, 4))){
        //     console.log(phoneNumber.substring(0, 4));
        //     if(mtnLogo.id == "MTN" && objectScan == "MTN"){
        //         console.log("HMMMMM")
        //     }
        // }

        // if the fisrt 4 digits match a particular sample data in the object.. it should append a particular html tag
        // step one: get user input
        // step two: compare the first four digit in the input with the sample data in the object

        // if(phoneNumber.substring(0, 4) === carrierName){
        //     console.log("Hello")
        // }else{
        //     console.log("not working")
        // }
    // }
});

let phoneNumber = document.getElementById("phone-number");

phoneNumber.addEventListener("blur", () => {
  label.innerHTML = "Enter phone number";
  label.style.color = "#9DB7F8";
  for (const scanThrough of brandLogos) {
    scanThrough.classList.add("hide-logo");
  }
  placeholder.classList.remove("hide-logo");
});

// function getFirstFourDigit(){
//     let phoneNumber = number.value;
//     console.log(phoneNumber.substring(0, 4))

// }

// getFirstFourDigit()

// const carrierPrefixes = {
//     MTN: [
//         "0803",
//         "0806",
//         "0703",
//         "0706",
//         "0810",
//         "0813",
//         "0814",
//         "0816",
//         "0903",
//         "0906",
//         "0916",
//     ],

//     GLO: [
//         "0805",
//         "0807",
//         "0811",
//         "0705",
//         "0815",
//         "0905"],

//     AIRTEL: [
//         "0802",
//         "0808",
//         "0812",
//         "0701",
//         "0708",
//         "0902",
//         "0907",
//         "0901"],

//     NINEMOBILE: [
//         "0809",
//         "0817",
//         "0818",
//         "0908",
//         "0909"],
//     };

// function get
// document.body.style.background = "red"
// revealButton.addEventListener(onclick)
