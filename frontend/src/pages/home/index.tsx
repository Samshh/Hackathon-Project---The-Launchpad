import { useNavigate } from 'react-router-dom';
import HomeBtn from '../../components/HomeLogo';
import { Button } from '../../components/ui/button';
export default function HomePage() {
  const navigate = useNavigate();

  const toRegister = () => {
    navigate('/register');
  };

  const toLogin = () => {
    navigate('/login');
  };

  return (
    <main className="flex flex-col justify-between max-w-[90rem] mx-auto px-[3.5rem] pt-[1rem] pb-[4.5rem] min-h-[51.875rem] h-screen overflow-hidden">
      <nav className="sticky top-0 flex items-center justify-between">
        <HomeBtn />
        <div className="flex items-center justify-center gap-[1rem]">
          <Button size={'lg'} variant={'outline'} onClick={toLogin}>
            Login
          </Button>
          <Button size={'lg'} onClick={toRegister}>
            Register
          </Button>
        </div>
      </nav>
      <div className="flex items-center min-h-[33.75rem] h-full">
        <div className="flex flex-col w-1/2 gap-[1rem]">
          <h1 className="font-bold text-black">Schedule appointments with doctors in a safe and secure way.</h1>
          <h5 className="font-normal text-gray-600">
            ChainMed Connect is an online doctor appointment scheduling app that uses the power of blockchain to keep
            your medical data encrypted.
          </h5>
          <Button size={'lg'} onClick={toRegister} className="w-min">
            Get Started
          </Button>
        </div>
        <svg width="784" height="966" viewBox="0 0 784 966" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M382.206 193.759C365.521 203.81 349.127 208.667 341.431 206.684C322.133 201.713 320.359 131.161 335.291 103.348C350.222 75.5341 426.981 63.4111 430.85 118.519C432.193 137.645 424.157 154.714 412.284 168.642L433.573 267.807H371.733L382.206 193.759Z"
            fill="#B28B67"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M379.115 124.605C373.766 116.645 368.631 110.574 361.95 107.048C334.764 107.477 331.581 102.607 331.581 86.1901C335.972 83.0499 351.466 77.7624 368.817 76.2751C377.668 73.7437 388.153 74.2198 398.254 78.4423C410.724 81.978 421.282 89.5925 425.945 103.848C442.818 132.948 430.012 163.241 412.753 173.589C408.159 168.149 404.15 162.878 400.573 157.832C403.446 155.026 405.23 151.111 405.23 146.779C405.23 138.246 398.309 131.329 389.77 131.329C389.143 131.329 388.524 131.366 387.915 131.439C387.531 142.107 385.95 178.202 381.797 190.739C376.9 205.52 348.328 209.15 338.363 209.15C329.755 209.15 330.049 201.004 330.259 195.167C330.289 194.326 330.318 193.533 330.318 192.819C330.318 191.328 332.259 191.332 334.452 191.336C337.299 191.342 340.572 191.348 340.572 188.083C340.572 184.524 335.65 181.794 331.246 179.351C328.499 177.827 325.952 176.415 324.928 174.982C321.698 170.464 320.61 164.369 325.483 164.369C328.147 164.369 331.802 165.904 336.198 167.75C342.836 170.538 351.165 174.035 360.33 174.035C375.47 174.035 379.07 125.216 379.115 124.605Z"
            fill="#191847"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M149.605 673.823C154.4 726.203 149.608 838.793 147.028 871.271C145.407 891.683 117.571 886.339 114.973 870.003C114.533 867.236 112.739 857.513 110.063 843.005C96.9397 771.868 62.5939 585.689 62.5331 540.419C62.5053 519.66 108.749 503.061 127.249 528.136C142.46 517.459 164.049 514.596 177.36 536.161C187.436 552.486 211.379 598.832 236.913 652.952C259.282 700.363 294.236 815.453 294.236 815.453L264.562 829.002C264.562 829.002 191.261 711.223 145.108 628.645C146.64 642.855 148.163 658.068 149.605 673.823Z"
            fill="#B28B67"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M292.114 772.844L190.265 531.719C165.866 492.495 97.457 539.701 105.778 562.451C124.668 614.101 220.741 781.313 226.369 796.701L292.114 772.844Z"
            fill="#1F28CF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M59.9564 559.245C59.9564 627.59 89.9327 788.245 89.9533 803.294L162.569 800.847C162.569 800.847 143.529 591.328 146.51 589.909C150.982 587.779 329.831 614.647 383.471 616.675C460.819 619.601 492.817 572.178 495.413 482.183L345.586 482.183C345.586 482.183 153.413 505.108 92.9777 514.073C67.1044 517.911 59.9564 540.418 59.9564 559.245Z"
            fill="#2B44FF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M245.321 753.668C253.896 751.531 262.581 756.75 264.72 765.323L281.908 834.218C284.047 842.792 278.83 851.474 270.255 853.611L204.674 869.952C196.1 872.089 187.415 866.87 185.276 858.296L168.088 789.401C165.949 780.828 171.165 772.145 179.74 770.009L245.321 753.668ZM244.19 777.92C246.333 777.386 248.504 778.691 249.039 780.834L260.776 827.88C261.311 830.023 260.007 832.194 257.863 832.728L205.806 845.699C203.662 846.233 201.491 844.929 200.956 842.785L189.219 795.74C188.684 793.596 189.989 791.426 192.132 790.892L244.19 777.92Z"
            fill="#C5CFD6"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M146.95 828.476C148.007 827.973 149.275 828.451 149.697 829.543C151.413 833.981 155.293 844.62 155.293 850.046C155.293 857.011 152.971 870.374 152.971 870.374C144.886 870.374 7.64262 870.374 7.64262 870.374C7.64262 870.374 1.97775 851.658 14.1828 850.165C26.3878 848.673 34.4607 847.47 34.4607 847.47L103.49 816.716C104.004 816.487 104.606 816.727 104.821 817.248L109.781 829.272C109.781 829.272 121.08 834.541 128.144 834.541C133.573 834.541 142.917 830.395 146.95 828.476Z"
            fill="#E4E4E4"
          />
          <rect width="136.563" height="18.0255" rx="4" transform="matrix(-1 0 0 1 152.717 870.374)" fill="#2F3676" />
          <path
            d="M528.91 506.989C528.91 501.466 524.433 496.989 518.91 496.989H211.673C206.151 496.989 201.673 501.466 201.673 506.989V648.918H524.91C527.119 648.918 528.91 647.127 528.91 644.918V506.989Z"
            fill="#2F3676"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M227.44 496.989H208.398C203.5 496.989 199.324 500.535 198.53 505.368L139.833 862.649H167.367"
            fill="#2F3676"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M152.717 914.15C127.102 914.15 106.337 893.398 106.337 867.799C106.337 842.2 127.102 821.448 152.717 821.448C178.332 821.448 199.097 842.2 199.097 867.799C199.097 893.398 178.332 914.15 152.717 914.15Z"
            fill="#191847"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M299.587 713.295C299.587 821.38 387.262 909 495.414 909C603.566 909 691.24 821.38 691.24 713.295C691.24 605.21 603.566 517.589 495.414 517.589C387.262 517.589 299.587 605.21 299.587 713.295ZM335.66 713.295C335.66 801.469 407.184 872.949 495.414 872.949C583.643 872.949 655.167 801.469 655.167 713.295C655.167 625.12 583.643 553.64 495.414 553.64C407.184 553.64 335.66 625.12 335.66 713.295Z"
            fill="#191847"
          />
          <rect width="20.6133" height="339.909" transform="matrix(-1 0 0 1 505.72 543.34)" fill="#191847" />
          <rect
            width="20.607"
            height="340.015"
            rx="2"
            transform="matrix(-0.707326 0.706888 0.707326 0.706888 382.451 585.835)"
            fill="#191847"
          />
          <rect width="20.6006" height="340.12" rx="2" transform="matrix(0 1 1 0 325.354 702.994)" fill="#191847" />
          <rect
            width="20.607"
            height="340.015"
            rx="2"
            transform="matrix(0.707326 0.706888 0.707326 -0.706888 367.875 826.187)"
            fill="#191847"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M153.543 508.924L235.734 448.607L253.903 493.493L172.512 527.223C149.494 554.245 136.622 565.51 133.898 561.018C131.6 557.23 133.396 553.684 135.05 550.418C136.338 547.873 137.541 545.499 136.656 543.312C134.634 538.317 119.172 538.843 104.519 539.969C89.8673 541.095 94.1373 534.579 97.6702 531.362C112.627 522.415 131.251 514.936 153.543 508.924ZM584.572 615.206C577.021 599.897 551.307 450.689 551.307 450.689L497.461 450.9C497.461 450.9 547.332 611.792 551.307 621.637C556.47 634.425 547.699 653.005 541.752 665.604C540.832 667.554 539.98 669.36 539.257 670.979C547.509 674.669 551.473 670.209 555.652 665.506C560.373 660.194 565.367 654.574 577.125 660.041C581.668 662.153 585.966 664.65 590.166 667.09C604.672 675.517 617.999 683.258 636.128 672.079C639.002 670.307 642.152 663.634 634.542 658.419C615.583 645.427 588.263 622.69 584.572 615.206Z"
            fill="#B28B67"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M398.286 224.886L376.005 221.067C293.337 292.436 259.383 429.545 158.052 502.177L182.441 532.39C358.232 510.638 401.803 343.398 398.286 224.886Z"
            fill="#E87613"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M495.414 504.714C495.414 504.714 361.407 504.714 298.269 504.714C289.261 504.714 290.958 491.714 292.26 485.154C307.29 409.446 365.958 327.836 365.958 220.067L422.824 211.156C469.86 286.756 486.125 379.835 495.414 504.714Z"
            fill="#DDE3E9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M517.581 558.79C526.441 580.057 535.13 598.614 543.316 612.867H585.597C590.146 465.878 534.462 352.776 487.86 284.578C498.207 283.839 507.547 279.512 513.45 268.866C534.235 231.386 526.728 210.75 504.516 203.967C492.302 200.237 480.815 202.783 467.064 205.83C455.812 208.324 443.044 211.154 427.122 211.156C427.116 211.156 427.111 211.156 427.106 211.156C425.563 211.156 424.159 211.259 422.884 211.457L404.015 212.533C404.015 212.533 327.402 472.024 361.756 558.79H517.581Z"
            fill="#FF9B21"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M517.581 558.79C505.956 530.887 494.035 498.318 482.563 464.683C478.293 501.724 471.181 538.927 459.34 558.79H517.581Z"
            fill="black"
            fill-opacity="0.1"
          />
        </svg>
      </div>
    </main>
  );
}
