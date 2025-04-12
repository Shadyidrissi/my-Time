import React from 'react'

function Header() {
  return (
    <div id='header'>
      <h3 id='name-header'>Mohamed Chadi Idrissi Bri</h3>
      <a id='icon-notification'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        <span id='alert'>2</span>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg> */}
      </a>
      <a id='icon-wallet'>
        <svg width="30" height="30" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 3.25C4.50736 3.25 3.5 4.25736 3.5 5.5V18.5C3.5 19.7426 4.50736 20.75 5.75 20.75H18.75C19.9926 20.75 21 19.7426 21 18.5V9.5C21 8.25736 19.9926 7.25 18.75 7.25H18.5V5.5C18.5 4.25736 17.4926 3.25 16.25 3.25H5.75ZM17 7.25V5.5C17 5.08579 16.6642 4.75 16.25 4.75H5.75C5.33579 4.75 5 5.08579 5 5.5V7.25H17ZM5 8.75V18.5C5 18.9142 5.33579 19.25 5.75 19.25H18.75C19.1642 19.25 19.5 18.9142 19.5 18.5V9.5C19.5 9.08579 19.1642 8.75 18.75 8.75H5Z" fill="#323544" />
        </svg>
          <p> : 3000 DH</p>
      </a>
    </div>
  )
}

export default Header