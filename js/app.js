const btnPlus = document.getElementById('plus');
const displayPra = document.querySelectorAll('.display-none');
const btnMinus = document.getElementById('minus');
const disPra = document.getElementById('p1');


btnPlus.addEventListener("click", toggler);
btnMinus.addEventListener("click", togglerFunction);

function toggler() {

    for (const paragraph of displayPra) {


        if (paragraph.classList.toggle('show')) {
            btnPlus.innerHTML =
            `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
            <path d="M15.2 3.90301C12.7897 3.90321 10.4336 4.61813 8.42955 5.95737C6.42554 7.29662 4.86366 9.20004 3.94141 11.4269C3.01915 13.6538 2.77795 16.1042 3.2483 18.4682C3.71866 20.8322 4.87943 23.0036 6.58386 24.7079C8.28828 26.4122 10.4598 27.5728 12.8238 28.0429C15.1878 28.5131 17.6382 28.2717 19.865 27.3492C22.0918 26.4268 23.9951 24.8648 25.3342 22.8606C26.6733 20.8565 27.388 18.5003 27.388 16.09C27.3848 12.8585 26.0997 9.7603 23.8147 7.4753C21.5297 5.19029 18.4315 3.90618 15.2 3.90301ZM19.888 17.027H10.513C10.2697 17.0191 10.039 16.9168 9.86963 16.7419C9.7003 16.5669 9.60564 16.333 9.60564 16.0895C9.60564 15.846 9.7003 15.6121 9.86963 15.4372C10.039 15.2622 10.2697 15.16 10.513 15.152H19.887C20.1358 15.152 20.3744 15.2508 20.5503 15.4267C20.7262 15.6027 20.825 15.8412 20.825 16.09C20.825 16.3388 20.7262 16.5774 20.5503 16.7533C20.3744 16.9292 20.1358 17.028 19.887 17.028L19.888 17.027Z" fill="#301534"/>
            </svg>`
        } else {
            btnPlus.innerHTML =
            `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
            <path d="M15.2 4.083C12.7897 4.0832 10.4336 4.79812 8.42955 6.13737C6.42554 7.47661 4.86366 9.38003 3.94141 11.6069C3.01915 13.8338 2.77795 16.2842 3.2483 18.6482C3.71866 21.0122 4.87943 23.1836 6.58386 24.8879C8.28828 26.5921 10.4598 27.7527 12.8238 28.2229C15.1878 28.6931 17.6382 28.4517 19.865 27.5292C22.0918 26.6068 23.9951 25.0448 25.3342 23.0406C26.6733 21.0365 27.388 18.6803 27.388 16.27C27.384 13.0388 26.0987 9.941 23.8138 7.65617C21.529 5.37133 18.4313 4.08697 15.2 4.083ZM19.888 17.207H16.138V20.957C16.138 21.2058 16.0392 21.4444 15.8633 21.6203C15.6874 21.7962 15.4488 21.895 15.2 21.895C14.9512 21.895 14.7127 21.7962 14.5367 21.6203C14.3608 21.4444 14.262 21.2058 14.262 20.957V17.207H10.512C10.2687 17.1991 10.038 17.0968 9.86863 16.9219C9.6993 16.7469 9.60464 16.513 9.60464 16.2695C9.60464 16.026 9.6993 15.7921 9.86863 15.6172C10.038 15.4422 10.2687 15.3399 10.512 15.332H14.262V11.582C14.262 11.3332 14.3608 11.0946 14.5367 10.9187C14.7127 10.7428 14.9512 10.644 15.2 10.644C15.4488 10.644 15.6874 10.7428 15.8633 10.9187C16.0392 11.0946 16.138 11.3332 16.138 11.582V15.332H19.888C20.1368 15.332 20.3754 15.4308 20.5513 15.6067C20.7272 15.7826 20.826 16.0212 20.826 16.27C20.826 16.5188 20.7272 16.7574 20.5513 16.9333C20.3754 17.1092 20.1368 17.207 19.888 17.207Z" fill="#AD28EB"/>
            </svg>`
        }
    }
}

