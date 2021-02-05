import React from "react"
import { Global } from "@emotion/react"

const Fonts = () => {
  return (
    <Global
      styles={`
        @font-face {
          font-family: 'Rubik';
          font-style: normal;
          font-weight: 300;
          src: local('S'),
          url('/Fonts/rubik-v11-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
          url('/Fonts/rubik-v11-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
                  }
        @font-face {
          font-family: 'Rubik';
          font-style: normal;
          font-weight: 400;
          src: local('S'),
               url('/fonts/rubik-v11-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
               url('/fonts/rubik-v11-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
        @font-face {
          font-family: 'Rubik';
          font-style: normal;
          font-weight: 500;
          src: local(''),
               url('/fonts/rubik-v11-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
               url('/fonts/rubik-v11-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
        @font-face {
          font-family: 'Rubik';
          font-style: normal;
          font-weight: 600;
          src: local(''),
               url('/fonts/rubik-v11-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
               url('/fonts/rubik-v11-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
        @font-face {
          font-family: 'Rubik';
          font-style: normal;
          font-weight: 700;
          src: local(''),
               url('/fonts/rubik-v11-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
               url('/fonts/rubik-v11-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
        @font-face {
          font-family: 'Rubik';
          font-style: normal;
          font-weight: 800;
          src: local(''),
               url('/fonts/rubik-v11-latin-800.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
               url('/fonts/rubik-v11-latin-800.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
        @font-face {
          font-family: 'Rubik';
          font-style: normal;
          font-weight: 900;
          src: local(''),
               url('/fonts/rubik-v11-latin-900.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
               url('/fonts/rubik-v11-latin-900.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
        @font-face {
          font-family: 'Rubik Mono One';
          font-style: normal;
          font-weight: 400;
          src: url('../fonts/rubik-mono-one-v9-latin-regular.eot'); /* IE9 Compat Modes */
          src: local(''),
               url('/fonts/rubik-mono-one-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
               url('/fonts/rubik-mono-one-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
               url('/fonts/rubik-mono-one-v9-latin-regular.woff') format('woff'), /* Modern Browsers */
               url('/fonts/rubik-mono-one-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
               url('/fonts/rubik-mono-one-v9-latin-regular.svg#RubikMonoOne') format('svg'); /* Legacy iOS */
        }

  `}
    />
  )
}

export default Fonts
