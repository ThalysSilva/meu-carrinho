import React from 'react'
export default function LoadingSpinner() {
  return (
    <span className="animate-spin">
      <svg
        width="20"
        height="20"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.22446 4.20728e-08C4.78909 4.20728e-08 4.38317 0.185264 4.12895 0.470378C3.87474 0.755491 3.76161 1.11111 3.76161 1.45833C3.76161 1.80556 3.87474 2.16118 4.12895 2.44629C4.38317 2.7314 4.78909 2.91667 5.22446 2.91667C5.65983 2.91667 6.06574 2.7314 6.31996 2.44629C6.57418 2.16118 6.68731 1.80556 6.68731 1.45833C6.68731 1.11111 6.57418 0.755491 6.31996 0.470378C6.06574 0.185264 5.65983 4.20728e-08 5.22446 4.20728e-08ZM10.4489 4.20728e-08C9.53336 -0.000205583 8.77775 0.753339 8.77709 1.66585C8.77643 2.57913 9.53211 3.33333 10.4481 3.33333C11.364 3.33399 12.1201 2.58027 12.1207 1.66748C12.1214 0.754202 11.3657 4.20728e-08 10.4497 4.20728e-08H10.4489ZM5.22446 1.25C5.34636 1.25 5.35841 1.27307 5.38282 1.30046C5.40724 1.32784 5.43344 1.38889 5.43344 1.45833C5.43344 1.52778 5.40724 1.58882 5.38282 1.61621C5.35841 1.6436 5.34636 1.66667 5.22446 1.66667C5.10255 1.66667 5.09051 1.6436 5.06609 1.61621C5.04167 1.58882 5.01548 1.52778 5.01548 1.45833C5.01548 1.38889 5.04167 1.32784 5.06609 1.30046C5.09051 1.27307 5.10255 1.25 5.22446 1.25ZM10.4481 1.25H10.4489H10.4497C10.6873 1.25 10.867 1.42911 10.8669 1.66667C10.8667 1.90471 10.6874 2.0835 10.4497 2.08333H10.4489H10.4481C10.2106 2.08333 10.0308 1.90422 10.031 1.66667C10.0311 1.42862 10.2105 1.24983 10.4481 1.25ZM1.25387 3.75C0.921323 3.75 0.602396 3.8817 0.36725 4.11612C0.132104 4.35054 0 4.66848 0 5C0 5.33152 0.132104 5.64946 0.36725 5.88388C0.602396 6.1183 0.921323 6.25 1.25387 6.25C1.58642 6.25 1.90534 6.1183 2.14049 5.88388C2.37564 5.64946 2.50774 5.33152 2.50774 5C2.50774 4.66848 2.37564 4.35054 2.14049 4.11612C1.90534 3.8817 1.58642 3.75 1.25387 3.75ZM14.0015 4.16667C13.4269 4.16667 12.9165 4.40401 12.5926 4.76725C12.2687 5.13049 12.1207 5.59028 12.1207 6.04167C12.1207 6.49306 12.2687 6.95284 12.5926 7.31608C12.9165 7.67932 13.4269 7.91667 14.0015 7.91667C14.5762 7.91667 15.0866 7.67932 15.4105 7.31608C15.7344 6.95284 15.8824 6.49306 15.8824 6.04167C15.8824 5.59028 15.7344 5.13049 15.4105 4.76725C15.0866 4.40401 14.5762 4.16667 14.0015 4.16667ZM14.0015 5.41667C14.2628 5.41667 14.3793 5.49182 14.4734 5.59733C14.5675 5.70284 14.6285 5.86806 14.6285 6.04167C14.6285 6.21528 14.5675 6.38049 14.4734 6.486C14.3793 6.59151 14.2628 6.66667 14.0015 6.66667C13.7403 6.66667 13.6238 6.59151 13.5297 6.486C13.4356 6.38049 13.3746 6.21528 13.3746 6.04167C13.3746 5.86806 13.4356 5.70284 13.5297 5.59733C13.6238 5.49182 13.7403 5.41667 14.0015 5.41667ZM1.04489 9.16667C0.467693 9.16667 0 9.63292 0 10.2083C0 10.7837 0.467693 11.25 1.04489 11.25C1.62209 11.25 2.08978 10.7837 2.08978 10.2083C2.08978 9.63292 1.62209 9.16667 1.04489 9.16667ZM12.5387 9.58333C11.8944 9.58333 11.3317 9.84672 10.973 10.249C10.6143 10.6513 10.4489 11.1632 10.4489 11.6667C10.4489 12.1701 10.6143 12.682 10.973 13.0843C11.3317 13.4866 11.8944 13.75 12.5387 13.75C13.183 13.75 13.7457 13.4866 14.1044 13.0843C14.4631 12.682 14.6285 12.1701 14.6285 11.6667C14.6285 11.1632 14.4631 10.6513 14.1044 10.249C13.7457 9.84672 13.183 9.58333 12.5387 9.58333ZM12.5387 10.8333C12.8696 10.8333 13.0384 10.9345 13.1673 11.0791C13.2962 11.2237 13.3746 11.441 13.3746 11.6667C13.3746 11.8924 13.2962 12.1097 13.1673 12.2542C13.0384 12.3988 12.8696 12.5 12.5387 12.5C12.2078 12.5 12.039 12.3988 11.9101 12.2542C11.7812 12.1097 11.7028 11.8924 11.7028 11.6667C11.7028 11.441 11.7812 11.2237 11.9101 11.0791C12.039 10.9345 12.2078 10.8333 12.5387 10.8333ZM3.76161 12.9167C3.53991 12.9167 3.32729 13.0045 3.17053 13.1607C3.01377 13.317 2.9257 13.529 2.9257 13.75C2.9257 13.971 3.01377 14.183 3.17053 14.3393C3.32729 14.4955 3.53991 14.5833 3.76161 14.5833C3.98331 14.5833 4.19593 14.4955 4.35269 14.3393C4.50945 14.183 4.59752 13.971 4.59752 13.75C4.59752 13.529 4.50945 13.317 4.35269 13.1607C4.19593 13.0045 3.98331 12.9167 3.76161 12.9167ZM8.15016 13.75C7.98388 13.75 7.82442 13.8158 7.70684 13.9331C7.58927 14.0503 7.52322 14.2092 7.52322 14.375C7.52322 14.5408 7.58927 14.6997 7.70684 14.8169C7.82442 14.9342 7.98388 15 8.15016 15C8.31643 15 8.47589 14.9342 8.59346 14.8169C8.71104 14.6997 8.77709 14.5408 8.77709 14.375C8.77709 14.2092 8.71104 14.0503 8.59346 13.9331C8.47589 13.8158 8.31643 13.75 8.15016 13.75Z"
          fill="white"
        />
      </svg>
    </span>
  );
}