function togglerFunction() {

    if (disPra.classList.toggle('show')) {
        btnMinus.innerHTML =
        `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
        <path d="M15.2 4.083C12.7897 4.0832 10.4336 4.79812 8.42955 6.13737C6.42554 7.47661 4.86366 9.38003 3.94141 11.6069C3.01915 13.8338 2.77795 16.2842 3.2483 18.6482C3.71866 21.0122 4.87943 23.1836 6.58386 24.8879C8.28828 26.5921 10.4598 27.7527 12.8238 28.2229C15.1878 28.6931 17.6382 28.4517 19.865 27.5292C22.0918 26.6068 23.9951 25.0448 25.3342 23.0406C26.6733 21.0365 27.388 18.6803 27.388 16.27C27.384 13.0388 26.0987 9.941 23.8138 7.65617C21.529 5.37133 18.4313 4.08697 15.2 4.083ZM19.888 17.207H16.138V20.957C16.138 21.2058 16.0392 21.4444 15.8633 21.6203C15.6874 21.7962 15.4488 21.895 15.2 21.895C14.9512 21.895 14.7127 21.7962 14.5367 21.6203C14.3608 21.4444 14.262 21.2058 14.262 20.957V17.207H10.512C10.2687 17.1991 10.038 17.0968 9.86863 16.9219C9.6993 16.7469 9.60464 16.513 9.60464 16.2695C9.60464 16.026 9.6993 15.7921 9.86863 15.6172C10.038 15.4422 10.2687 15.3399 10.512 15.332H14.262V11.582C14.262 11.3332 14.3608 11.0946 14.5367 10.9187C14.7127 10.7428 14.9512 10.644 15.2 10.644C15.4488 10.644 15.6874 10.7428 15.8633 10.9187C16.0392 11.0946 16.138 11.3332 16.138 11.582V15.332H19.888C20.1368 15.332 20.3754 15.4308 20.5513 15.6067C20.7272 15.7826 20.826 16.0212 20.826 16.27C20.826 16.5188 20.7272 16.7574 20.5513 16.9333C20.3754 17.1092 20.1368 17.207 19.888 17.207Z" fill="#AD28EB"/>
        </svg>`
    } else {
        btnMinus.innerHTML =
        `<svg xmlns="http://www.w3.org/2000/svg" width="31" height="32" viewBox="0 0 31 32" fill="none">
        <path d="M15.2 3.90301C12.7897 3.90321 10.4336 4.61813 8.42955 5.95737C6.42554 7.29662 4.86366 9.20004 3.94141 11.4269C3.01915 13.6538 2.77795 16.1042 3.2483 18.4682C3.71866 20.8322 4.87943 23.0036 6.58386 24.7079C8.28828 26.4122 10.4598 27.5728 12.8238 28.0429C15.1878 28.5131 17.6382 28.2717 19.865 27.3492C22.0918 26.4268 23.9951 24.8648 25.3342 22.8606C26.6733 20.8565 27.388 18.5003 27.388 16.09C27.3848 12.8585 26.0997 9.7603 23.8147 7.4753C21.5297 5.19029 18.4315 3.90618 15.2 3.90301ZM19.888 17.027H10.513C10.2697 17.0191 10.039 16.9168 9.86963 16.7419C9.7003 16.5669 9.60564 16.333 9.60564 16.0895C9.60564 15.846 9.7003 15.6121 9.86963 15.4372C10.039 15.2622 10.2697 15.16 10.513 15.152H19.887C20.1358 15.152 20.3744 15.2508 20.5503 15.4267C20.7262 15.6027 20.825 15.8412 20.825 16.09C20.825 16.3388 20.7262 16.5774 20.5503 16.7533C20.3744 16.9292 20.1358 17.028 19.887 17.028L19.888 17.027Z" fill="#301534"/>
        </svg>`
    }
}
