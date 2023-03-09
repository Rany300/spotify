import type { Title } from "../types/Title";
import "./Player.css";
import "../assets/shuffle.svg";
import { getDurationInMinutes } from "../helpers/helperFunctions";

type PlayerProps = {
  title: Title;
  cover: React.ReactNode;
};

const Player = ({ title, cover }: PlayerProps) => {
  return (
    <div className="player">
      <div className="player_left">
        <div className="player_left_content">
          <div
            className="player_cover"
            style={{ width: "70px", height: "70px" }}>
            {cover}
          </div>
          <div
            className="player_title"
            style={{
              fontFamily: "DM Sans",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <div
              className="player_title_name"
              style={{ fontSize: "18px", color: "white" }}>
              {title.title}
            </div>
            <div
              className="player_title_artist"
              style={{ fontSize: "15px", color: "#B3B3B3" }}>
              {title.artist}
            </div>
          </div>
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ alignSelf: "center", marginLeft: "5px" }}>
            <path
              d="M18.205 1.79099C17.6536 1.2357 16.9979 0.794884 16.2756 0.49387C15.5533 0.192857 14.7786 0.0375869 13.996 0.0369873C12.5158 0.0372293 11.0897 0.59326 10 1.59499C8.91041 0.593091 7.48422 0.0370339 6.00401 0.0369873C5.22055 0.037803 4.44499 0.193547 3.72195 0.495256C2.99891 0.796965 2.34268 1.23868 1.79101 1.79499C-0.561989 4.15799 -0.560989 7.85399 1.79301 10.207L10 18.414L18.207 10.207C20.561 7.85399 20.562 4.15799 18.205 1.79099Z"
              fill="#1DB954"
            />
          </svg>
        </div>
      </div>
      <div className="player_center">
        <div className="player_center_top">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.3395 15.4905C15.876 15.3443 15.2842 14.9633 14.622 14.3003C14.0535 13.7438 13.467 13.0268 12.867 12.2453C12.723 12.4365 12.5797 12.6278 12.4357 12.8228C12.0435 13.3538 11.6422 13.89 11.2335 14.4173C12.6615 16.1498 14.1435 17.8508 16.341 18.1313V20.1563L22.0072 16.8863L16.3402 13.614V15.4905H16.3395ZM6.89399 8.95053C7.46099 9.50553 8.04749 10.2225 8.64899 11.004C8.79449 10.8075 8.94149 10.614 9.08849 10.413C9.48032 9.8809 9.87835 9.35337 10.2825 8.83053C8.75849 6.98253 7.18274 5.15028 4.73549 5.06253H2.11049V7.68753H4.73549C5.22674 7.66728 5.99699 8.05128 6.89399 8.94978V8.95053ZM16.3395 7.75578V9.65778L22.0065 6.38553L16.3395 3.11328V5.09853C14.9115 5.26353 13.7707 6.10953 12.777 7.08153C11.1292 8.71953 9.68924 10.9575 8.26799 12.7365C6.86774 14.5643 5.46299 15.6518 4.73399 15.564H2.10899V18.189H4.73399C6.37274 18.1665 7.64399 17.2395 8.73899 16.1693C10.3845 14.5313 11.826 12.294 13.2465 10.5158C14.4037 9.00303 15.5595 8.01078 16.3395 7.75578Z"
              fill="#C4C4C4"
            />
          </svg>

          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.6667 0.041626L2.62501 6.49996L11.6667 12.9583V0.041626ZM2.62501 6.49996V0.041626H0.0416718V12.9583H2.62501V6.49996Z"
              fill="#C4C4C4"
            />
          </svg>

          <svg
            width="43"
            height="43"
            viewBox="0 0 43 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.5 0.25C17.2971 0.25 13.1887 1.49629 9.69413 3.83127C6.19958 6.16625 3.47592 9.48505 1.86755 13.368C0.259192 17.2509 -0.161629 21.5236 0.658307 25.6457C1.47824 29.7678 3.50211 33.5542 6.47398 36.526C9.44584 39.4979 13.2322 41.5218 17.3543 42.3417C21.4764 43.1616 25.7491 42.7408 29.632 41.1324C33.5149 39.5241 36.8337 36.8004 39.1687 33.3059C41.5037 29.8113 42.75 25.7029 42.75 21.5C42.75 18.7094 42.2003 15.9461 41.1324 13.368C40.0645 10.7898 38.4993 8.44723 36.526 6.47398C34.5528 4.50074 32.2102 2.93547 29.632 1.86756C27.0539 0.799648 24.2906 0.25 21.5 0.25ZM17.3543 28.5V13.381L29 21.5L17.3543 28.5Z"
              fill="white"
            />
          </svg>

          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.333342 0.041626L9.37501 6.49996L0.333342 12.9583V0.041626ZM9.37501 6.49996V0.041626H11.9583V12.9583H9.37501V6.49996Z"
              fill="#C4C4C4"
            />
          </svg>

          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.15 5.33805C16.2776 5.33805 16.3953 5.38205 16.4888 5.45575L16.5625 5.52505L16.5812 5.54705C17.2203 6.33911 17.627 7.29297 17.7562 8.30247C17.8854 9.31196 17.732 10.3375 17.313 11.265C16.894 12.1925 16.2259 12.9855 15.383 13.5559C14.5401 14.1262 13.5555 14.4515 12.5387 14.4955L12.3 14.4999H5.69999C5.58882 14.5 5.47767 14.4967 5.36669 14.49L7.18939 16.3105C7.28034 16.4017 7.33642 16.5218 7.34788 16.6501C7.35933 16.7783 7.32544 16.9065 7.25209 17.0123L7.18939 17.0893C7.09825 17.1803 6.97809 17.2364 6.84985 17.2478C6.72161 17.2593 6.59341 17.2254 6.48759 17.152L6.41059 17.0893L3.66059 14.3393C3.56965 14.2482 3.51356 14.128 3.50211 13.9998C3.49065 13.8716 3.52455 13.7434 3.59789 13.6375L3.66059 13.5605L6.41059 10.8105C6.5076 10.7131 6.63759 10.6555 6.77494 10.6492C6.91229 10.6428 7.04704 10.6881 7.15263 10.7762C7.25823 10.8643 7.32701 10.9887 7.34542 11.1249C7.36383 11.2612 7.33053 11.3994 7.25209 11.5123L7.18939 11.5893L5.38869 13.3889L5.54269 13.3977L5.69999 13.3999H12.3C13.1309 13.4 13.9449 13.1648 14.6477 12.7216C15.3505 12.2783 15.9134 11.6451 16.2713 10.8952C16.6292 10.1453 16.7675 9.30942 16.6701 8.48424C16.5727 7.65905 16.2436 6.8783 15.721 6.23235C15.6564 6.15147 15.616 6.05402 15.6043 5.95119C15.5926 5.84836 15.6102 5.74432 15.655 5.65102C15.6998 5.55773 15.77 5.47898 15.8576 5.42381C15.9451 5.36864 16.0465 5.33929 16.15 5.33915V5.33805ZM10.8106 0.910546C10.9017 0.819603 11.0219 0.763518 11.1501 0.752061C11.2784 0.740603 11.4066 0.7745 11.5124 0.847846L11.5894 0.910546L14.3394 3.66055L14.4021 3.73755C14.4655 3.82939 14.4994 3.93835 14.4994 4.04995C14.4994 4.16154 14.4655 4.2705 14.4021 4.36235L14.3394 4.43935L11.5894 7.18935L11.5124 7.25205C11.4205 7.31543 11.3116 7.34938 11.2 7.34938C11.0884 7.34938 10.9794 7.31543 10.8876 7.25205L10.8106 7.18935L10.7479 7.11235C10.6845 7.0205 10.6506 6.91154 10.6506 6.79995C10.6506 6.68835 10.6845 6.57939 10.7479 6.48755L10.8106 6.41055L12.6113 4.61095L12.4573 4.60215L12.3 4.59995H5.69999C4.86837 4.5999 4.05376 4.83553 3.35058 5.27953C2.6474 5.72353 2.08445 6.35772 1.72697 7.10859C1.36949 7.85947 1.23213 8.69627 1.33081 9.52202C1.42948 10.3478 1.76015 11.1286 2.28449 11.7741C2.37216 11.891 2.40982 12.0379 2.38919 12.1825C2.36856 12.3271 2.29133 12.4576 2.17449 12.5452C2.11664 12.5887 2.0508 12.6202 1.98074 12.6382C1.91068 12.6562 1.83776 12.6602 1.76616 12.6499C1.62155 12.6293 1.49106 12.5521 1.40339 12.4352C0.768724 11.642 0.366167 10.6884 0.240364 9.68033C0.114561 8.67223 0.270427 7.64899 0.690678 6.72408C1.11093 5.79916 1.77914 5.00871 2.62122 4.44039C3.46329 3.87206 4.44632 3.54807 5.46129 3.50435L5.69999 3.49995H12.3C12.4122 3.49995 12.5233 3.50325 12.6333 3.50985L10.8106 1.68935L10.7479 1.61235C10.6745 1.50653 10.6406 1.37833 10.6521 1.25009C10.6636 1.12185 10.7196 1.00169 10.8106 0.910546Z"
              fill="#C4C4C4"
            />
          </svg>
        </div>
        <div className="player_center_bottom">
          <span>0:00</span>
          <span className="player_bar" />
          <span>{getDurationInMinutes(title.duration)}</span>
        </div>
      </div>
      <div className="player_right">
        <div className="player_right_content">
          <svg
            width="15"
            height="19"
            viewBox="0 0 15 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.1263 8.60035C14.8866 7.40633 15.1415 5.95919 14.8348 4.57728C14.5281 3.19537 13.685 1.99189 12.491 1.23159C11.297 0.471296 9.84982 0.216463 8.46791 0.523152C7.086 0.829842 5.88252 1.67293 5.12223 2.86695L5.08116 2.92168L5.04894 2.98205C4.31157 4.16432 4.06805 5.5889 4.37082 6.94898C4.41082 7.13566 4.46184 7.31981 4.52362 7.50046L0.744113 16.0938C0.629589 16.3537 0.612054 16.6461 0.694692 16.9179C0.777329 17.1897 0.954662 17.4229 1.19451 17.5751L2.46058 18.3813C2.69997 18.5342 2.98626 18.5963 3.2675 18.5562C3.54873 18.5161 3.80627 18.3765 3.99339 18.1627L10.1811 11.1029C10.3709 11.0824 10.5593 11.0508 10.7454 11.008C12.1059 10.707 13.2937 9.88372 14.0531 8.71545L14.0941 8.66072L14.1263 8.60035ZM13.6452 4.89071C13.8406 5.76635 13.7448 6.68186 13.3724 7.49808L6.43998 3.08387C6.9416 2.49737 7.59687 2.06242 8.33212 1.8279C9.06737 1.59337 9.85347 1.56858 10.602 1.7563C11.3506 1.94401 12.032 2.33681 12.5696 2.89052C13.1072 3.44423 13.4797 4.13691 13.6452 4.89071ZM3.09762 17.3808L1.83156 16.5746L5.22361 8.8732C6.03409 10.0179 7.26105 10.7991 8.6411 11.0493L3.09762 17.3808ZM5.53012 6.69169C5.33467 5.81605 5.43047 4.90054 5.80293 4.08432L6.43998 3.08387L13.3724 7.49808C12.8707 8.08457 11.5784 9.51998 10.8432 9.7545C10.1079 9.98903 9.32182 10.0138 8.57325 9.8261C7.82468 9.63839 7.1433 9.24559 6.60571 8.69188C6.06813 8.13817 5.69564 7.44549 5.53012 6.69169Z"
              fill="#C4C4C4"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 19H28V21H10V19Z" fill="#C4C4C4" />
            <path d="M19 14H28V16H19V14Z" fill="#C4C4C4" />
            <path d="M10 24H28V26H10V24Z" fill="#C4C4C4" />
            <path d="M10 9L16 13.5L10 18V9Z" fill="#C4C4C4" />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.5 18.0038H4.5C4.1023 18.0034 3.721 17.8452 3.43978 17.564C3.15856 17.2828 3.0004 16.9015 3 16.5038V6.00375C3.0004 5.60605 3.15856 5.22475 3.43978 4.94353C3.721 4.66231 4.1023 4.50415 4.5 4.50375H19.5C19.8977 4.50415 20.279 4.66231 20.5602 4.94353C20.8414 5.22475 20.9996 5.60605 21 6.00375V16.5038C20.9994 16.9014 20.8412 17.2826 20.56 17.5638C20.2788 17.8449 19.8976 18.0032 19.5 18.0038ZM4.5 6.00375V16.5038H19.5V6.00375H4.5Z"
              fill="#1B9145"
            />
            <path d="M1.5 19.5037H22.5V21.0037H1.5V19.5037Z" fill="#1B9145" />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 4.25001C15 3.17101 13.726 2.60001 12.92 3.31601L8.427 7.30901C8.28986 7.43118 8.11266 7.49879 7.929 7.49901H4.25C3.65326 7.49901 3.08097 7.73606 2.65901 8.15802C2.23705 8.57997 2 9.15227 2 9.74901V14.246C2 14.8427 2.23705 15.415 2.65901 15.837C3.08097 16.259 3.65326 16.496 4.25 16.496H7.93C8.11366 16.4962 8.29086 16.5638 8.428 16.686L12.919 20.68C13.725 21.396 15 20.824 15 19.746V4.25001ZM9.425 8.43001L13.5 4.80701V19.189L9.425 15.565C9.01319 15.1986 8.48121 14.9961 7.93 14.996H4.25C4.05109 14.996 3.86032 14.917 3.71967 14.7763C3.57902 14.6357 3.5 14.4449 3.5 14.246V9.75001C3.5 9.55109 3.57902 9.36033 3.71967 9.21968C3.86032 9.07902 4.05109 9.00001 4.25 9.00001H7.93C8.48121 8.99987 9.01319 8.79739 9.425 8.43101V8.43001Z"
              fill="#B3B3B3"
            />
            <path
              d="M18.992 5.89699C19.0712 5.83842 19.1611 5.79602 19.2567 5.77221C19.3523 5.7484 19.4516 5.74365 19.549 5.75823C19.6464 5.77281 19.74 5.80643 19.8244 5.85718C19.9089 5.90793 19.9824 5.9748 20.041 6.05399C21.3162 7.77388 22.0031 9.85894 22 12C22.0028 14.1411 21.3155 16.2262 20.04 17.946C19.9192 18.0987 19.7437 18.1985 19.5506 18.2241C19.3576 18.2498 19.1621 18.1994 19.0056 18.0835C18.8491 17.9676 18.7437 17.7954 18.7119 17.6033C18.6801 17.4111 18.7242 17.2142 18.835 17.054C19.9192 15.5923 20.5031 13.8199 20.5 12C20.5031 10.1801 19.9192 8.40769 18.835 6.94599C18.7764 6.86681 18.734 6.77686 18.7102 6.68129C18.6864 6.58571 18.6817 6.48639 18.6962 6.38898C18.7108 6.29157 18.7445 6.19798 18.7952 6.11357C18.8459 6.02915 18.9128 5.95556 18.992 5.89699Z"
              fill="#B3B3B3"
            />
            <path
              d="M17.143 8.37002C17.2296 8.32305 17.3246 8.2936 17.4226 8.28336C17.5206 8.27312 17.6196 8.28228 17.7141 8.31033C17.8085 8.33837 17.8965 8.38475 17.973 8.44681C18.0495 8.50887 18.1131 8.5854 18.16 8.67202C18.696 9.66202 19 10.797 19 12C19.0017 13.162 18.7129 14.306 18.16 15.328C18.0653 15.5031 17.905 15.6333 17.7143 15.6901C17.5235 15.747 17.3181 15.7257 17.143 15.631C16.968 15.5363 16.8377 15.376 16.7809 15.1853C16.7241 14.9945 16.7453 14.7891 16.84 14.614C17.26 13.837 17.5 12.948 17.5 12C17.5 11.052 17.26 10.163 16.84 9.38602C16.7931 9.29936 16.7637 9.2043 16.7535 9.10627C16.7433 9.00824 16.7526 8.90917 16.7807 8.81472C16.8089 8.72027 16.8554 8.63229 16.9175 8.55582C16.9797 8.47934 17.0563 8.41587 17.143 8.36902V8.37002Z"
              fill="#B3B3B3"
            />
          </svg>
          <div className="player__controls_row" />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 4H20V8"
              stroke="#B3B3B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 10L20 4"
              stroke="#B3B3B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 20H4V16"
              stroke="#B3B3B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 20L10 14"
              stroke="#B3B3B3"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 4.25001C15 3.17101 13.726 2.60001 12.92 3.31601L8.427 7.30901C8.28986 7.43118 8.11266 7.49879 7.929 7.49901H4.25C3.65326 7.49901 3.08097 7.73606 2.65901 8.15802C2.23705 8.57997 2 9.15227 2 9.74901V14.246C2 14.8427 2.23705 15.415 2.65901 15.837C3.08097 16.259 3.65326 16.496 4.25 16.496H7.93C8.11366 16.4962 8.29086 16.5638 8.428 16.686L12.919 20.68C13.725 21.396 15 20.824 15 19.746V4.25001ZM9.425 8.43001L13.5 4.80701V19.189L9.425 15.565C9.01319 15.1986 8.48121 14.9961 7.93 14.996H4.25C4.05109 14.996 3.86032 14.917 3.71967 14.7763C3.57902 14.6357 3.5 14.4449 3.5 14.246V9.75001C3.5 9.55109 3.57902 9.36033 3.71967 9.21968C3.86032 9.07902 4.05109 9.00001 4.25 9.00001H7.93C8.48121 8.99987 9.01319 8.79739 9.425 8.43101V8.43001Z"
              fill="black"
            />
            <path
              d="M18.992 5.89702C19.0712 5.83845 19.1611 5.79605 19.2567 5.77224C19.3523 5.74843 19.4516 5.74368 19.549 5.75826C19.6464 5.77284 19.74 5.80646 19.8244 5.85721C19.9089 5.90796 19.9824 5.97483 20.041 6.05402C21.3162 7.77391 22.0031 9.85897 22 12C22.0028 14.1412 21.3155 16.2262 20.04 17.946C19.9192 18.0988 19.7437 18.1985 19.5506 18.2242C19.3576 18.2498 19.1621 18.1994 19.0056 18.0835C18.8491 17.9676 18.7437 17.7954 18.7119 17.6033C18.6801 17.4112 18.7242 17.2142 18.835 17.054C19.9192 15.5923 20.5031 13.8199 20.5 12C20.5031 10.1801 19.9192 8.40772 18.835 6.94602C18.7764 6.86684 18.734 6.77689 18.7102 6.68132C18.6864 6.58574 18.6817 6.48642 18.6962 6.38901C18.7108 6.2916 18.7445 6.19801 18.7952 6.1136C18.8459 6.02918 18.9128 5.95559 18.992 5.89702Z"
              fill="black"
            />
            <path
              d="M17.143 8.37002C17.2296 8.32305 17.3246 8.2936 17.4226 8.28336C17.5206 8.27312 17.6196 8.28228 17.7141 8.31033C17.8085 8.33837 17.8965 8.38475 17.973 8.44681C18.0495 8.50887 18.1131 8.5854 18.16 8.67202C18.696 9.66202 19 10.797 19 12C19.0017 13.162 18.7129 14.306 18.16 15.328C18.0653 15.5031 17.905 15.6333 17.7143 15.6901C17.5235 15.747 17.3181 15.7257 17.143 15.631C16.968 15.5363 16.8377 15.376 16.7809 15.1853C16.7241 14.9945 16.7453 14.7891 16.84 14.614C17.26 13.837 17.5 12.948 17.5 12C17.5 11.052 17.26 10.163 16.84 9.38602C16.7931 9.29936 16.7637 9.2043 16.7535 9.10627C16.7433 9.00824 16.7526 8.90917 16.7807 8.81472C16.8089 8.72027 16.8554 8.63229 16.9175 8.55582C16.9797 8.47934 17.0563 8.41587 17.143 8.36902V8.37002Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Player;
