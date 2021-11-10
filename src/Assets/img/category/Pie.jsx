import React from 'react'

export function Pie() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={60}
      fill="currentColor"
      viewBox="0 0 511.999 511.999"
    >
      <path d="M503.277 275.885c-3.568-6.951-7.258-14.14-7.258-19.885s3.689-12.934 7.258-19.885c5.094-9.924 10.362-20.187 8.238-30.931-2.204-11.111-11.576-19.06-19.846-26.074-5.797-4.917-11.791-10.001-13.863-14.991-2.142-5.163-1.502-13.121-.882-20.816.903-11.215 1.838-22.812-4.343-32.041-6.224-9.294-17.344-12.864-28.098-16.317-7.31-2.347-14.869-4.774-18.768-8.672-3.893-3.893-6.318-11.449-8.663-18.757-3.452-10.755-7.02-21.877-16.32-28.112-9.227-6.172-20.82-5.236-32.032-4.332-7.699.622-15.661 1.264-20.829-.88-4.984-2.07-10.066-8.063-14.98-13.858-7.013-8.272-14.963-17.647-26.081-19.852-10.738-2.125-21.002 3.145-30.927 8.239-6.951 3.568-14.139 7.258-19.885 7.258s-12.934-3.69-19.885-7.258c-9.924-5.094-20.185-10.367-30.932-8.238-11.111 2.204-19.06 11.576-26.073 19.845-4.917 5.798-10.002 11.792-14.988 13.862-5.163 2.14-13.116 1.5-20.804.882-4.442-.357-9.037-.721-13.501-.632a7.5 7.5 0 00.316 14.997c3.704-.079 7.726.245 11.982.587 9.461.761 19.245 1.549 27.754-1.978 8.336-3.459 14.611-10.859 20.68-18.014 5.691-6.711 11.577-13.649 17.547-14.833 5.62-1.115 13.527 2.945 21.169 6.868 8.537 4.382 17.364 8.913 26.735 8.913s18.198-4.531 26.735-8.913c7.643-3.923 15.544-7.977 21.164-6.87 5.976 1.186 11.862 8.127 17.554 14.839 6.065 7.153 12.337 14.55 20.67 18.01 8.513 3.531 18.313 2.741 27.785 1.977 8.655-.697 17.602-1.419 22.479 1.844 4.958 3.324 7.716 11.92 10.383 20.232 2.891 9.007 5.879 18.32 12.339 24.78 6.465 6.465 15.78 9.456 24.789 12.348 8.309 2.668 16.902 5.427 20.221 10.382 3.272 4.887 2.552 13.835 1.854 22.49-.764 9.469-1.552 19.261 1.979 27.77 3.459 8.336 10.859 14.611 18.014 20.68 6.711 5.691 13.65 11.576 14.834 17.548 1.111 5.622-2.945 13.525-6.869 21.169-4.382 8.537-8.913 17.364-8.913 26.735s4.531 18.198 8.913 26.735c3.924 7.643 7.98 15.546 6.87 21.162-1.037 5.221-6.455 10.366-12.278 15.372l-37.374-11.632a197.473 197.473 0 006.207-36.081 7.5 7.5 0 00-6.901-8.054 7.486 7.486 0 00-8.053 6.901 182.547 182.547 0 01-5.586 32.773l-174.59-54.337a7.5 7.5 0 00-9.389 9.389l54.341 174.603a183.57 183.57 0 01-47.18 6.14c-100.891 0-182.973-82.081-182.973-182.972S155.108 73.028 256 73.028c46.367 0 90.594 17.372 124.533 48.916 33.762 31.38 54.314 73.875 57.872 119.657a7.495 7.495 0 008.058 6.896 7.5 7.5 0 006.896-8.058c-3.849-49.547-26.087-95.531-62.614-129.482C354.021 76.826 306.167 58.029 256 58.029c-109.162 0-197.972 88.81-197.972 197.971S146.837 453.971 256 453.971c17.528 0 34.864-2.286 51.643-6.802l11.626 37.355c-5.007 5.823-10.15 11.241-15.365 12.277-5.626 1.115-13.527-2.946-21.169-6.868-8.537-4.382-17.365-8.913-26.735-8.913-9.371 0-18.198 4.531-26.735 8.913-7.642 3.923-15.543 7.98-21.164 6.87-5.976-1.186-11.862-8.127-17.554-14.839-6.065-7.153-12.337-14.55-20.67-18.01-8.514-3.532-18.313-2.742-27.785-1.977-8.653.699-17.6 1.419-22.479-1.844-4.958-3.324-7.716-11.92-10.383-20.232-2.891-9.007-5.879-18.32-12.339-24.78-6.465-6.465-15.78-9.456-24.789-12.348-8.309-2.668-16.902-5.427-20.221-10.382-3.272-4.887-2.552-13.835-1.854-22.49.764-9.469 1.552-19.261-1.979-27.77-3.459-8.336-10.859-14.611-18.014-20.68-6.711-5.691-13.65-11.576-14.834-17.548-1.111-5.622 2.945-13.525 6.869-21.169 4.382-8.537 8.913-17.364 8.913-26.735s-4.531-18.198-8.913-26.735c-3.924-7.643-7.98-15.546-6.87-21.164 1.185-5.977 8.127-11.863 14.839-17.554 7.154-6.066 14.55-12.337 18.011-20.67 3.531-8.514 2.741-18.311 1.977-27.785-.698-8.653-1.42-17.6 1.844-22.479 3.324-4.958 11.92-7.717 20.233-10.384 9.006-2.89 18.32-5.879 24.78-12.338 6.46-6.46 9.451-15.768 12.344-24.771 1.323-4.116 2.572-8.003 4.086-11.438a7.5 7.5 0 00-13.728-6.045c-1.827 4.149-3.256 8.594-4.637 12.893-2.348 7.305-4.775 14.859-8.671 18.754-3.893 3.893-11.45 6.318-18.757 8.663-10.755 3.452-21.878 7.021-28.112 16.32-6.173 9.226-5.237 20.82-4.333 32.032.621 7.7 1.264 15.662-.88 20.83-2.069 4.984-8.062 10.065-13.858 14.979C12.066 186.121 2.69 194.07.485 205.188c-2.123 10.74 3.144 21.003 8.239 30.927 3.568 6.951 7.257 14.14 7.257 19.885s-3.689 12.934-7.257 19.885c-5.095 9.924-10.362 20.187-8.238 30.931 2.204 11.111 11.576 19.06 19.846 26.074 5.797 4.917 11.791 10.001 13.863 14.991 2.142 5.163 1.502 13.121.882 20.815-.903 11.215-1.838 22.812 4.343 32.041 6.224 9.294 17.344 12.864 28.098 16.317 7.31 2.347 14.869 4.774 18.768 8.672 3.893 3.893 6.318 11.449 8.663 18.757 3.452 10.755 7.02 21.877 16.32 28.112 9.226 6.172 20.82 5.236 32.032 4.332 7.7-.621 15.662-1.263 20.829.88 4.984 2.07 10.066 8.063 14.98 13.858 7.013 8.272 14.963 17.647 26.081 19.852 1.677.332 3.341.483 4.995.483 8.94 0 17.557-4.423 25.932-8.722 6.951-3.568 14.139-7.258 19.885-7.258s12.934 3.69 19.885 7.258c9.925 5.094 20.192 10.362 30.934 8.238 11.112-2.207 19.054-11.574 26.06-19.838l.496-.585a7.498 7.498 0 001.442-7.08l-5.398-17.345c13.58-14.134 21.744-26.487 24.892-37.665 3.903-13.855.435-26.327-10.31-37.072-15.847-15.846-23.014-36.833-20.566-47.189 1.551-6.558 4.487-13.03 7.596-19.881 4.806-10.589 10.073-22.215 9.538-34.684l143.441 44.643a7.497 7.497 0 007.08-1.442l.579-.491c8.267-7.008 17.637-14.952 19.846-26.073 2.121-10.742-3.147-21.004-8.241-30.929zm-185.903 42.776c-3.268 7.203-6.648 14.65-8.535 22.628-4.065 17.196 6.263 42.954 24.557 61.247 8.691 8.691 13.947 21.16-9.129 47.573l-56.863-182.705 57.282 17.828c3.011 10.673-1.806 21.297-7.312 33.429z"></path>
      <path d="M287.029 120.803c-14.32 6.323-24.2 17.321-27.822 30.966s-.494 28.094 8.806 40.686a7.499 7.499 0 009.063 2.404c14.319-6.324 24.199-17.321 27.82-30.966 3.622-13.645.494-28.094-8.805-40.686a7.502 7.502 0 00-9.062-2.404zm3.369 39.244c-1.943 7.322-6.736 13.58-13.73 18.068-3.848-7.364-4.908-15.175-2.965-22.498s6.737-13.581 13.731-18.069c3.848 7.365 4.908 15.176 2.964 22.499zM221.944 391.836a7.464 7.464 0 003.027-.64c14.319-6.324 24.2-17.321 27.821-30.966 3.621-13.644.494-28.094-8.806-40.686a7.5 7.5 0 00-9.063-2.405c-14.319 6.323-24.199 17.321-27.82 30.966-3.622 13.644-.494 28.094 8.805 40.686a7.5 7.5 0 006.036 3.045zm-.343-39.883c1.943-7.323 6.736-13.581 13.73-18.068 3.848 7.365 4.908 15.176 2.965 22.498s-6.736 13.58-13.73 18.068c-3.849-7.365-4.909-15.175-2.965-22.498zM206.975 213.824a7.5 7.5 0 006.613-6.646c1.684-15.563-2.9-29.618-12.906-39.576-10.006-9.959-24.079-14.477-39.64-12.717a7.5 7.5 0 00-6.613 6.646c-1.684 15.563 2.9 29.618 12.908 39.577h-.001c8.591 8.55 20.183 13.089 33.134 13.088 2.133 0 4.305-.123 6.505-.372zm-29.057-23.348c-5.371-5.344-8.394-12.624-8.783-20.925 8.302.35 15.597 3.338 20.967 8.682 5.369 5.344 8.392 12.623 8.781 20.924-8.301-.349-15.596-3.337-20.965-8.681zM151.785 259.707c-13.628 3.687-24.578 13.62-30.832 27.97a7.498 7.498 0 002.448 9.05c9.142 6.685 19.241 10.134 29.288 10.134 3.84 0 7.673-.504 11.44-1.523 13.627-3.686 24.577-13.619 30.833-27.969a7.5 7.5 0 00-2.448-9.051c-12.637-9.239-27.099-12.297-40.729-8.611zm8.429 31.152c-.001 0-.001 0 0 0-7.313 1.98-15.13.956-22.513-2.856 4.453-7.015 10.688-11.838 18.001-13.817 7.314-1.978 15.127-.956 22.513 2.857-4.454 7.015-10.689 11.837-18.001 13.816zM347.871 206.662c-13.627 3.686-24.578 13.619-30.834 27.969a7.5 7.5 0 002.448 9.051c9.143 6.685 19.242 10.133 29.289 10.133 3.84 0 7.672-.503 11.439-1.523 13.628-3.686 24.579-13.62 30.833-27.969a7.498 7.498 0 00-2.448-9.05c-12.635-9.239-27.099-12.299-40.727-8.611zm8.426 31.152c-7.316 1.98-15.13.956-22.513-2.856 4.454-7.016 10.689-11.839 18.003-13.817 7.312-1.978 15.128-.956 22.511 2.857-4.453 7.014-10.688 11.837-18.001 13.816z"></path>
    </svg>
  )
}