export function Logo(props) {
  return (
    <>
      <svg
        role="img"
        aria-hidden="true"
        aria-describedby="oh_devfest"
        viewBox="0 0 88 87"
        className="logo"
        fill="currentColor"
        {...props}
      >
        <title id="oh_devfest">Ohio Devfest Logo</title>
        <path
          id="bottomBorder"
          d="M14.3411 72.9848C13.2231 72.0028 12.1551 70.9658 11.1415 69.8779H8.11618C16.6763 79.915 29.4396 86.2886 43.7031 86.2886C57.9664 86.2886 70.7298 79.915 79.29 69.8779H76.2647C74.9976 71.2378 73.6456 72.5185 72.2173 73.7109C71.9315 73.9492 71.6428 74.1846 71.3512 74.416C70.7676 74.8788 70.1722 75.3271 69.5653 75.7607C68.9584 76.1946 68.3399 76.6131 67.7107 77.0167C60.789 81.4539 52.5483 84.0284 43.7031 84.0284C35.2601 84.0284 27.3674 81.6826 20.6474 77.6101C20.3273 77.4159 20.01 77.2183 19.6955 77.0167C17.8077 75.8064 16.8659 75.1837 15.1889 73.7109L14.3411 72.9848Z"
        />
        <path
          id="topBorder"
          d="M84.7799 41.1052C84.7799 18.5244 66.389 0.218994 43.7029 0.218994C21.0168 0.218994 2.62587 18.5244 2.62587 41.1052C2.62587 41.7522 2.64278 42.3953 2.67268 43.0347H84.7331C84.763 42.3953 84.7799 41.7522 84.7799 41.1052ZM82.0748 40.2562H5.33153C5.78502 19.5489 22.7901 2.901 43.7029 2.901C64.6159 2.901 81.6209 19.5489 82.0748 40.2562Z"
        />
        <path
          id="scriptOhio"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M77.0902 37.4775H10.3159C12.1327 20.7224 26.3863 7.67651 43.7031 7.67651C61.02 7.67651 75.2737 20.7224 77.0902 37.4775ZM24.7527 35.305C31.4247 35.305 37.8683 26.6951 37.8683 20.6854C37.8683 17.6306 36.1939 15.56 33.8602 15.56C32.7946 15.56 32.0587 15.0802 30.8159 15.0802C25.6912 15.0802 18.8417 23.3876 18.8417 29.4978C18.8417 32.3763 20.6429 35.305 24.7527 35.305ZM32.8199 16.8729C34.469 16.8729 35.5341 17.8577 35.5341 20.0544C35.5341 24.0186 31.1455 32.5531 25.742 32.5531C23.332 32.5531 22.4694 30.8358 22.4694 29.0179C22.4694 26.9223 23.5349 24.7005 23.6871 24.7005C23.7633 24.7005 23.9915 27.0489 26.8583 27.0489C30.613 27.0489 32.1096 23.4378 32.1096 21.014C32.1096 20.5342 32.0082 20.0544 31.9067 20.0544C31.8053 20.0544 31.6786 20.3322 31.5261 20.7106C31.3484 21.0643 29.6489 24.6753 27.0865 24.6753C26.3002 24.6753 25.742 24.0186 25.742 23.1851C25.742 20.9382 29.725 16.8729 32.8199 16.8729ZM48.2357 31.5033C48.208 31.7127 48.1932 31.9117 48.1932 32.0984C48.1932 33.5379 49.0054 35.002 50.2734 35.002C51.9111 35.002 53.9493 32.8236 55.2599 31.0619C55.2505 31.1993 55.2455 31.3348 55.2455 31.4673C55.2455 33.8911 56.6665 35.0779 58.7972 35.0779C60.4464 35.0779 61.994 34.068 63.313 32.629H63.5165C65.1146 32.629 67.2201 31.5683 68.5139 29.0179C68.5391 28.9677 68.5643 28.8918 68.5643 28.7908C68.5643 28.4627 68.3867 28.1341 68.1837 28.1341C67.8289 28.1341 66.738 30.6343 65.2666 30.6343C65.1146 30.6343 64.9874 30.5835 64.8355 30.5333C66.0278 28.513 66.7633 26.2153 66.7633 24.3975C66.7633 23.3876 66.3064 22.3772 65.1146 22.3772C64.4039 22.3772 63.7951 22.0491 63.0596 22.0491C59.9955 22.0491 57.157 25.235 55.9107 28.3839C55.0278 29.5544 52.85 32.7295 51.5672 32.7295C51.3642 32.7295 51.2123 32.5782 51.2123 32.1994C51.2123 30.4574 55.0174 23.8418 55.5499 22.8319C55.6009 22.756 55.6267 22.6801 55.6267 22.6299C55.6267 22.2003 54.7382 22.0742 54.1042 22.0742C53.7998 22.0742 53.5459 22.0998 53.4445 22.1249C52.5783 22.4801 50.5169 25.4507 49.2499 28.3002C48.4431 29.3539 46.3471 32.4773 45.2508 32.4773C44.7434 32.4773 44.6672 32.2501 44.6672 31.9472C44.6672 30.6087 47.7111 25.3566 48.0665 24.6753C48.4218 23.993 48.7262 23.4629 48.7262 23.1097C48.7262 22.6801 47.3052 22.1501 46.3668 22.1501C44.9716 22.1501 40.684 26.9981 40.3034 27.478L40.2781 27.4272C41.8005 24.3216 45.7071 17.605 45.7071 16.9739C45.7071 16.267 44.3371 15.9384 43.9565 15.9384C43.4239 15.9384 41.369 19.8273 39.2125 23.9176C37.0056 28.1849 34.7224 32.6541 34.7224 33.2601C34.7224 34.1946 35.8385 34.9518 36.3463 34.9518C36.8536 34.9518 37.2847 33.4118 38.7052 31.2905C40.3543 28.8918 43.0176 26.1394 44.4891 24.8014L44.5905 24.8517C43.9313 25.7606 41.2675 29.8515 41.2675 32.73C41.2675 34.0429 42.4093 34.9769 43.6016 34.9769C45.035 34.9769 46.9073 33.1719 48.2357 31.5033ZM64.1247 23.7915C64.8607 23.7915 65.0636 24.4477 65.0636 25.0793C65.0636 26.0892 64.4544 27.8563 63.5417 29.4475C63.1354 29.0938 62.6533 28.7908 62.0445 28.7908C60.9537 28.7908 60.3449 29.5988 60.3449 30.4826C60.3449 31.1141 60.6998 31.7201 61.36 32.0984C60.9032 32.427 60.4464 32.629 59.99 32.629C59.2036 32.629 58.8987 32.023 58.8987 31.1644C58.8987 28.1598 62.1207 23.7915 64.1247 23.7915ZM56.4893 20.5844C57.7574 20.5844 58.9497 19.5745 58.9497 18.2617C58.9497 17.0498 57.9098 16.1911 56.717 16.1911C55.449 16.1911 54.2562 17.201 54.2562 18.5139C54.2562 19.7263 55.2965 20.5844 56.4893 20.5844Z"
        />
        <path
          id="dChar"
          d="M15.7991 51.5843C15.7991 53.6632 15.4334 55.4694 14.7024 57.0025C13.9713 58.5357 12.914 59.7032 11.5304 60.5052C10.1467 61.307 8.51481 61.7076 6.63508 61.7076H1.58877L5.04612 45.4253H9.47706C11.4913 45.4253 13.0482 45.9563 14.1487 47.0182C15.2489 48.0798 15.7991 49.6018 15.7991 51.5843ZM6.79181 58.8569C7.89573 58.8569 8.85797 58.5747 9.67854 58.0106C10.4991 57.4463 11.1405 56.6166 11.603 55.5213C12.0656 54.4262 12.2968 53.1731 12.2968 51.7623C12.2968 50.6191 12.0264 49.7484 11.4855 49.1509C10.9448 48.5529 10.1669 48.2541 9.15267 48.2541H7.86583L5.60581 58.8569H6.79181Z"
        />
        <path
          id="eChar1"
          d="M22.0462 61.9304C20.4797 61.9304 19.2636 61.5111 18.3985 60.6719C17.533 59.8328 17.1006 58.6488 17.1006 57.1192C17.1006 55.5822 17.4082 54.1808 18.0236 52.9149C18.6392 51.649 19.4728 50.6837 20.5245 50.0194C21.5762 49.3548 22.7659 49.0225 24.0938 49.0225C25.4143 49.0225 26.4435 49.325 27.182 49.9301C27.9205 50.5353 28.2899 51.365 28.2899 52.4194C28.2899 53.8076 27.6669 54.8787 26.4213 55.6322C25.1753 56.386 23.3962 56.7628 21.084 56.7628H20.5134L20.4909 56.9966V57.2194C20.4909 57.8951 20.6829 58.428 21.0671 58.8176C21.4513 59.2074 22.0015 59.4024 22.7175 59.4024C23.3665 59.4024 23.9557 59.3318 24.4854 59.1907C25.015 59.0497 25.6564 58.8009 26.4099 58.4446V60.9727C25.1268 61.6112 23.6723 61.9304 22.0462 61.9304ZM23.8812 51.4395C23.2248 51.4395 22.6057 51.7363 22.0237 52.3301C21.442 52.9244 21.0615 53.6481 20.8825 54.502H21.3861C22.5422 54.502 23.443 54.322 24.0883 53.9618C24.7333 53.6017 25.0561 53.1136 25.0561 52.4972C25.0561 51.7919 24.6645 51.4395 23.8812 51.4395Z"
        />
        <path
          id="vChar"
          d="M33.9514 58.3556C34.3615 57.2197 34.7049 56.3919 34.9808 55.8719L38.3039 49.2566H41.918L35.1598 61.7078H31.5457L30.0015 49.2566H33.3024L33.806 55.783C33.8581 56.7704 33.8843 57.6278 33.8843 58.3556H33.9514Z"
        />
        <path
          id="fChar"
          d="M44.6037 61.7078H41.1909L44.6484 45.4253H53.7563L53.1519 48.2541H47.4679L46.584 52.4528H51.8766L51.2501 55.2707H45.9573L44.6037 61.7078Z"
        />
        <path
          id="eChar2"
          d="M58.7131 61.9304C57.1464 61.9304 55.9308 61.5111 55.0654 60.6719C54.2001 59.8328 53.7675 58.6488 53.7675 57.1192C53.7675 55.5822 54.0751 54.1808 54.6907 52.9149C55.3061 51.649 56.1397 50.6837 57.1914 50.0194C58.2431 49.3548 59.4326 49.0225 60.7607 49.0225C62.0812 49.0225 63.1102 49.325 63.8489 49.9301C64.5872 50.5353 64.9566 51.365 64.9566 52.4194C64.9566 53.8076 64.3338 54.8787 63.0882 55.6322C61.8422 56.386 60.0633 56.7628 57.7509 56.7628H57.1801L57.1578 56.9966V57.2194C57.1578 57.8951 57.3498 58.428 57.734 58.8176C58.118 59.2074 58.6684 59.4024 59.3846 59.4024C60.0332 59.4024 60.6228 59.3318 61.1524 59.1907C61.6819 59.0497 62.3233 58.8009 63.077 58.4446V60.9727C61.7937 61.6112 60.3392 61.9304 58.7131 61.9304ZM60.5479 51.4395C59.8917 51.4395 59.2726 51.7363 58.6909 52.3301C58.1087 52.9244 57.7286 53.6481 57.5492 54.502H58.053C59.2089 54.502 60.1097 54.322 60.755 53.9618C61.4 53.6017 61.723 53.1136 61.723 52.4972C61.723 51.7919 61.3312 51.4395 60.5479 51.4395Z"
        />
        <path
          id="sChar"
          d="M74.8032 57.5983C74.8032 58.9943 74.339 60.0652 73.4101 60.8111C72.4815 61.5575 71.1891 61.9305 69.5331 61.9305C68.7348 61.9305 68.0394 61.875 67.4463 61.7636C66.8534 61.6523 66.2995 61.4668 65.7848 61.2067V58.4448C66.9557 59.113 68.1456 59.4469 69.3541 59.4469C69.9509 59.4469 70.4395 59.3265 70.8199 59.0849C71.2002 58.8437 71.3906 58.5155 71.3906 58.0994C71.3906 57.7804 71.2524 57.4943 70.9765 57.242C70.7003 56.9893 70.2118 56.6703 69.5106 56.2842C68.608 55.7793 67.9778 55.2761 67.6198 54.7751C67.2618 54.2738 67.0825 53.6818 67.0825 52.9987C67.0825 51.7363 67.4948 50.7584 68.3191 50.0638C69.1433 49.3698 70.3199 49.0227 71.8492 49.0227C73.3487 49.0227 74.7025 49.3751 75.911 50.0806L74.8032 52.4753C73.7589 51.8515 72.7966 51.5395 71.9164 51.5395C71.491 51.5395 71.1481 51.6341 70.887 51.8234C70.6259 52.013 70.4954 52.2673 70.4954 52.5865C70.4954 52.8762 70.6143 53.1303 70.8534 53.3495C71.092 53.5683 71.5397 53.845 72.1961 54.1792C73.1136 54.6468 73.7774 55.1557 74.1878 55.7047C74.598 56.2544 74.8032 56.8852 74.8032 57.5983Z"
        />
        <path
          id="tChar"
          d="M82.1208 59.2243C82.6059 59.2243 83.2099 59.0943 83.9333 58.8345V61.3403C83.1054 61.7338 82.1132 61.9307 80.9571 61.9307C79.8383 61.9307 79.0157 61.6969 78.49 61.2291C77.964 60.7613 77.701 60.0371 77.701 59.0574C77.701 58.6863 77.7458 58.2706 77.8353 57.8098L79.1221 51.8068H77.4214L77.7458 50.1698L79.939 49.2341L81.416 46.6057H83.5865L83.0383 49.2565H86.2047L85.6454 51.8068H82.49L81.2033 57.8098C81.1586 58.0325 81.1363 58.2293 81.1363 58.4001C81.1363 58.9496 81.4642 59.2243 82.1208 59.2243Z"
        />
        <path
          id="dish"
          d="M86.9125 67.0995L84.9739 64.321H2.43223L0.493718 67.0995H13.1683C20.687 75.4124 31.5806 80.6407 43.7031 80.6407C55.8254 80.6407 66.719 75.4124 74.2377 67.0995H86.9125Z"
        />
      </svg>
      <span className="sr-only">Welcome to the Ohio Devfest at BGSU</span>
    </>
  )
}
