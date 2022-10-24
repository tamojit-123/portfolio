import "./LoaderLogo.css";

import React from "react";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
    xmlns = "http://www.w3.org/2000/svg"
    width = "882"
    height = "228"
    fill = "none"
    viewBox = "0 0 882 228" > < path
    fill = {theme.text} d =
        "M273.508 18.5156C317.945 -1.17188 229.07 4.45312 141.461 13.3125L144.133 5.57812C144.555 4.17188 143.852 2.48438 142.305 1.92188C141.32 1.64062 140.195 1.92188 139.352 2.625C138.508 3.32812 131.477 9.375 128.102 14.7188C105.18 17.1094 82.8203 19.6406 63.4141 21.8906C45.8359 20.2031 25.0234 22.7344 2.66406 29.4844C1.25781 29.9062 0.414062 31.1719 0.554688 32.7188C0.835938 34.2656 2.24219 35.3906 3.78906 35.1094C4.07031 35.1094 28.5391 31.875 62.8516 27.6562C65.6641 27.9375 68.3359 28.3594 71.0078 28.7812C83.9453 31.3125 94.4922 36.6562 101.664 44.9531C108.836 53.1094 112.633 64.3594 112.352 78.7031C112.211 79.4062 112.211 79.9688 112.211 80.6719L89.5703 146.906C89.0078 148.172 89.5703 149.578 90.8359 150.281C92.2422 151.125 93.9297 150.562 94.7734 149.156C109.539 122.438 116.711 100.078 117.977 81.7969L139.633 18.6562C218.805 8.95312 275.336 13.5938 271.258 13.3125C269.57 13.1719 269.148 15.5625 269.711 17.1094C270.414 18.5156 272.102 19.2188 273.508 18.5156ZM133.305 19.3594L133.023 20.0625C133.023 19.7812 133.023 19.6406 132.883 19.3594H133.305ZM126.414 20.0625C126.695 21.3281 127.398 22.3125 129.227 22.875C130.352 23.2969 131.617 23.0156 132.32 22.1719L117.273 66.0469C115.586 56.0625 111.789 47.7656 106.023 41.1562C99.6953 33.8438 91.2578 28.6406 80.9922 25.4062C95.3359 23.7188 110.805 21.8906 126.414 20.0625ZM134.852 14.0156L135.273 13.7344L135.133 14.0156H134.852ZM169.867 88.2656C157.633 84.0469 148.352 87.2812 143.148 92.3438C139.492 95.7188 137.664 100.078 137.945 103.734C138.367 107.953 141.18 111.188 146.945 111.047C151.867 110.906 159.602 107.672 170.43 99.0938C168.18 107.25 169.164 111.328 172.117 112.453C177.602 114.844 189.133 104.719 199.68 95.7188C205.305 90.9375 210.367 86.4375 213.039 84.4688L207.555 114C207.273 115.547 208.258 117.094 209.805 117.375C211.07 117.656 212.336 116.953 212.898 115.969C212.898 115.828 229.633 86.1562 237.648 76.3125C236.945 79.5469 235.68 84.1875 234.273 88.6875C231.461 98.3906 228.789 108.094 232.023 110.344C232.164 110.344 232.305 110.484 232.445 110.484C234.977 111.891 237.367 109.922 239.758 106.406C241.445 103.875 243.414 100.219 245.242 96.8438C246.648 94.3125 247.914 91.9219 248.898 90.0938C249.32 91.5 249.742 93.0469 250.164 94.4531C251.57 99.5156 252.977 104.297 255.789 107.531C261.133 113.438 269.711 113.297 287.992 97.125C289.258 96 289.398 94.1719 288.273 93.0469C287.289 91.7812 285.461 91.6406 284.195 92.7656C269.289 105.984 263.102 107.109 260.148 103.734C258.18 101.484 256.914 97.2656 255.789 92.9062C254.945 89.9531 254.102 87 252.836 84.1875C251.852 81.9375 250.305 81.375 248.336 82.3594C245.945 83.3438 243.133 88.5469 240.18 94.1719C239.055 96.1406 237.93 98.25 236.945 100.078C237.789 97.4062 238.773 93.8906 239.898 90.375C242.289 81.6562 244.82 72.9375 243.414 69.9844C242.43 67.7344 240.883 67.0312 238.352 68.1562C234.133 70.125 223.727 86.2969 216.273 98.6719L218.805 85.3125C220.07 81.0938 219.086 78.7031 216.414 78C212.617 76.875 204.742 83.7656 196.023 91.3594C186.742 99.375 176.477 108.094 174.367 107.25C173.523 106.828 174.648 102.328 179.43 90.9375C179.852 89.9531 179.57 88.6875 178.867 87.8438C177.742 86.7188 175.914 86.7188 174.789 87.7031C173.664 88.6875 172.68 89.6719 171.695 90.5156C171.555 89.5312 170.852 88.6875 169.867 88.2656ZM168.039 93.75C157.773 102.047 150.883 105.141 146.805 105.281C144.836 105.281 143.852 104.438 143.711 103.172C143.57 101.344 144.695 98.6719 147.086 96.4219C151.023 92.625 158.195 90.2344 167.898 93.75H168.039ZM289.258 93.1875C287.852 91.7812 283.773 91.3594 280.539 99.9375C277.727 106.688 275.477 115.969 284.336 116.953C288.133 117.375 292.492 114.281 296.43 109.5C298.82 106.688 301.07 103.312 302.898 99.7969C310.07 101.625 320.617 101.766 335.523 98.9531C337.07 98.6719 338.195 97.2656 337.773 95.7188C337.633 94.1719 336.086 93.0469 334.539 93.3281C321.039 95.8594 311.617 95.8594 305.43 94.4531C306.836 90.7969 307.961 87.1406 308.383 83.7656C308.945 78.8438 307.961 74.4844 304.867 71.9531C301.914 69.4219 298.398 69.8438 295.305 71.9531C292.211 73.9219 289.68 77.8594 288.836 82.0781C287.992 86.5781 289.117 91.3594 293.336 95.1562C294.461 96.1406 295.867 96.9844 297.414 97.8281C295.867 100.781 293.898 103.594 292.07 105.844C289.258 109.219 286.586 111.328 284.898 111.188C279.977 110.625 289.117 96 289.117 95.8594C289.539 95.1562 289.961 93.8906 289.258 93.1875ZM299.945 92.625C298.82 92.0625 297.977 91.5 297.133 90.7969C294.602 88.5469 294.039 85.7344 294.461 83.2031C295.023 80.3906 296.711 78 298.539 76.7344C299.523 76.0312 300.508 75.75 301.211 76.3125C302.617 77.5781 302.898 79.9688 302.617 83.0625C302.336 86.0156 301.352 89.3906 299.945 92.625ZM345.93 54.375C347.055 54.375 348.18 55.0781 348.602 56.2031C349.164 57.6094 348.602 59.2969 347.055 60C341.852 62.25 344.102 69 344.102 69C344.523 70.5469 343.68 72.2344 342.133 72.6562C340.586 73.0781 339.039 72.2344 338.617 70.6875C338.617 70.6875 334.82 59.0156 344.805 54.6562C345.227 54.5156 345.648 54.375 345.93 54.375ZM337.492 86.7188C339.18 86.8594 340.305 88.2656 340.023 90.0938C339.742 91.3594 337.352 100.219 333.133 112.875C343.961 107.812 354.508 101.906 364.211 94.875C365.758 93.6094 367.867 93.8906 368.711 95.2969C369.695 96.5625 369.133 98.6719 367.445 99.7969C355.914 108.234 343.258 115.125 330.461 120.891C324.273 138.609 315.273 161.25 304.305 180.797C295.727 196.125 285.883 209.766 274.914 218.203C263.383 227.062 250.867 230.156 237.789 223.688C231.18 220.594 224.57 214.828 217.82 206.25C217.82 206.25 217.82 206.109 217.68 206.109C201.086 181.922 205.586 167.297 222.039 155.906C234.133 147.609 252.836 141.562 274.211 134.812C290.383 129.609 308.102 123.844 325.398 116.391C330.32 101.766 333.133 91.2188 333.414 89.9531C333.836 88.125 335.664 86.7188 337.492 86.7188ZM322.586 124.266C306.555 130.875 290.242 136.219 275.195 141C254.383 147.609 236.242 153.375 225.133 161.109C212.617 169.688 209.523 181.5 223.445 201.75C229.633 209.766 235.68 214.828 241.586 217.781C252.133 222.984 262.258 220.453 271.539 213.281C281.383 205.688 290.523 193.031 298.68 178.547C308.523 160.828 316.68 140.859 322.586 124.266ZM431.852 23.0156H431.992C432.273 23.0156 432.695 23.1562 432.977 23.2969C432.977 23.2969 432.977 23.2969 433.117 23.2969C433.117 23.2969 433.258 23.2969 433.258 23.4375H433.398C433.398 23.4375 433.398 23.5781 433.539 23.5781C433.68 23.7188 433.961 24 434.102 24.1406C434.805 25.125 434.805 26.25 434.383 27.2344C434.102 27.6562 432.695 31.3125 430.164 37.3594C479.242 35.3906 525.789 37.9219 526.07 37.9219C527.617 38.0625 528.883 39.3281 528.742 41.0156C528.742 42.5625 527.336 43.8281 525.789 43.6875C525.508 43.6875 477.555 41.0156 427.773 43.125C413.711 78.5625 382.773 161.953 394.867 183.75C395.57 185.156 395.008 186.984 393.742 187.688C392.336 188.531 390.508 187.969 389.805 186.562C377.992 165.188 401.898 94.7344 417.367 54.2344C403.727 76.7344 385.023 105.562 373.211 109.219C372.93 109.359 372.508 109.359 372.086 109.359C370.117 109.359 368.43 109.078 367.023 108.375C364.914 107.391 363.648 105.844 363.086 103.594C362.664 101.906 362.945 99.7969 363.648 97.5469C364.914 94.0312 367.445 89.8125 371.383 85.1719C372.367 83.9062 374.195 83.7656 375.461 84.8906C376.586 85.875 376.727 87.7031 375.742 88.8281C372.367 92.9062 370.117 96.5625 369.133 99.375C368.711 100.641 368.57 101.625 368.711 102.328C368.852 102.75 368.992 103.031 369.414 103.172C369.977 103.453 370.68 103.594 371.664 103.594C382.914 99.7969 403.586 65.9062 416.945 43.6875C393.461 45.0938 370.258 47.625 352.258 52.125C337.211 56.0625 331.727 56.9062 331.727 57.0469C331.867 57.6094 334.258 56.2031 338.055 56.2031C343.117 55.9219 349.305 55.3594 354.508 54.375C359.289 53.5312 363.367 53.6719 363.227 53.25C362.945 51.7031 364.07 50.2969 365.617 50.0156C367.164 49.5938 368.57 50.7188 368.852 52.2656C369.555 55.9219 363.508 58.5938 355.633 60C350.148 60.9844 343.539 61.6875 338.336 61.8281C331.867 62.1094 326.805 61.125 326.102 58.4531C325.398 55.5 331.586 51.5625 350.852 46.6406C370.117 41.7188 395.289 39.0469 420.602 37.7812C425.242 30.0469 428.617 24.7031 430.164 23.5781C430.445 23.2969 430.727 23.1562 431.008 23.1562C431.148 23.1562 431.148 23.0156 431.289 23.0156C431.43 23.0156 431.43 23.0156 431.43 23.0156C431.57 23.0156 431.57 23.0156 431.711 23.0156H431.852ZM392.477 55.7812C393.883 55.6406 395.008 56.625 395.43 58.0312C395.711 59.5781 394.727 61.125 393.18 61.4062C388.68 62.3906 384.742 70.9688 384.742 70.9688C384.039 72.375 382.211 72.9375 380.805 72.2344C379.398 71.5312 378.836 69.8438 379.539 68.4375C379.539 68.4375 384.742 57.4688 391.914 55.7812C392.055 55.7812 392.336 55.7812 392.477 55.7812ZM638.711 46.2188C627.32 50.1562 616.07 53.1094 604.961 55.3594C613.961 36.7969 621.414 22.7344 621.414 22.5938C622.117 21.1875 621.695 19.3594 620.289 18.6562C620.008 18.5156 619.727 18.5156 619.586 18.375C619.586 18.375 619.445 18.375 619.305 18.375C618.883 18.375 618.461 18.375 618.039 18.5156C615.93 18.9375 611.289 20.7656 604.258 28.5C603.133 29.7656 603.273 31.5938 604.398 32.5781C605.664 33.7031 607.492 33.5625 608.477 32.4375C609.742 31.1719 610.727 30.0469 611.57 29.2031C608.195 35.8125 603.414 45.5156 598.211 56.625C561.93 62.8125 528.883 60.8438 508.914 54.7969C499.914 52.125 493.867 48.75 491.898 45.0938C490.211 42.1406 491.898 38.625 497.523 34.8281C511.586 25.5469 546.742 16.125 611.852 10.3594C704.805 2.0625 756.273 6.70312 778.492 18.5156C790.727 24.9844 793.117 33.8438 788.336 43.9688C782.992 55.0781 769.492 67.7344 750.367 80.6719C685.539 124.688 558.133 170.25 470.523 168.281C468.977 168.281 467.711 169.547 467.711 171.094C467.57 172.641 468.836 174.047 470.523 174.047C559.117 176.016 688.07 129.891 753.602 85.4531C773.57 71.9531 787.773 58.4531 793.539 46.3594C799.867 33.2812 796.773 21.75 781.164 13.4531C758.102 1.07812 705.508 -3.70312 611.43 4.59375C545.055 10.5 509.055 20.2031 494.43 30.0469C485.57 35.8125 483.602 42 486.836 47.7656C489.508 52.8281 496.82 57.1875 507.367 60.2812C527.195 66.3281 559.539 68.4375 595.258 62.8125C577.258 101.625 556.867 152.109 575.008 147.891C576.555 147.609 577.539 146.062 577.117 144.516C576.836 142.969 575.008 143.25 573.742 142.266C569.945 139.453 583.867 97.9688 601.727 61.8281C614.523 59.4375 627.602 56.2031 640.539 51.7031C642.086 51.1406 642.93 49.5938 642.367 48.0469C641.805 46.5 640.258 45.7969 638.711 46.2188ZM798.32 93.4688C793.258 86.4375 785.805 87.8438 779.617 92.2031C776.664 94.3125 774.133 97.125 772.305 99.7969C770.336 102.75 769.211 105.984 769.492 108.516C769.773 112.172 772.305 114.422 777.648 113.859C787.211 112.875 795.648 106.266 801.133 100.641C800.43 109.641 801.414 113.438 805.633 114C808.727 114.562 812.805 112.172 819.133 108.516C823.492 105.984 828.977 102.75 835.867 99.375C837.273 98.6719 837.977 96.9844 837.273 95.5781C836.57 94.1719 834.742 93.4688 833.336 94.1719C826.305 97.6875 820.539 100.922 816.18 103.453C810.977 106.547 807.602 108.516 806.477 108.375C805.773 108.234 806.336 103.734 807.883 91.9219C808.023 90.7969 807.602 89.6719 806.617 89.1094C805.352 88.2656 803.523 88.5469 802.68 89.8125C802.68 89.8125 801.273 91.9219 798.742 94.5938C798.742 94.1719 798.602 93.75 798.32 93.4688ZM795.648 97.9688C791.008 102.609 784.398 107.391 777.086 108.094C775.82 108.234 775.258 108.094 775.258 107.953C775.117 106.688 775.82 105 777.086 103.031C778.633 100.781 780.742 98.5312 782.992 96.9844C786.648 94.3125 791.008 93.1875 793.68 96.8438C794.102 97.5469 794.805 97.9688 795.648 97.9688ZM853.867 93.3281C857.805 87.4219 858.93 83.2031 858.367 80.3906C857.523 76.4531 854.148 75.1875 849.789 76.0312C846.695 76.5938 842.898 78.2812 839.664 80.6719C833.898 85.0312 829.539 91.5 832.07 97.9688C833.477 101.625 836.289 105.422 839.242 109.219C809.992 121.875 781.164 137.484 822.508 136.5C846.133 136.078 853.164 130.594 853.023 123.141C852.883 119.484 850.773 115.547 848.102 111.609C863.852 105.281 879.461 99.7969 879.602 99.6562C881.148 99.0938 881.852 97.5469 881.289 96C880.867 94.4531 879.18 93.75 877.633 94.3125C877.492 94.3125 861.742 99.9375 844.727 106.969L844.023 106.125C841.352 102.469 838.539 98.8125 837.414 95.8594C836.008 92.3438 839.102 88.2656 843.039 85.3125C845.57 83.4844 848.523 82.0781 850.773 81.6562C851.898 81.5156 852.742 81.375 852.742 81.6562C853.023 82.9219 852.039 85.5938 849.086 90.0938C848.102 91.3594 848.523 93.1875 849.789 94.1719C851.055 95.0156 852.883 94.5938 853.867 93.3281ZM847.258 123.281C847.398 127.359 841.633 130.312 822.367 130.734C805.07 131.156 822.648 122.297 842.758 113.859C845.148 117.375 847.117 120.75 847.258 123.281Z" / > < /svg>
    );
  }
}

export default LogoLoader;
